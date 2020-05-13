import { google, sheets_v4 } from 'googleapis';

import { getAuthorizedClient } from '@src/util/sheet.auth';

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

export const getProducerInfo = async () => {
  const sheetId = process.env.PRODUCER_SHEET_ID as string;
  const range = '1.노래자랑P DB!B3:140';
  const sheet = await getSheet(sheetId, range);

  const rows = getRows(sheet);
  const sample = rows[0];
  console.log(rows[0]);
};

const parseData = (raw: RowData) => {
  // 빈 배열이 있을 리가 없으니까 CellData로 강제 형변환.
  const cells = raw.values as CellData[];

  const producer = parseProducerData(cells[0]);
  const episodes = parseEpisodeData(cells.slice(1));
};

const parseProducerData = (cell: CellData) => {
};

const parseEpisodeData = (cells: CellData[]) => {
};
