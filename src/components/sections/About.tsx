"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useT } from "@/components/providers/LanguageProvider";
import { aboutContent, sectionLabels } from "@/data/content";

export function About() {
  const t = useT();

  return (
    <Section id="about">
      <Reveal>
        <SectionLabel>{sectionLabels.about}</SectionLabel>
        <SectionHeading className="max-w-3xl">{aboutContent.headline}</SectionHeading>
      </Reveal>

      <Reveal delay={100}>
        <blockquote className="mt-12 max-w-3xl border-l-2 border-accent-green/60 pl-8">
          <p className="font-display text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.45] tracking-[-0.01em] text-navy/90">
            {t(aboutContent.vision)}
          </p>
        </blockquote>
      </Reveal>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        {aboutContent.pillars.filter((pillar) => pillar.text.en || pillar.text.ja).map((pillar, index) => (
          <Reveal key={`${pillar.title.en}-${index}`} delay={index * 80}>
            <div className="border-t border-navy/10 pt-6">
              <h3 className="font-display text-xl text-navy">{t(pillar.title)}</h3>
              <p className="mt-4 text-sm leading-relaxed text-blue-gray">{t(pillar.text)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
