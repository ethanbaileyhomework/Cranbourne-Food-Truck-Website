import axios from "axios";
import { parse } from "csv-parse/sync";

// Example: fetches CSV published from a Google Sheet
const SHEET_CSV_URL = process.env.SHEET_CSV_URL || "https://docs.google.com/spreadsheets/d/e/your-csv-id/pub?output=csv";

export async function fetchSheetStats() {
  // Download CSV, parse, return totals/latest
  const { data } = await axios.get(SHEET_CSV_URL);
  const records = parse(data, { columns: true, skip_empty_lines: true });

  let total_meals = 0;
  let total_guests = 0;
  let services_run = 0;
  let latest: any = null;

  for (const row of records) {
    total_meals += Number(row.meals || 0);
    total_guests += Number(row.guests || 0);
    services_run += 1;
    latest = row;
  }

  return {
    total_meals,
    total_guests,
    services_run,
    latest
  };
}