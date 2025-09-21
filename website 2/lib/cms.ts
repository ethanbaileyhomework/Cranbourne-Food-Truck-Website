import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

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
  // Fetches via /api/stats (or direct for SSR)
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/stats", { next: { revalidate: 600 } });
  if (!res.ok) return { total_meals: 0, total_guests: 0, services_run: 0 };
  return res.json();
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