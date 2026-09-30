"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useT } from "@/components/providers/LanguageProvider";
import { interfaceLabels, organizerContent, sectionLabels } from "@/data/content";
import { siteConfig } from "@/data/site";

export function Organizer() {
  const t = useT();

  return (
    <Section id="organizer" dark>
      <Reveal>
        <SectionLabel>{sectionLabels.organizer}</SectionLabel>
        <SectionHeading className="text-off-white">{organizerContent.headline}</SectionHeading>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-14 max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-off-white/40">
            {t(interfaceLabels.event)}
          </p>
          <p className="mt-3 font-display text-xl text-off-white md:text-2xl">
            {t(organizerContent.eventName)}
          </p>

          <div className="mt-10 border-t border-off-white/10 pt-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-off-white/40">
              {t(sectionLabels.organizer)}
            </p>
            <div className="mt-3">
              <div className="flex items-center gap-4">
                <p className="font-display text-2xl text-off-white md:text-3xl lg:whitespace-nowrap">
                  {siteConfig.organizer.nameEn}
                </p>
                <Image
                  src="/logos/mirai-seikei-logo.png"
                  alt="THE MIRAI INSTITUTE OF POLITICS AND ECONOMICS"
                  width={240}
                  height={240}
                  className="h-14 w-14 shrink-0 object-contain"
                />
              </div>
              <p className="mt-2 text-sm text-off-white/50">
                {siteConfig.organizer.nameJa}
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm leading-relaxed text-off-white/65">
            <a
              href="https://miraipe.wixsite.com/my-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
