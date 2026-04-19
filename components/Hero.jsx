// Hero.jsx — corporate-minimal hero, analytics-dashboard Sacred Ledger

// ── Tiny sparkline generator (deterministic per seed so it doesn't jitter) ──
function useSparkline(seed, n = 24) {
  return React.useMemo(() => {
    const out = [];
    let v = 50 + (seed % 20);
    for (let i = 0; i < n; i++) {
      v += Math.sin(seed * 0.13 + i * 0.7) * 6 + (Math.cos(seed * 0.21 + i * 0.4) * 4);
      out.push(v);
    }
    const min = Math.min(...out), max = Math.max(...out);
    return out.map((y) => (y - min) / (max - min || 1));
  }, [seed, n]);
}

function Sparkline({ values, color = 'currentColor', height = 28, up = true }) {
  const w = 120;
  const pts = values.map((v, i) => `${(i / (values.length - 1)) * w},${height - v * (height - 2) - 1}`).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${height}`} width={w} height={height} className="overflow-visible" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`sg-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${pts} ${w},${height}`}
        fill={`url(#sg-${color.replace('#','')})`}
      />
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={w} cy={height - values[values.length - 1] * (height - 2) - 1} r="2" fill={color}/>
    </svg>
  );
}

// ── Single metric card — ticker + delta + sparkline ──
function MetricCard({ label, value, unit, delta, trend, spark, color, isKr }) {
  return (
    <div className="group relative p-4 border border-ink/15 bg-paper/80 hover:border-ink/40 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className={`text-ash ${isKr ? 'font-kr text-[11px]' : 'font-mono text-[9px] tracking-[0.22em] uppercase'}`}>
          {label}
        </div>
        <div className={`shrink-0 flex items-center gap-1 ${isKr ? 'font-kr text-[10px]' : 'font-mono text-[9px] tracking-[0.15em] uppercase'} ${trend === 'up' ? 'text-sage' : trend === 'down' ? 'text-[#c23b22]' : 'text-ash'}`}>
          <span>{trend === 'up' ? '▲' : trend === 'down' ? '▼' : '◆'}</span>
          <span>{delta}</span>
        </div>
      </div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <div className="font-serif text-[28px] leading-none tabular-nums text-ink">{value}</div>
        {unit && <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-ash">{unit}</div>}
      </div>
      <div className="mt-3 text-ink" style={{ color }}>
        <Sparkline values={spark} color={color}/>
      </div>
    </div>
  );
}

function HeroMarquee({ items, isKr }) {
  return (
    <div className="border-y border-ink bg-parch/60 overflow-hidden">
      <div className={`flex gap-12 py-3 whitespace-nowrap animate-[marquee_55s_linear_infinite] ${isKr ? 'font-kr text-sm' : 'font-mono text-[11px] tracking-[0.25em] uppercase'}`}>
        {[...items, ...items, ...items].map((txt, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"/>
            <span>{txt}</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

function Hero({ t, lang }) {
  const isKr = lang === 'kr';

  // Tickers
  const [acks, setAcks] = React.useState(4231822);
  const [repos, setRepos] = React.useState(14382);
  const [thanks, setThanks] = React.useState(4812);
  React.useEffect(() => {
    const a = setInterval(() => setAcks((b) => b + 1), 2200);
    const b = setInterval(() => setRepos((s) => s + (Math.random() > 0.6 ? 1 : 0)), 7000);
    const c = setInterval(() => setThanks((x) => x + (Math.random() > 0.55 ? 1 : 0)), 4500);
    return () => { clearInterval(a); clearInterval(b); clearInterval(c); };
  }, []);

  const sparkRepos  = useSparkline(17);
  const sparkAcks   = useSparkline(42);
  const sparkThanks = useSparkline(11);
  const sparkGrid   = useSparkline(33);

  const L = t.hero.ledger;
  const GOLD = '#a8873d';
  const SAGE = '#6c7b5a';
  const INK  = '#1a1915';

  return (
    <section className="relative overflow-hidden border-b border-ink">
      {/* Backdrop halo — faint */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.35]">
        <div className="breathe">
          <HaloRing size={860} className="opacity-80"/>
        </div>
      </div>
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none -mt-24 opacity-60">
        <Sunburst outer={380} inner={70} rays={48} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 pt-14 pb-10">
        {/* Top meta strip — reads like a trading terminal */}
        <div className={`flex items-center justify-between ${isKr ? 'font-kr text-xs' : 'font-mono text-[10px] tracking-[0.3em] uppercase'} text-ash mb-10 gap-4`}>
          <span className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 bg-sage animate-pulse"/>
            {isKr ? '감사 완료 · 2026 2분기' : 'Audited · Q2 2026'}
          </span>
          <span className="hidden md:inline">{t.hero.issue}</span>
          <span className="flex items-center gap-2">
            {t.hero.eyebrow}
            <span className="text-gold">·</span>
            <span className="text-ink">halus<span className="text-gold">.dev</span></span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <h1 className={`text-ink ${isKr ? 'font-kr font-light' : 'font-serif'}`}>
              <span className={`block leading-[0.95] tracking-[-0.025em] ${isKr ? 'text-[clamp(2.25rem,5.5vw,5.25rem)]' : 'text-[clamp(2.5rem,6.5vw,6.75rem)]'}`}>
                {t.hero.title_a}
              </span>
              <span className={`block leading-[0.95] tracking-[-0.025em] -mt-1 ${isKr ? 'text-[clamp(2.25rem,5.5vw,5.25rem)]' : 'text-[clamp(2.5rem,6.5vw,6.75rem)]'}`}>
                <em className={isKr ? 'not-italic text-gold' : 'italic text-gold'}>{t.hero.title_b}</em>
              </span>
              <span className={`block leading-[0.95] tracking-[-0.025em] -mt-1 ${isKr ? 'text-[clamp(2.25rem,5.5vw,5.25rem)]' : 'text-[clamp(2.5rem,6.5vw,6.75rem)]'}`}>
                {t.hero.title_c}
              </span>
            </h1>
          </div>

          <div className="hidden lg:flex col-span-3 flex-col items-end gap-3 pb-4">
            {/* SOC-2 plate — looks like a compliance seal */}
            <div className="relative inline-flex items-center justify-center w-32 h-32 border border-ink bg-paper/90">
              <div className="absolute inset-2 border border-gold/60"/>
              <div className="absolute inset-4 border border-gold/30"/>
              <div className="flex flex-col items-center gap-1">
                <span className="w-5 h-5 rounded-full border-2 border-gold"/>
                <span className="font-mono text-[8px] tracking-[0.28em] uppercase text-ash">{L.sigil}</span>
              </div>
              <span className={`absolute -top-2 left-1/2 -translate-x-1/2 bg-paper px-2 text-gold ${isKr ? 'font-kr text-[10px]' : 'font-mono text-[8px] tracking-[0.3em] uppercase'}`}>
                {isKr ? '감사 인증' : 'Attested'}
              </span>
            </div>
            <div className={`text-ash text-right leading-snug ${isKr ? 'font-kr text-[11px]' : 'font-mono text-[9px] tracking-[0.22em] uppercase'}`}>
              {L.office}
            </div>
          </div>
        </div>

        <div className="rule mt-10"/>

        {/* Lede + CTAs + operating metrics dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          <div className="lg:col-span-6">
            <p className={`${isKr ? 'font-kr text-lg leading-[1.85]' : 'font-serif text-[22px] leading-[1.5]'} text-ink/85 max-w-xl`}>
              {t.hero.lede}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href="#pricing"
                className={`group inline-flex items-center gap-3 px-5 py-3 bg-ink text-paper hover:bg-gold transition-colors ${isKr ? 'font-kr text-sm' : 'font-mono text-[11px] tracking-[0.22em] uppercase'}`}
              >
                {t.hero.cta_primary}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#pricing"
                className={`inline-flex items-center gap-2 px-5 py-3 border border-ink hover:bg-ink hover:text-paper transition-colors ${isKr ? 'font-kr text-sm' : 'font-mono text-[11px] tracking-[0.22em] uppercase'}`}
              >
                <span className="text-gold">↓</span>
                {t.hero.cta_secondary}
              </a>
            </div>

            {/* Trust bar — press-style logos as wordmarks */}
            <div className="mt-10 pt-6 border-t border-ink/15">
              <div className={`text-ash mb-3 ${isKr ? 'font-kr text-[11px]' : 'font-mono text-[9px] tracking-[0.28em] uppercase'}`}>
                {isKr ? '레퍼런스 (일부, 공개 허용)' : 'Trusted by · partial disclosure'}
              </div>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-ink/60">
                <span className="font-serif italic text-xl">Aperture</span>
                <span className="font-mono text-sm tracking-[0.2em] uppercase">Cumulus</span>
                <span className="font-serif text-xl">BÖHM&amp;Co</span>
                <span className="font-mono text-[13px] tracking-[0.18em] uppercase">meridian/os</span>
                <span className="font-serif italic text-xl">Arbor.ai</span>
              </div>
            </div>
          </div>

          {/* ── Analytics-dashboard ledger ─────────────────────────── */}
          <aside className="lg:col-span-6">
            <div className="border border-ink/25 bg-paper/70">
              {/* Dashboard chrome */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink/15 bg-ink/[0.03]">
                <div className={`flex items-center gap-2 text-ink ${isKr ? 'font-kr text-[11px]' : 'font-mono text-[9px] tracking-[0.28em] uppercase'}`}>
                  <span className="inline-block w-1.5 h-1.5 bg-sage rounded-full animate-pulse"/>
                  {L.heading}
                </div>
                <div className={`flex items-center gap-3 text-ash ${isKr ? 'font-kr text-[10px]' : 'font-mono text-[9px] tracking-[0.2em] uppercase'}`}>
                  <span>24H</span>
                  <span className="text-ink">· 7D ·</span>
                  <span>30D</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[1px] bg-ink/10 p-[1px]">
                <MetricCard
                  isKr={isKr}
                  label={L.reposLabel}
                  value={repos.toLocaleString()}
                  delta="+1.4%"
                  trend="up"
                  spark={sparkRepos}
                  color={SAGE}
                />
                <MetricCard
                  isKr={isKr}
                  label={L.acksLabel}
                  value={acks.toLocaleString()}
                  delta="+0.02%/s"
                  trend="up"
                  spark={sparkAcks}
                  color={GOLD}
                />
                <MetricCard
                  isKr={isKr}
                  label={L.thanksLabel}
                  value={thanks.toLocaleString()}
                  delta="+312"
                  trend="up"
                  spark={sparkThanks}
                  color={INK}
                />
                <MetricCard
                  isKr={isKr}
                  label={L.gridLabel}
                  value={L.gridValue}
                  unit="◎ 312 gCO₂"
                  delta="stable"
                  trend="flat"
                  spark={sparkGrid}
                  color={SAGE}
                />
              </div>

              {/* Attestation footer */}
              <div className={`flex items-center justify-between px-4 py-2.5 border-t border-ink/15 bg-ink/[0.02] ${isKr ? 'font-kr text-[11px]' : 'font-mono text-[9px] tracking-[0.22em] uppercase'} text-ash`}>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"/>
                  {L.attest}
                </span>
                <span className="tabular-nums">rev. 03:12 GMT</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <HeroMarquee items={t.hero.marquee} isKr={isKr}/>
    </section>
  );
}

Object.assign(window, { Hero });
