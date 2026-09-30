"use client";

import Image from "next/image";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { footerContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { t as translate } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  const { locale } = useLanguage();

  return (
    <footer className="site-footer border-t border-pale-blue/10 text-off-white">
      <div className="site-container section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/logos/nexus-logo-official.png"
                alt="NEXUS Dialogue 2050"
                width={72}
                height={72}
                className="h-16 w-16 rounded-full object-contain shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              />
              <div>
                <p className="font-display text-lg leading-tight">
                  Indo-ASEAN-Pacific
                </p>
                <p className="text-sm text-off-white/70">NEXUS Dialogue for 2050</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-off-white/60">
              {translate(siteConfig.dates.display, locale)} ·{" "}
              {translate(siteConfig.location.city, locale)}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:justify-end sm:gap-16">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-off-white/40">
                {t(footerContent.follow)}
              </p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-off-white/80 transition-colors hover:text-off-white"
              >
                Instagram
              </a>
            </div>
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-off-white/40">
                {t(footerContent.contact)}
              </p>
              <a
                href="mailto:nexusfor2050@gmail.com"
                className="text-sm text-off-white/50"
              >
                nexusfor2050@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-off-white/10 pt-8 text-xs text-off-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{t(footerContent.copyright)}</p>
          <p>{siteConfig.organizer.nameEn}</p>
        </div>
      </div>
    </footer>
  );
}
