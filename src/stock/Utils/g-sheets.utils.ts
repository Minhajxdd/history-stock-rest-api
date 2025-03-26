import { Injectable } from '@nestjs/common';
import { google, sheets_v4 } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import configuration from 'src/config/configuration';

@Injectable()
export class GSheetUtils {
  private headerCache: string[] = [];

  getAuth(): GoogleAuth {
    return new google.auth.GoogleAuth({
      keyFile: configuration().google_sheets.credential_path,
      scopes: [configuration().google_sheets.google_sheets_scopes],
    });
  }

  async getHeaders(): Promise<string[]> {
    if (this.headerCache.length) {
      return this.headerCache;
    }

    const auth = this.getAuth();
    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: configuration().google_sheets.google_sheet_id,
      range: 'Sheet1!1:1',
    });

    this.headerCache = (response.data.values?.[0] as string[]) ?? [];

    return this.headerCache;
  }

  async getData(
    columnIndex: number,
    rowNumber: number,
  ): Promise<sheets_v4.Schema$ValueRange> {
    const auth = this.getAuth();
    const sheets = google.sheets({ version: 'v4', auth });

    const range = `Sheet1!${String.fromCharCode(65 + columnIndex)}${rowNumber}`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: range,
    });

    return response.data;
  }
}
