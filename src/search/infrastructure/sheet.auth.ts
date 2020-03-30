import { google } from 'googleapis';
import { readFileAsync } from '../../util/file';

export const getAuthorizedClient = async () => {
  const { installed } = await getCredentials();
  const { client_secret, client_id, redirect_uris } = installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  const token = await getToken();
  oAuth2Client.setCredentials(JSON.parse(token));

  return oAuth2Client;
};

const getCredentials = async () => JSON.parse(await readFileAsync('credentials.json'));

const getToken = async () => {
  return await readFileAsync('token.json');
};
