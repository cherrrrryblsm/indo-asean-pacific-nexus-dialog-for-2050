"use client";

import Image from "next/image";
import { useT } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { crowdfundingContent } from "@/data/content";

const crowdfundingUrl = "https://for-good.net/project/1004207";

export function Crowdfunding() {
  const t = useT();

  return (
    <Section id="crowdfunding">
      <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionLabel>{crowdfundingContent.label}</SectionLabel>
          <SectionHeading>{crowdfundingContent.headline}</SectionHeading>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-blue-gray">
            {t(crowdfundingContent.introduction)}
          </p>

          <div className="mt-8">
            <Button href={crowdfundingUrl} external>
              {t(crowdfundingContent.cta)}
            </Button>
          </div>

          <a
            href={crowdfundingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border border-navy/10 bg-white p-3 shadow-[0_12px_30px_rgba(11,29,58,0.08)]"
            aria-label={t(crowdfundingContent.qrLabel)}
          >
            <Image
              src="/images/crowdfunding/qr.png"
              alt={t(crowdfundingContent.qrAlt)}
              width={180}
              height={180}
              className="h-[180px] w-[180px] object-contain"
            />
          </a>

          <p className="mt-8 font-display text-xl text-navy">
            {t(crowdfundingContent.thanks)}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="surface-card min-w-0 max-w-full overflow-hidden bg-white">
            <Image
              src="/images/crowdfunding/campaign.png"
              alt={t(crowdfundingContent.visualLabel)}
              width={1536}
              height={1024}
              className="block h-auto w-full max-w-full object-contain"
              style={{ width: "100%", height: "auto", maxWidth: "100%" }}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
