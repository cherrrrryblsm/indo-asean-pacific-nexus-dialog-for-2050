"use client";

import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { participantsContent } from "@/data/content";
import { t } from "@/lib/i18n";

/** Capital-city coordinates projected with the same bounds as the map asset. */
const exampleCountries = [
  { id: "japan", label: { en: "Japan", ja: "日本" }, x: 878, y: 140 },
  { id: "china", label: { en: "China", ja: "中国" }, x: 639, y: 110 },
  { id: "taiwan", label: { en: "Taiwan", ja: "台湾" }, x: 691, y: 217 },
  { id: "philippines", label: { en: "Philippines", ja: "フィリピン" }, x: 685, y: 292 },
  { id: "vietnam", label: { en: "Vietnam", ja: "ベトナム" }, x: 527, y: 246 },
  { id: "thailand", label: { en: "Thailand", ja: "タイ" }, x: 472, y: 299 },
  { id: "malaysia", label: { en: "Malaysia", ja: "マレーシア" }, x: 484, y: 376 },
  { id: "singapore", label: { en: "Singapore", ja: "シンガポール" }, x: 506, y: 388 },
  { id: "indonesia", label: { en: "Indonesia", ja: "インドネシア" }, x: 537, y: 443 },
  { id: "australia", label: { en: "Australia", ja: "オーストラリア" }, x: 976, y: 654 },
] as const;

export function ParticipantsMap() {
  const { locale } = useLanguage();
  const translate = useT();

  return (
    <div className="surface-card overflow-hidden bg-[#f5f8f8]">
      <div className="relative aspect-[16/9] min-h-[260px] overflow-hidden border-b border-navy/8 bg-[linear-gradient(145deg,#fafdfe,#eaf2f3)]">
        <div className="absolute left-5 top-5 z-10 border-l-2 border-accent-green pl-3 sm:left-6 sm:top-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/65 sm:text-[11px]">
            {translate(participantsContent.exampleLabel)}
          </p>
        </div>

        <svg
          viewBox="300 70 1120 630"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="participantOceanGlow" cx="53%" cy="48%" r="56%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#b9d5db" stopOpacity="0.18" />
            </radialGradient>
            <filter id="participantPinShadow" x="-100%" y="-80%" width="300%" height="300%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0b1d3a" floodOpacity="0.2" />
            </filter>
            <symbol id="participantPin" viewBox="0 0 24 32">
              <path d="M12 1.5A9.5 9.5 0 0 0 2.5 11c0 7.2 9.5 19.5 9.5 19.5S21.5 18.2 21.5 11A9.5 9.5 0 0 0 12 1.5Z" />
              <circle cx="12" cy="11" r="3.6" className="fill-off-white" />
            </symbol>
          </defs>

          <rect x="300" y="70" width="1120" height="630" fill="url(#participantOceanGlow)" />
          <image href="/maps/indo-pacific-outline-light.svg" width="1400" height="760" />

          {exampleCountries.map((country) => (
            <use
              key={country.id}
              href="#participantPin"
              x={country.x - 22}
              y={country.y - 58}
              width="44"
              height="58"
              className="participant-pin fill-accent-green"
              filter="url(#participantPinShadow)"
            />
          ))}
        </svg>
      </div>

      <div className="bg-white/72 px-5 py-4 backdrop-blur-sm sm:px-6 sm:py-5">
        <ul className="flex flex-wrap gap-x-0 gap-y-1" aria-label={translate(participantsContent.exampleLabel)}>
          {exampleCountries.map((country, index) => (
            <li key={country.id} className="text-[11px] font-medium tracking-wide text-navy/72 sm:text-xs">
              {index > 0 && <span className="mx-1.5 text-accent-green/45">/</span>}
              {t(country.label, locale)}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[11px] italic tracking-wide text-blue-gray sm:text-xs">
          + {translate(participantsContent.andMore)}
        </p>
      </div>
    </div>
  );
}
