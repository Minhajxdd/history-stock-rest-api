import { GoogleAuth } from 'google-auth-library';
import { sheets_v4 } from 'googleapis';

export interface IGSheetUtils {
  getAuth(): GoogleAuth;

  getHeaders(): Promise<string[]>;

  getData(
    columnIndex: number,
    rowNumber: number,
  ): Promise<sheets_v4.Schema$ValueRange>;
}
