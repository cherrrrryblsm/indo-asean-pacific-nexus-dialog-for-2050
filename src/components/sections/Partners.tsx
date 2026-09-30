"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { partnersContent, sectionLabels } from "@/data/content";
import { siteConfig } from "@/data/site";
import { t as translate } from "@/lib/i18n";

export function Partners() {
  const t = useT();
  const { locale } = useLanguage();

  return (
    <Section id="partners">
      <Reveal>
        <SectionLabel>{sectionLabels.partners}</SectionLabel>
        <SectionHeading>{partnersContent.headline}</SectionHeading>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-14">
          <p className="mb-8 text-[12px] uppercase tracking-[0.16em] text-blue-gray">
            {t(partnersContent.supporting)}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.partners.map((partner) => (
              <a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card flex min-h-[120px] items-center justify-center px-8 py-6 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={partner.logo}
                    alt={translate(partner.name, locale)}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
            <div className="flex min-h-[120px] items-center border border-dashed border-navy/15 bg-white/20 px-8 py-6">
              <p className="text-sm text-blue-gray">{t(partnersContent.comingSoon)}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-16">
          <p className="mb-8 text-[12px] uppercase tracking-[0.16em] text-blue-gray">
            {t(partnersContent.sponsors)}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="flex min-h-[100px] items-center justify-center border border-dashed border-navy/15 bg-white/20"
              >
                <p className="text-sm text-blue-gray">{t(partnersContent.comingSoon)}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
