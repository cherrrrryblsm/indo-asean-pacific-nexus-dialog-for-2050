export const programThemes = [
  {
    id: "politics",
    number: "01",
    title: {
      en: "International Politics",
      ja: "国際政治",
    },
    description: {
      en: "Political dynamics, regional order, diplomacy, and the future political architecture of the Indo-Pacific.",
      ja: "政治力学、地域秩序、外交、およびインド太平洋の将来の政治アーキテクチャについて考察します。",
    },
    focus: {
      en: [
        "Regional order and great-power dynamics",
        "Diplomatic frameworks across the Indo-Pacific",
        "Governance and institutional design toward 2050",
      ],
      ja: [
        "地域秩序と大国間力学",
        "インド太平洋を横断する外交枠組み",
        "2050年に向けたガバナンスと制度設計",
      ],
    },
  },
  {
    id: "cooperation",
    number: "02",
    title: {
      en: "International Cooperation",
      ja: "国際協力",
    },
    description: {
      en: "Cross-border cooperation and how governments, international organizations, institutions, and young leaders can cooperate on regional challenges.",
      ja: "国境を越えた協力、および政府・国際機関・各機関・若手リーダーが地域課題に協力する方法を探ります。",
    },
    focus: {
      en: [
        "Multilateral and minilateral cooperation",
        "Institutional partnerships across borders",
        "Youth-led initiatives for shared challenges",
      ],
      ja: [
        "多国間・小多国間協力",
        "国境を越えた機関連携",
        "共通課題に向けた若手主導の取り組み",
      ],
    },
  },
  {
    id: "security",
    number: "03",
    title: {
      en: "Regional Security",
      ja: "地域安全保障",
    },
    description: {
      en: "Security challenges affecting the region and frameworks for maintaining peace and stability.",
      ja: "地域に影響を与える安全保障上の課題と、平和と安定を維持するための枠組みについて議論します。",
    },
    focus: {
      en: [
        "Maritime and territorial stability",
        "Confidence-building and crisis prevention",
        "Long-term frameworks for regional peace",
      ],
      ja: [
        "海洋・領域の安定",
        "信頼醸成と危機予防",
        "地域平和のための長期的枠組み",
      ],
    },
  },
] as const;

export const programFormat = {
  en: [
    "Expert lectures and input",
    "Student-led discussion and cross-national dialogue",
    "Policy-oriented working sessions",
    "Presentations and policy recommendations",
  ],
  ja: [
    "専門家による講義・提言",
    "学生主導の討論・国境を越えた対話",
    "政策志向のワーキングセッション",
    "プレゼンテーションと政策提言",
  ],
} as const;

export const scheduleItems = [
  {
    id: "day1",
    day: { en: "Day 1", ja: "1日目" },
    date: { en: "Feb 6", ja: "2月6日" },
    status: "planned" as const,
    items: {
      en: ["Participant Arrival", "Welcome Party"],
      ja: ["参加者到着", "ウェルカムパーティー"],
    },
  },
  {
    id: "day2-5",
    day: { en: "Days 2–5", ja: "2–5日目" },
    date: { en: "Feb 7–10", ja: "2月7–10日" },
    status: "planned" as const,
    items: {
      en: [
        "Opening Session",
        "Group Discussions with Members of Japans National Diet",
        "Discussions on International Politics, Regional Security, and International Cooperation",
        "Lectures by Experts",
        "Sightseeing",
        "Open Event",
      ],
      ja: [
        "オープニングセッション",
        "国会議員とのグループディスカッション",
        "国際政治・地域安全保障・国際協力に関する議論",
        "専門家による講義",
        "観光",
        "公開イベント",
      ],
    },
  },
  {
    id: "day6",
    day: { en: "Day 6", ja: "6日目" },
    date: { en: "Feb 11", ja: "2月11日" },
    status: "planned" as const,
    items: {
      en: ["Final Discussions", "Presentations"],
      ja: ["最終ディスカッション", "プレゼンテーション"],
    },
  },
  {
    id: "day7",
    day: { en: "Day 7", ja: "7日目" },
    date: { en: "Feb 12", ja: "2月12日" },
    status: "planned" as const,
    items: {
      en: ["Handover Ceremony", "Departure"],
      ja: ["引継ぎ式", "出発"],
    },
  },
] as const;
