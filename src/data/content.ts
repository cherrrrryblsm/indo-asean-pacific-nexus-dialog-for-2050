import type { LocalizedString } from "@/lib/i18n";

export const navItems = [
  { id: "about", label: { en: "About", ja: "概要" } },
  { id: "program", label: { en: "Program", ja: "プログラム" } },
  { id: "apply", label: { en: "Apply", ja: "応募" } },
  { id: "partners", label: { en: "Partners", ja: "協力・後援" } },
  { id: "organizer", label: { en: "Organizer", ja: "主催" } },
] as const;

export const interfaceLabels = {
  mainNavigation: { en: "Main navigation", ja: "メインナビゲーション" },
  mobileNavigation: { en: "Mobile navigation", ja: "モバイルナビゲーション" },
  language: { en: "Language", ja: "言語" },
  english: { en: "English", ja: "英語" },
  japanese: { en: "Japanese", ja: "日本語" },
  openMenu: { en: "Open menu", ja: "メニューを開く" },
  closeMenu: { en: "Close menu", ja: "メニューを閉じる" },
  date: { en: "Date", ja: "開催日" },
  location: { en: "Location", ja: "開催地" },
  event: { en: "Event", ja: "イベント" },
} satisfies Record<string, LocalizedString>;

export const sectionLabels = {
  about: { en: "About", ja: "About" },
  vision: { en: "Vision", ja: "ビジョン" },
  whyNexus: { en: "Why NEXUS", ja: "Why NEXUS" },
  overview: { en: "Overview", ja: "概要" },
  program: { en: "Program", ja: "プログラム" },
  themes: { en: "Themes", ja: "テーマ" },
  schedule: { en: "Schedule", ja: "スケジュール" },
  participants: { en: "Participants", ja: "参加者" },
  venue: { en: "Venue", ja: "会場" },
  eligibility: { en: "Eligibility", ja: "参加資格" },
  application: { en: "Application", ja: "応募" },
  speakers: { en: "Speakers", ja: "登壇者" },
  partners: { en: "Partners & Sponsors", ja: "協力・後援" },
  organizer: { en: "Organizer", ja: "主催" },
  faq: { en: "FAQ", ja: "FAQ" },
  contact: { en: "Contact", ja: "お問い合わせ" },
} satisfies Record<string, LocalizedString>;

export const heroContent = {
  line1: { en: "Indo-ASEAN-Pacific", ja: "Indo-ASEAN-Pacific" },
  line2: { en: "NEXUS Dialogue for 2050", ja: "NEXUS Dialogue for 2050" },
};

export const aboutContent = {
  headline: {
    en: "About",
    ja: "About",
  },
  vision: {
    en: "The Indo-ASEAN-Pacific NEXUS Dialogue for 2050 is a youth-led initiative that brings together students from across the region to envision its future together.",
    ja: "Indo-ASEAN-Pacific NEXUS Dialogue for 2050は、地域の未来をともに考えるため、各国地域の学生をつなぐ学生主導の取り組みです。",
  },
  pillars: [
    {
      title: { en: "", ja: "" },
      text: {
        en: "Our goal is to contribute to stability and prosperity in the Indo-ASEAN-Pacific region by 2050 by fostering next-generation leadership, mutual understanding, and lasting cross-border relationships.",
        ja: "私たちは、次世代のリーダーシップ、相互理解、そして国境を越えた持続的なつながりを育むことで、2050年のインドASEAN太平洋地域の安定と繁栄に貢献することを目指しています。",
      },
    },
    {
      title: { en: "", ja: "" },
      text: {
        en: "Through dialogue on international politics, regional security, and international cooperation, we aim to build a network of young people who can continue engaging with one another across national boundaries and help shape the future of the region.",
        ja: "国際政治、地域安全保障、国際協力をテーマとした対話を通じて、国境を越えて継続的に関わり合い、地域の未来をともに形づくる若者のネットワークを築くことを目指します。",
      },
    },
    {
      title: { en: "", ja: "" },
      text: { en: "", ja: "" },
    },
  ],
};

export const whyNexusContent = {
  headline: {
    en: "Why NEXUS?",
    ja: "Why NEXUS?",
  },
  focalPoint: {
    en: "STABILITY & PROSPERITY",
    ja: "安定と繁栄",
  },
  intro: {
    en: "By 2050, todays students will be among those shaping the future of the Indo-ASEAN-Pacific.",
    ja: "2050年、いまの学生たちはインドASEAN太平洋地域の未来を担う世代になります。",
  },
  question: {
    en: "What can we do now, as students, to contribute to the stability and prosperity of this region?",
    ja: "この地域の将来の安定と繁栄のために、私たち学生が今できることは何か。",
  },
  paragraphs: [
    {
      en: "The region faces complex political, economic, and security challenges. We believe lasting stability cannot be built through power alone, but through dialogue, mutual understanding, empathy, and trust.",
      ja: "この地域は、政治経済安全保障をめぐる複雑な課題に直面しています。私たちは、持続的な安定は力だけで築かれるものではなく、対話、相互理解、共感、そして信頼によって築かれるものだと考えています。",
    },
    {
      en: "NEXUS brings together young people from across the region to discuss difficult issues face-to-face, understand different perspectives, and build relationships that can endure beyond a single conference.",
      ja: "NEXUSでは、地域の若者が直接向き合い、難しい課題について議論し、異なる立場や価値観を理解しながら、一度の会議で終わらない関係を築いていきます。",
    },
    {
      en: "Our goal is to create a cross-border network of future leaders who can continue dialogue even when interests differ and tensions rise.",
      ja: "私たちが目指すのは、利害が異なり、緊張が高まる時であっても、対話を続けることのできる将来のリーダーたちの国境を越えたネットワークをつくることです。",
    },
  ],
};

export const overviewContent = {
  headline: { en: "Event Overview", ja: "イベント概要" },
  fields: {
    event: { en: "Event", ja: "イベント名" },
    dates: { en: "Dates", ja: "開催期間" },
    location: { en: "Location", ja: "開催地" },
    venue: { en: "Planned Venue", ja: "会場（予定）" },
    organizer: { en: "Organizer", ja: "主催" },
    participants: { en: "Expected Participants", ja: "想定参加者" },
  },
  participantNote: {
    en: "Approximately 40 participants total — around 10 Japanese and 30 international university/graduate students, with roughly 3 participants from each represented country where applicable.",
    ja: "総数約40名 — 日本人大学生・大学院生約10名、国際大学生・大学院生約30名。代表国ごとに概ね3名程度を想定。",
  },
  plannedLabel: { en: "Planned", ja: "予定" },
};

export const eligibilityContent = {
  headline: { en: "Eligibility", ja: "参加資格" },
  criteria: [
    {
      label: { en: "Age", ja: "年齢" },
      value: {
        en: "18 or older and under 30",
        ja: "18歳以上30歳未満",
      },
    },
    {
      label: { en: "Status", ja: "在籍" },
      value: {
        en: "Currently enrolled university or graduate students. High school students are not eligible.",
        ja: "現在籍の大学生・大学院生。高校生は対象外。",
      },
    },
    {
      label: { en: "Region / Nationality", ja: "地域・国籍" },
      value: {
        en: "Applicants must either hold citizenship in a country or region within the Indo-ASEAN-Pacific, or be enrolled in a university located within the Indo-ASEAN-Pacific region.",
        ja: "応募者は、インドASEAN太平洋地域内の国・地域の国籍を有するか、インドASEAN太平洋地域内に所在する大学に在籍している必要があります。",
      },
    },
    {
      label: { en: "Representation", ja: "代表する国・地域" },
      value: {
        en: "Participants will generally represent their country or region of nationality. Applicants from outside the region who study within the Indo-ASEAN-Pacific will generally represent the country or region where their university is located. Representation rules may be adjusted on a case-by-case basis.",
        ja: "参加者は原則として、自身の国籍を有する国・地域を代表します。地域外出身でインドASEAN太平洋地域内の大学に在籍する応募者は、原則として大学が所在する国・地域を代表します。代表に関する規則は、個別の事情に応じて調整される場合があります。",
      },
    },
    {
      label: { en: "English Ability", ja: "英語力" },
      value: {
        en: "Recommended: CEFR B2 or higher (TOEIC L&R ~800+, IELTS ~6.0+, TOEFL iBT ~80+). Applicants below these benchmarks may still be accepted based on interview performance.",
        ja: "推奨：CEFR B2以上（TOEIC L&R 800点以上、IELTS 6.0以上、TOEFL iBT 80点以上を目安）。基準未達の場合でも、面接での英語力により選考対象となる場合があります。",
      },
    },
  ],
  feesHeadline: { en: "Participation Fee", ja: "参加費" },
  fees: {
    international: {
      label: { en: "Overseas Participants", ja: "海外参加者" },
    },
    japanese: {
      label: {
        en: "Participants with Accommodation Available in Japan",
        ja: "日本国内で宿泊先を確保できる参加者",
      },
    },
    travel: {
      label: { en: "Travel expenses", ja: "渡航費" },
      value: {
        en: "Round-trip airfare is covered for eligible overseas participants. Local transportation in Japan is self-funded.",
        ja: "対象となる海外参加者の往復航空運賃は支給されます。日本国内の交通費は自己負担です。",
      },
    },
    meals: {
      label: { en: "Meals", ja: "食事" },
      value: {
        en: "Some meals are covered. Most meals are self-funded.",
        ja: "一部の食事は支給されます。大半の食事は自己負担です。",
      },
    },
  },
  additionalNote: {
    en: "For full eligibility requirements, representation rules, fees, and coverage details, please refer to the Application Guidelines in the Application section.",
    ja: "参加資格、代表に関する規則、参加費、費用負担の詳細については、ApplicationセクションのApplication Guidelinesをご確認ください。",
  },
};

export const applicationContent = {
  headline: { en: "Application", ja: "応募" },
  method: { en: "Application Method", ja: "応募方法" },
  methodValue: { en: "Google Form", ja: "Googleフォーム" },
  documents: { en: "Application Documents", ja: "応募書類" },
  documentLinks: [
    {
      label: { en: "Application Guidelines", ja: "応募要項" },
      href: "https://drive.google.com/file/d/1JK0TOURJ1O0sME3_Fjf7ryQ0FPHyBR_f/view?usp=sharing",
    },
    {
      label: {
        en: "Terms and Conditions of Participation & Cancellation Policy",
        ja: "参加規約・キャンセルポリシー",
      },
      href: "https://drive.google.com/file/d/1nsjoapnis67rRd-sh_9JI8NAI3j8IqTd/view",
    },
  ],
  schedule: { en: "Application Schedule", ja: "応募スケジュール" },
  rounds: [
    {
      name: { en: "First Round", ja: "第1次募集" },
      open: { en: "Open: October 1, 2026, 10:00 JST", ja: "開始：2026年10月1日 10:00（JST）" },
      deadline: { en: "Deadline: October 20, 2026, 23:59 JST", ja: "締切：2026年10月20日 23:59（JST）" },
    },
    {
      name: { en: "Second Round", ja: "第2次募集" },
      open: {
        en: "Expected to Open: November 1, 2026, 10:00 JST",
        ja: "開始予定：2026年11月1日 10:00（JST）",
      },
      deadline: { en: "Deadline: November 20, 2026, 23:59 JST", ja: "締切：2026年11月20日 23:59（JST）" },
    },
    {
      name: { en: "Third Round", ja: "第3次募集" },
      open: {
        en: "Expected to Open: December 1, 2026, 10:00 JST",
        ja: "開始予定：2026年12月1日 10:00（JST）",
      },
      deadline: { en: "Deadline: December 20, 2026, 23:59 JST", ja: "締切：2026年12月20日 23:59（JST）" },
    },
  ],
  process: { en: "Selection Process", ja: "選考プロセス" },
  steps: [
    { en: "Application", ja: "応募" },
    { en: "Interview Scheduling", ja: "面接日程調整" },
    { en: "Online Interview", ja: "オンライン面接" },
    { en: "Results Notification", ja: "結果通知" },
  ],
  ctaOpen: { en: "Apply Now", ja: "応募する" },
};

export const crowdfundingContent = {
  label: { en: "Support the Project", ja: "プロジェクトを応援" },
  headline: { en: "Crowdfunding", ja: "クラウドファンディング" },
  introduction: {
    en: "Your support will help us bring together students from across the Indo-ASEAN-Pacific and create meaningful opportunities for dialogue, understanding, and lasting regional connections.",
    ja: "皆さまからのご支援は、インドASEAN太平洋地域の学生をつなぎ、対話と相互理解、そして地域を越えた持続的な関係を育む機会の実現につながります。",
  },
  cta: {
    en: "Support Our Crowdfunding Campaign",
    ja: "クラウドファンディングを応援する",
  },
  qrLabel: {
    en: "Open the crowdfunding campaign",
    ja: "クラウドファンディングページを開く",
  },
  qrAlt: {
    en: "QR code for the NEXUS crowdfunding campaign",
    ja: "NEXUSクラウドファンディングページのQRコード",
  },
  thanks: {
    en: "Thank you for your kind support.",
    ja: "温かいご支援をありがとうございます。",
  },
  visualLabel: {
    en: "NEXUS crowdfunding campaign visual",
    ja: "NEXUSクラウドファンディングのキャンペーンビジュアル",
  },
  openVisual: {
    en: "Open the crowdfunding campaign visual",
    ja: "クラウドファンディングのキャンペーンビジュアルを開く",
  },
};

export const speakersContent = {
  headline: { en: "Speakers", ja: "登壇者" },
  tba: {
    en: "Speakers to be announced",
    ja: "登壇者は後日発表",
  },
  note: {
    en: "Expert speakers and facilitators will be announced as the program is finalized.",
    ja: "専門家・ファシリテーターは、プログラム確定に伴い順次発表します。",
  },
};

export const partnersContent = {
  headline: { en: "Partners & Sponsors", ja: "協力・後援" },
  supporting: { en: "Supporting Organization", ja: "協力団体" },
  sponsors: { en: "Sponsors", ja: "後援・スポンサー" },
  comingSoon: { en: "Coming Soon", ja: "準備中" },
};

export const organizerContent = {
  headline: { en: "Organizer", ja: "主催" },
  eventName: {
    en: "Indo-ASEAN-Pacific NEXUS Dialogue for 2050",
    ja: "Indo-ASEAN-Pacific NEXUS Dialogue for 2050",
  },
  description: {
    en: "Organized by THE MIRAI INSTITUTE OF POLITICS AND ECONOMICS, a general incorporated association dedicated to advancing policy dialogue and research on politics and economics for Japan and the Indo-Pacific region.",
    ja: "一般社団法人未来政経研究所が主催する、日本およびインド太平洋地域の政治・経済に関する政策対話と研究を推進する国際学生カンファレンスです。",
  },
};

export const venueContent = {
  headline: { en: "Venue", ja: "会場" },
  plannedNote: {
    en: "The venue below is planned and subject to confirmation.",
    ja: "以下の会場は予定であり、変更となる場合があります。",
  },
};

export const faqContent = {
  headline: { en: "FAQ", ja: "よくある質問" },
};

export const footerContent = {
  copyright: {
    en: "© 2026 THE MIRAI INSTITUTE OF POLITICS AND ECONOMICS. All rights reserved.",
    ja: "© 2026 一般社団法人未来政経研究所. All rights reserved.",
  },
  follow: { en: "Follow", ja: "Follow" },
  contact: { en: "Contact", ja: "お問い合わせ" },
  contactSoon: { en: "Contact Form Coming Soon", ja: "お問い合わせフォーム準備中" },
};

export const statusLabels = {
  planned: { en: "Planned", ja: "予定" },
  tba: { en: "To Be Announced", ja: "後日発表" },
  comingSoon: { en: "Coming Soon", ja: "準備中" },
};

export const participantsContent = {
  headline: { en: "Participating Countries and Regions", ja: "参加国・地域" },
  exampleLabel: {
    en: "Example Participating Countries and Regions",
    ja: "参加国・地域の例",
  },
  subheadline: {
    en: "Connecting future leaders from across the Indo-ASEAN-Pacific",
    ja: "インドASEAN太平洋各地の次世代リーダーを結ぶ",
  },
  andMore: {
    en: "and other Indo-ASEAN-Pacific countries and regions",
    ja: "その他のインドASEAN太平洋の国・地域",
  },
};

export const programContent = {
  headline: { en: "Program Themes", ja: "プログラムテーマ" },
  formatHeadline: { en: "Program Format", ja: "プログラム形式" },
  formatNote: {
    en: "Program details and speakers are being finalized. Sessions may include:",
    ja: "プログラム詳細および登壇者は現在調整中です。セッションには以下が含まれる予定です：",
  },
};

export const scheduleContent = {
  headline: { en: "Schedule", ja: "スケジュール" },
  note: {
    en: "Detailed daily schedule will be announced as the program is finalized.",
    ja: "詳細な日程はプログラム確定に伴い発表します。",
  },
};
