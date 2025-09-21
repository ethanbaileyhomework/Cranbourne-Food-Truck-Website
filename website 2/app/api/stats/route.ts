import { NextResponse } from "next/server";
import { fetchSheetStats } from "@/lib/stats";

// Serverless API route for stats (Google Sheets CSV)
export const revalidate = 600; // 10 min cache

export async function GET() {
  try {
    const stats = await fetchSheetStats();
    return NextResponse.json(stats);
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch stats." }, { status: 500 });
  }
}