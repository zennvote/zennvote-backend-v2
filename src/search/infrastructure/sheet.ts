import { google, sheets_v4 } from 'googleapis';

import { getAuthorizedClient } from './sheet.auth';
import Episode from '../entity/episode';

type GetSheetBody = sheets_v4.Params$Resource$Spreadsheets$Get;
type Sheet = sheets_v4.Schema$Sheet;
type RowData = sheets_v4.Schema$RowData;
type CellData = sheets_v4.Schema$CellData;

const getSheetRequest = async () => {
  const auth = await getAuthorizedClient();
  const sheet = google.sheets({ auth, version: 'v4' });

  return sheet;
};

const getSheet = async (spreadsheetId: string, range: string) => {
  const req = await getSheetRequest();
  const body: GetSheetBody = { spreadsheetId, ranges: [range], includeGridData: true };

  const res = await req.spreadsheets.get(body);
  const sheets = res.data.sheets as Sheet[];

  return sheets[0];
};

const getRows = ({ data }: Sheet) => data?.[0].rowData ?? [];

export const getSeasonData = async (season: number) => {
  const sheetId = process.env.SEASON_SHEET_ID as string;
  const range = `시즌 ${season}!B2:K27`;
  const sheet = await getSheet(sheetId, range);

  const rows = getRows(sheet);
  const values = rows.map((episode, index) => formatDayData(episode, index));
  const flatten = ([] as Episode[])
    .concat(...values)
    .map(episode => ({ ...episode, episode: episode.episode + (season - 1) * 10 }))
    .map(episode => episode as Episode);

  return flatten;
};

const formatDayData = (episodes: RowData, index: number) => {
  return episodes.values
    ?.map((cell, episode) => formatEpisodeData(cell, episode + 1, index + 1))
    .filter(episode => episode !== undefined) as Episode[]
    ?? [];
};

const formatEpisodeData = (cell: CellData, episode: number, index: number) => {
  const rawValue = cell.effectiveValue?.stringValue;
  const color = cell.effectiveFormat?.backgroundColor;
  const votable = (color?.red ?? 0) < 0.9 || color?.red === 1;
  const isOpening = index === 26;

  if (!rawValue) return;

  const values = rawValue.slice((!isOpening && index > 9) ? 4 : 3).split(' : ');

  let isNew = false;
  if (values[0].startsWith('[데뷔] ')) {
    values[0] = values[0].slice(5);
    isNew = true;
  }

  return {
    votable, isNew, episode,
    index: isOpening ? -1 : index,
    producer: values[0],
    song: values[1],
  } as Episode;
};
