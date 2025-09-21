import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { fetchSheetStats } from "./stats";

// Helper to load YAML/Markdown from content/ for CMS-driven data

const CONTENT_PATH = path.join(process.cwd(), "content");

export async function getSiteSettings() {
  const file = await fs.readFile(path.join(CONTENT_PATH, "site_settings.yml"), "utf8");
  return matter(file).data;
}

export async function getHomeContent() {
  const file = await fs.readFile(path.join(CONTENT_PATH, "home.md"), "utf8");
  return matter(file).data;
}

export async function getStatsSettings() {
  const file = await fs.readFile(path.join(CONTENT_PATH, "stats_settings.yml"), "utf8");
  return matter(file).data;
}

export async function getServiceStats() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  if (!baseUrl) {
    return fetchSheetStats();
  }

  try {
    const res = await fetch(`${baseUrl}/api/stats`, {
      next: { revalidate: 600 }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch stats from API");
    }
    return res.json();
  } catch (error) {
    return fetchSheetStats();
  }
}

export async function getAboutPageContent() {
  // Combine stories, team, partners, etc.
  // For demo, stub out fields; real site would read folder content
  return {
    story: "Our story goes here.",
    mission_vision: "Our mission and vision.",
    team: [],
    partners: [],
    future_plans: "Our future plans."
  };
}

export async function getPartners() {
  // Read all partners markdown files
  return [];
}