"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { eligibilityContent, sectionLabels } from "@/data/content";
import { siteConfig } from "@/data/site";
import { formatCurrency } from "@/lib/i18n";

export function Eligibility() {
  const t = useT();
  const { locale } = useLanguage();

  return (
    <Section id="eligibility">
      <Reveal>
        <SectionLabel>{sectionLabels.eligibility}</SectionLabel>
        <SectionHeading>{eligibilityContent.headline}</SectionHeading>
      </Reveal>

      <Reveal delay={80}>
        <dl className="mt-14 divide-y divide-navy/10">
          {eligibilityContent.criteria.map((item) => (
            <div
              key={item.label.en}
              className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:gap-8"
            >
              <dt className="text-[12px] font-medium uppercase tracking-[0.16em] text-blue-gray">
                {t(item.label)}
              </dt>
              <dd className="text-sm leading-relaxed text-navy">{t(item.value)}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-16 border-t border-navy/10 pt-12">
          <h3 className="font-display text-2xl text-navy">
            {t(eligibilityContent.feesHeadline)}
          </h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-[12px] uppercase tracking-[0.14em] text-blue-gray">
                {t(eligibilityContent.fees.international.label)}
              </p>
              <p className="mt-2 font-display text-2xl text-navy">
                {formatCurrency(siteConfig.fees.international.amount, locale)}
              </p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.14em] text-blue-gray">
                {t(eligibilityContent.fees.japanese.label)}
              </p>
              <p className="mt-2 font-display text-2xl text-navy">
                {formatCurrency(siteConfig.fees.japanese.amount, locale)}
              </p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.14em] text-blue-gray">
                {t(eligibilityContent.fees.travel.label)}
              </p>
              <p className="mt-2 text-sm text-navy">{t(eligibilityContent.fees.travel.value)}</p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.14em] text-blue-gray">
                {t(eligibilityContent.fees.meals.label)}
              </p>
              <p className="mt-2 text-sm text-navy">{t(eligibilityContent.fees.meals.value)}</p>
            </div>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-blue-gray">
            {t(eligibilityContent.additionalNote)}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
