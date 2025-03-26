export default () => ({
  google_sheets: {
    google_sheet_id: process.env.GOOGLE_SHEETS_ID,
    credential_path: process.env.CREDENTIALS_PATH,
  },
});
