import { google } from 'googleapis';
import { readFileAsync } from '../../util/file';

import fs = require('fs');
import readline = require('readline');

export const getAuthorizedClient = async () => {
  const { installed } = await getCredentials();
  const { client_secret, client_id, redirect_uris } = installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  if (!(await checkToken())) {
    await getNewToken(oAuth2Client);
  }

  const token = await getToken();
  oAuth2Client.setCredentials(JSON.parse(token));

  return oAuth2Client;
};

const getCredentials = async () => JSON.parse(await readFileAsync('credentials.json'));

const getToken = async () => {
  return await readFileAsync('token.json');
};

const checkToken = () => new Promise((resolve, reject) => {
  fs.access('token.json', fs.constants.F_OK, (err) => {
    if (err) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
});

const getNewToken = (oAuth2Client: any) => new Promise((resolve, reject) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile('token.json', JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', 'token.json');
      });

      resolve(oAuth2Client);
    });
  });
});
