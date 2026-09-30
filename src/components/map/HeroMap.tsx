"use client";

/**
 * Decorative Indo-Pacific digital globe. Geography uses an orthographic projection
 * generated from Natural Earth 1:50m data; all motion respects reduced-motion CSS.
 */
export function HeroMap() {
  const lights = [
    { x: 630.9, y: 190.3, tone: "lime", featured: true },
    { x: 546.2, y: 176.7, tone: "cyan", featured: false },
    { x: 512.1, y: 261, tone: "cyan", featured: false },
    { x: 345, y: 348.7, tone: "lime", featured: false },
    { x: 390.5, y: 291.6, tone: "cyan", featured: false },
    { x: 508.1, y: 339.7, tone: "cyan", featured: false },
    { x: 366.7, y: 448.8, tone: "lime", featured: true },
    { x: 391.5, y: 511.1, tone: "green", featured: false },
    { x: 705.5, y: 736, tone: "lime", featured: false },
    { x: 812.4, y: 766.7, tone: "cyan", featured: false },
    { x: 477, y: 162.6, tone: "cyan", featured: false },
  ] as const;

  return (
    <div className="hero-map-container pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 1400 800" className="hero-map-svg h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <clipPath id="heroGlobeClip">
            <circle cx="500" cy="500" r="478" />
          </clipPath>
          <radialGradient id="heroGlobeOcean" cx="31%" cy="24%" r="84%">
            <stop offset="0%" stopColor="#1376b8" stopOpacity="0.82" />
            <stop offset="32%" stopColor="#0b5595" stopOpacity="0.76" />
            <stop offset="68%" stopColor="#083665" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#061a38" stopOpacity="0.96" />
          </radialGradient>
          <radialGradient id="heroGlobeAsiaGlow" cx="42%" cy="36%" r="48%">
            <stop offset="0%" stopColor="#54c7a0" stopOpacity="0.28" />
            <stop offset="52%" stopColor="#19a6bd" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0b1d3a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGlobeEdge" cx="42%" cy="36%" r="68%">
            <stop offset="58%" stopColor="#071a36" stopOpacity="0" />
            <stop offset="86%" stopColor="#06172f" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#041127" stopOpacity="0.85" />
          </radialGradient>
          <filter id="heroGlobeBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="24" />
          </filter>
          <filter id="heroLightGlow" x="-400%" y="-400%" width="900%" height="900%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <g className="hero-globe-shell">
          <circle cx="500" cy="500" r="496" className="hero-globe-atmosphere" filter="url(#heroGlobeBlur)" />
          <circle cx="500" cy="500" r="478" fill="url(#heroGlobeOcean)" />

          <g clipPath="url(#heroGlobeClip)">
            <g className="hero-globe-grid" fill="none">
              <ellipse cx="500" cy="500" rx="105" ry="478" />
              <ellipse cx="500" cy="500" rx="220" ry="478" />
              <ellipse cx="500" cy="500" rx="345" ry="478" />
              <ellipse cx="500" cy="500" rx="435" ry="478" />
              <ellipse cx="500" cy="218" rx="365" ry="40" />
              <ellipse cx="500" cy="352" rx="450" ry="48" />
              <ellipse cx="500" cy="500" rx="478" ry="54" />
              <ellipse cx="500" cy="648" rx="450" ry="48" />
              <ellipse cx="500" cy="782" rx="365" ry="40" />
            </g>

            <circle cx="500" cy="500" r="478" fill="url(#heroGlobeAsiaGlow)" />
            <image href="/maps/indo-pacific-globe.svg" width="1000" height="1000" className="hero-globe-geography" />

            <g fill="none" className="hero-globe-connections">
              <path className="hero-orbit hero-orbit-cyan" d="M215 245 Q415 72 631 190 Q724 255 705 736" />
              <path className="hero-orbit hero-orbit-green" d="M345 349 Q438 245 546 177 Q601 283 508 340 Q438 405 367 449" />
              <path className="hero-orbit hero-orbit-blue" d="M215 245 Q298 430 392 511 Q548 636 812 767" />
              <path className="hero-orbit hero-orbit-orange" d="M391 292 Q478 222 631 190 Q748 313 705 736" />
            </g>

            <g className="hero-globe-lights">
              {lights.map((light, index) => (
                <g key={`${light.x}-${light.y}`} className={`hero-globe-light hero-light-${light.tone}`}>
                  <circle cx={light.x} cy={light.y} r={light.featured ? 12 : 8} opacity="0.24" filter="url(#heroLightGlow)" />
                  <circle cx={light.x} cy={light.y} r={light.featured ? 2.8 : 1.8} className={index % 3 === 0 ? "hero-pulse" : ""} />
                  {light.featured && (
                    <path d={`M${light.x - 8} ${light.y}H${light.x + 8}M${light.x} ${light.y - 8}V${light.y + 8}`} />
                  )}
                </g>
              ))}
            </g>

            <circle cx="500" cy="500" r="478" fill="url(#heroGlobeEdge)" />
          </g>

          <circle cx="500" cy="500" r="478" className="hero-globe-rim" fill="none" />
          <g fill="none" className="hero-globe-outer-orbits">
            <path d="M2 420 Q500 -78 996 352" />
            <path d="M36 704 Q487 1010 980 612" />
          </g>
        </g>
      </svg>
    </div>
  );
}
