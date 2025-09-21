import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { load } from "js-yaml";

// Helper to load YAML/Markdown from content/ for CMS-driven data

const CONTENT_PATH = path.join(process.cwd(), "content");

export interface SiteSettingsSocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  [key: string]: string | undefined;
}

export interface SiteSettings {
  site_name?: string;
  logo?: string;
  primary_color?: string;
  contact_email?: string;
  contact_phone?: string;
  contact_address?: string;
  abn?: string;
  social_links?: SiteSettingsSocialLinks;
  bank_account_name?: string;
  bank_bsb?: string;
  bank_account_number?: string;
  bank_reference?: string;
  paypal_link?: string;
  stripe_link?: string;
  looker_url?: string;
  map_embed_url?: string;
  donate_copy?: string;
  volunteer_intro?: string;
  tally_form_url?: string;
  [key: string]: unknown;
}

export interface StatsSettings {
  sheet_id?: string;
  range?: string;
  field_mapping?: unknown;
  fallback_numbers?: unknown;
  looker_url?: string;
  [key: string]: unknown;
}

function ensureObject<T>(data: unknown, filename: string): T {
  if (!data || typeof data !== "object") {
    throw new Error(`Invalid YAML structure in ${filename}`);
  }
  return data as T;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const filePath = path.join(CONTENT_PATH, "site_settings.yml");
  const file = await fs.readFile(filePath, "utf8");
  const parsed = load(file);
  return ensureObject<SiteSettings>(parsed, "site_settings.yml");
}

export async function getHomeContent() {
  const file = await fs.readFile(path.join(CONTENT_PATH, "home.md"), "utf8");
  return matter(file).data;
}

export async function getStatsSettings(): Promise<StatsSettings> {
  const filePath = path.join(CONTENT_PATH, "stats_settings.yml");
  const file = await fs.readFile(filePath, "utf8");
  const parsed = load(file);
  return ensureObject<StatsSettings>(parsed, "stats_settings.yml");
}

export async function getServiceStats() {
  // Fetches via /api/stats (or direct for SSR)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    return { total_meals: 0, total_guests: 0, services_run: 0 };
  }
  try {
    const res = await fetch(`${baseUrl}/api/stats`, { next: { revalidate: 600 } });
    if (!res.ok) return { total_meals: 0, total_guests: 0, services_run: 0 };
    return res.json();
  } catch (error) {
    console.error("Failed to fetch service stats", error);
    return { total_meals: 0, total_guests: 0, services_run: 0 };
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