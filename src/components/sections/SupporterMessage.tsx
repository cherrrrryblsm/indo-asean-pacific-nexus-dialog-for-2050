"use client";

import Image from "next/image";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { sectionLabels, supporterMessageContent } from "@/data/content";

export function SupporterMessage() {
  const t = useT();
  const { locale } = useLanguage();

  return (
    <Section id="supporter-message">
      <Reveal>
        <SectionLabel>{sectionLabels.supporterMessage}</SectionLabel>
        <SectionHeading>{supporterMessageContent.headline}</SectionHeading>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:items-start lg:gap-16">
        <Reveal delay={80}>
          <article className="surface-card overflow-hidden">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/yabunaka.jpg"
                alt={t(supporterMessageContent.name)}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="px-6 py-6 sm:px-8">
              <h3 className="font-display text-2xl leading-tight text-navy sm:text-3xl">
                {t(supporterMessageContent.name)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-gray">
                {t(supporterMessageContent.title)}
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <blockquote className="border-l-2 border-accent-green/60 pl-6 sm:pl-8">
            <div className="space-y-5 text-[15px] leading-[1.9] text-blue-gray">
              {supporterMessageContent.message[locale].map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </blockquote>
        </Reveal>
      </div>
    </Section>
  );
}
