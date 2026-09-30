"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { interfaceLabels, navItems } from "@/data/content";
import type { Locale } from "@/lib/i18n";

const SCROLL_THRESHOLD = 80;

export function Header() {
  const t = useT();
  const { locale, setLocale } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);
      if (currentY < SCROLL_THRESHOLD) {
        setVisible(true);
      } else if (currentY > lastScrollY.current && !menuOpen) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveId(current.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const toggleLocale = (next: Locale) => {
    setLocale(next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-navy/10 bg-off-white/82 shadow-[0_8px_30px_rgba(6,22,44,0.06)] backdrop-blur-xl"
            : "border-off-white/8 bg-navy/10 backdrop-blur-[3px]"
        }`}
      >
        <div className="site-container flex h-20 min-w-0 items-center justify-between lg:grid lg:grid-cols-[minmax(12rem,1fr)_auto_minmax(8rem,1fr)] lg:gap-6">
          <Link
            href="#hero"
            className="group flex min-w-0 items-center gap-3 justify-self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logos/nexus-logo-official.png"
              alt="NEXUS Dialogue 2050"
              width={48}
              height={48}
              className="h-11 w-11 rounded-full object-contain shadow-[0_4px_16px_rgba(0,0,0,0.14)] md:h-12 md:w-12"
              priority
            />
            <span className={`hidden transition-colors sm:block ${scrolled ? "text-navy" : "text-off-white"}`}>
              <span className="block text-[10px] font-medium tracking-[0.08em] opacity-70">Indo-ASEAN-Pacific</span>
              <span className="mt-0.5 block font-display text-sm tracking-wide">NEXUS Dialogue for 2050</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 justify-self-center lg:flex xl:gap-7" aria-label={t(interfaceLabels.mainNavigation)}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-2 text-[13px] font-medium tracking-wide transition-colors ${scrolled ? "text-navy/70 hover:text-navy" : "text-off-white/70 hover:text-off-white"}`}
                aria-current={activeId === item.id ? "location" : undefined}
              >
                {t(item.label)}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gradient-to-r from-accent-green to-accent-blue transition-transform duration-300 ${activeId === item.id ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1 justify-self-end sm:gap-3">
            <div
              className="flex items-center text-[12px] font-medium tracking-wide"
              role="group"
              aria-label={t(interfaceLabels.language)}
            >
              {(["en", "ja"] as const).map((code, index) => (
                <span key={code} className="flex items-center">
                  {index > 0 && (
                    <span className={`mx-1.5 transition-colors ${scrolled ? "text-navy/25" : "text-off-white/25"}`} aria-hidden="true">
                      /
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => toggleLocale(code)}
                    className={`min-h-9 min-w-8 px-1 transition-colors sm:min-w-9 ${
                      locale === code
                        ? scrolled ? "text-navy" : "text-off-white"
                        : scrolled ? "text-navy/40 hover:text-navy/70" : "text-off-white/45 hover:text-off-white/75"
                    }`}
                    aria-pressed={locale === code}
                    aria-label={t(code === "en" ? interfaceLabels.english : interfaceLabels.japanese)}
                  >
                    {code === "en" ? "EN" : "JP"}
                  </button>
                </span>
              ))}
            </div>

            <button
              type="button"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={t(menuOpen ? interfaceLabels.closeMenu : interfaceLabels.openMenu)}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className={`block h-px w-5 transition-all ${scrolled || menuOpen ? "bg-navy" : "bg-off-white"} ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 transition-all ${scrolled || menuOpen ? "bg-navy" : "bg-off-white"} ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-5 transition-all ${scrolled || menuOpen ? "bg-navy" : "bg-off-white"} ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-20 z-40 bg-off-white/95 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        {...(!menuOpen ? { inert: true } : {})}
      >
        <nav className="site-container flex flex-col gap-1 py-8" aria-label={t(interfaceLabels.mobileNavigation)}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`border-b py-4 pl-3 text-lg font-display transition-colors ${activeId === item.id ? "border-accent-green/30 text-accent-green" : "border-navy/8 text-navy"}`}
              aria-current={activeId === item.id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
