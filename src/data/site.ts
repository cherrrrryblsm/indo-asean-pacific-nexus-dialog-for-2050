/**
 * Central site configuration — edit values here before launch.
 * Non-engineers: update URLs, dates, and fees in this file only.
 */

export const siteConfig = {
  name: "Indo-ASEAN-Pacific NEXUS Dialogue for 2050",
  shortName: "NEXUS Dialogue 2050",
  tagline: {
    en: "New Era × Unity Summit",
    ja: "新時代 × 統合サミット",
  },

  /** Event dates */
  dates: {
    start: "2027-02-06",
    end: "2027-02-12",
    display: {
      en: "February 6–12, 2027",
      ja: "2027年2月6日〜12日",
    },
    heroDisplay: {
      en: "FEB 06 — 12, 2027",
      ja: "2027.02.06 — 02.12",
    },
  },

  location: {
    city: { en: "Tokyo, Japan", ja: "東京, 日本" },
  },

  venue: {
    name: {
      en: "National Olympics Memorial Youth Center",
      ja: "国立オリンピック記念青少年総合センター",
    },
    status: "planned" as const,
  },

  organizer: {
    nameEn: "THE MIRAI INSTITUTE OF POLITICS AND ECONOMICS",
    nameJa: "一般社団法人未来政経研究所",
  },

  /** Application Google Form */
  applicationUrl: "https://forms.gle/P7cR9JL1qbFiHw5a7" as string | null,
  applicationDeadline: {
    date: "2026-12-30",
    status: "planned" as const,
    display: { en: "December 30, 2026", ja: "2026年12月30日" },
  },

  /** Replace null with the contact Google Form URL when available */
  contactUrl: null as string | null,

  social: {
    instagram: "https://www.instagram.com/indo_asean_pacific_nexus/",
  },

  fees: {
    international: { amount: 15000, currency: "JPY" },
    japanese: { amount: 10000, currency: "JPY" },
  },

  participants: {
    total: 40,
    japanese: 10,
    international: 30,
    perCountry: 3,
  },

  /** Participating countries — add or remove as confirmed */
  countries: [
    { id: "japan", label: { en: "Japan", ja: "日本" } },
    { id: "taiwan", label: { en: "Taiwan", ja: "台湾" } },
    { id: "philippines", label: { en: "Philippines", ja: "フィリピン" } },
    { id: "vietnam", label: { en: "Vietnam", ja: "ベトナム" } },
    { id: "malaysia", label: { en: "Malaysia", ja: "マレーシア" } },
    { id: "australia", label: { en: "Australia", ja: "オーストラリア" } },
    { id: "singapore", label: { en: "Singapore", ja: "シンガポール" } },
  ] as const,

  /** Confirmed partners — add logo path when assets are available */
  partners: [
    {
      id: "waseda-democracy",
      name: {
        en: "Waseda Institute for Democracy Research",
        ja: "早稲田デモクラシー創造研究所",
      },
      confirmed: true,
      logo: "/waseda.demo.png",
      url: "https://waseda-idi.jp/",
    },
  ],

  /** Speakers — populate when confirmed */
  speakers: [] as Array<{
    id: string;
    name: { en: string; ja: string };
    title: { en: string; ja: string };
    organization: { en: string; ja: string };
    photo?: string;
  }>,

  seo: {
    title: "Indo-ASEAN-Pacific NEXUS Dialogue for 2050",
    description:
      "An international student policy conference in Tokyo bringing together future Indo-Pacific leaders to dialogue on regional politics, cooperation, and security toward 2050.",
    keywords: [
    "Indo-Pacific",
    "ASEAN",
    "international politics",
    "regional security",
    "student conference",
    "Tokyo",
    "policy dialogue",
    "FOIP",
  ] as string[],
    ogImage: "/images/og-image-final.svg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
