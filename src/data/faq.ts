export type FaqItem = {
  id: string;
  question: { en: string; ja: string };
  answer: { en: string; ja: string };
  status?: "confirmed" | "planned" | "tba";
};

export const faqItems: FaqItem[] = [
  {
    id: "who-can-apply",
    question: {
      en: "Who can apply?",
      ja: "誰が応募できますか？",
    },
    answer: {
      en: "Applicants must be currently enrolled university or graduate students aged 18–29; high school students are not eligible. They must either hold citizenship in a country or region within the Indo-ASEAN-Pacific, or be enrolled in a university located within the region. Participants will generally represent their country or region of nationality. Applicants from outside the region who study within the Indo-ASEAN-Pacific will generally represent the country or region where their university is located, subject to case-by-case adjustments. The countries and regions shown on the site are examples and are not an exhaustive list. Please refer to the Application Guidelines for full requirements.",
      ja: "18歳以上30歳未満の、現在大学または大学院に在籍する学生が対象です。高校生は対象外です。応募者は、インドASEAN太平洋地域内の国・地域の国籍を有するか、同地域内に所在する大学に在籍している必要があります。参加者は原則として自身の国籍を有する国・地域を代表し、地域外出身で同地域内の大学に在籍する応募者は、原則として大学が所在する国・地域を代表します。個別の事情に応じて調整される場合があります。サイトに掲載している国・地域は例であり、すべてを網羅するものではありません。詳細は応募要項をご確認ください。",
    },
    status: "confirmed",
  },
  {
    id: "english-level",
    question: {
      en: "What level of English is required?",
      ja: "どの程度の英語力が必要ですか？",
    },
    answer: {
      en: "We recommend CEFR B2 or higher (approximately TOEIC L&R 800+, IELTS 6.0+, or TOEFL iBT 80+). Applicants who do not meet these benchmarks may still be accepted based on English ability demonstrated during the interview.",
      ja: "CEFR B2以上（TOEIC L&R 800点以上、IELTS 6.0以上、TOEFL iBT 80点以上を目安）を推奨します。数値基準を満たさない場合でも、面接での英語力により選考対象となる場合があります。",
    },
    status: "confirmed",
  },
  {
    id: "travel-expenses",
    question: {
      en: "Are travel expenses covered?",
      ja: "渡航費は支給されますか？",
    },
    answer: {
      en: "Round-trip airfare is covered for eligible overseas participants. Local transportation in Japan is self-funded. The participation fee is 15,000 JPY for overseas participants and 10,000 JPY for participants with accommodation available in Japan. Please refer to the Application Guidelines and the Terms and Conditions of Participation & Cancellation Policy for full coverage details.",
      ja: "対象となる海外参加者の往復航空運賃は支給されます。日本国内の交通費は自己負担です。参加費は、海外参加者が15,000 JPY、日本国内で宿泊先を確保できる参加者が10,000 JPYです。費用負担の詳細は、応募要項および参加規約・キャンセルポリシーをご確認ください。",
    },
    status: "confirmed",
  },
  {
    id: "meals",
    question: {
      en: "Are meals included?",
      ja: "食事は含まれますか？",
    },
    answer: {
      en: "Some meals are covered. Most meals are self-funded. Please refer to the Application Guidelines for full coverage details.",
      ja: "一部の食事は支給されます。大半の食事は自己負担です。費用負担の詳細は応募要項をご確認ください。",
    },
    status: "planned",
  },
  {
    id: "accommodation",
    question: {
      en: "Where will participants stay?",
      ja: "宿泊先はどこですか？",
    },
    answer: {
      en: "The program runs from February 6 through February 12, 2027, beginning with participant arrival and ending with departure. At present, all participants are expected to stay at the National Olympics Memorial Youth Center. Accommodation details are subject to change and will be updated if necessary.",
      ja: "プログラムは2027年2月6日の参加者到着から2月12日の出発まで実施されます。現時点では、すべての参加者が国立オリンピック記念青少年総合センターに宿泊する予定です。宿泊に関する詳細は変更となる場合があり、必要に応じて更新します。",
    },
    status: "tba",
  },
  {
    id: "selection-process",
    question: {
      en: "How does the selection process work?",
      ja: "選考プロセスはどのようになっていますか？",
    },
    answer: {
      en: "The process is: 1. Application, 2. Interview Scheduling, 3. Online Interview, and 4. Results Notification. The first round is open from October 1, 2026, at 10:00 JST through October 20 at 23:59 JST. The second round is expected to open November 1 at 10:00 JST and close November 20 at 23:59 JST. The third round is expected to open December 1 at 10:00 JST and close December 20 at 23:59 JST. Apply through the Google Form and review the Application Guidelines and the Terms and Conditions of Participation & Cancellation Policy before applying.",
      ja: "選考プロセスは、1. 応募、2. 面接日程調整、3. オンライン面接、4. 結果通知です。第1次募集は2026年10月1日10:00（JST）から10月20日23:59（JST）までです。第2次募集は11月1日10:00（JST）開始予定、11月20日23:59（JST）締切です。第3次募集は12月1日10:00（JST）開始予定、12月20日23:59（JST）締切です。Googleフォームから応募し、応募前に応募要項および参加規約・キャンセルポリシーをご確認ください。",
    },
    status: "confirmed",
  },
  {
    id: "results",
    question: {
      en: "When will results be announced?",
      ja: "選考結果はいつ通知されますか？",
    },
    answer: {
      en: "Results will be communicated after interview scheduling and the online interview. A specific notification date is not currently listed; applicants should follow the application communications for their round.",
      ja: "面接日程調整およびオンライン面接の後に結果を通知します。現時点では具体的な通知日は掲載していないため、各募集回の応募案内をご確認ください。",
    },
    status: "tba",
  },
];
