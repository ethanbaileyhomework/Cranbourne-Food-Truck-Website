import axios from "axios";
import { parse } from "csv-parse/sync";

// Example: fetches CSV published from a Google Sheet
const SHEET_CSV_URL =
  process.env.SHEET_CSV_URL ||
  "https://docs.google.com/spreadsheets/d/e/your-csv-id/pub?output=csv";

const DEFAULT_STATS = {
  total_meals: 0,
  total_guests: 0,
  services_run: 0,
  latest: null as Record<string, string> | null
};

export async function fetchSheetStats() {
  // Download CSV, parse, return totals/latest
  if (!SHEET_CSV_URL || SHEET_CSV_URL.includes("your-csv-id")) {
    return DEFAULT_STATS;
  }

  try {
    const { data } = await axios.get(SHEET_CSV_URL, { maxRedirects: 5 });
    const records = parse(data, {
      columns: true,
      skip_empty_lines: true
    }) as Record<string, string>[];

    let total_meals = 0;
    let total_guests = 0;
    let services_run = 0;
    let latest: Record<string, string> | null = null;

    for (const row of records) {
      total_meals += Number(row.meals ?? 0);
      total_guests += Number(row.guests ?? 0);
      services_run += 1;
      latest = row;
    }

    return {
      total_meals,
      total_guests,
      services_run,
      latest
    };
  } catch (error) {
    return DEFAULT_STATS;
  }
}
