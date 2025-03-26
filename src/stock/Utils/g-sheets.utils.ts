import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import configuration from 'src/config/configuration';

@Injectable()
export class GSheetUtils {
  private headerCache: string[] = [];

  getAuth(): GoogleAuth {
    return new google.auth.GoogleAuth({
      keyFile: configuration().google_sheets.credential_path,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  }

  async getHeaders() {
    if (this.headerCache.length) {
      return this.headerCache;
    }

    const auth = this.getAuth();
    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!1:1',
    });

    this.headerCache = (response.data.values?.[0] as string[]) ?? [];

    return this.headerCache;
  }
}
