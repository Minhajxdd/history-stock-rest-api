export default () => ({
  google_sheets: {
    google_sheet_id: process.env.GOOGLE_SHEETS_ID,
    credential_path: process.env.CREDENTIALS_PATH,
    google_sheets_scopes: process.env.GOOGLE_SHEETS_SCOPES || '',
  },
  date: {
    start_date: process.env.START_DATE || '',
    end_date: process.env.END_DATE || '',
  },
});
