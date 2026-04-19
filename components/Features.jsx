// Features.jsx — strict single-language; Letter Pipeline restyled as a monitor

// ─── Demo 1: Soul-Print Extraction ──────────────────────────────────────
function SoulExtractionDemo({ t, isKr }) {
  const [pct, setPct] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPct((p) => (p >= 100 ? 0 : p + 1)), 110);
    return () => clearInterval(id);
  }, []);

  const guilts = [
    'repo/legacy-v1/',
    'vendor/stolen-chart.js',
    'copied-from-SO#7821',
    'AI-assisted-commit-4f9a1',
    'TODO: credit original',
  ];

  const E = t.extractor;

  return (
    <div className="bg-paper border border-ink p-5 font-mono text-[11px]">
      <div className="flex items-center justify-between mb-4">
        <span className={`text-ash ${isKr ? 'font-kr text-xs' : 'tracking-[0.25em] uppercase'}`}>{E.title}</span>
        <span className="tracking-[0.2em] text-gold">{String(pct).padStart(3, '0')}%</span>
      </div>

      <div className="relative h-44 border border-ink/30">
        <div className="absolute inset-x-0 top-0 h-1/2 border-b border-ink/20 p-2 overflow-hidden">
          <div className={`text-ash mb-1 ${isKr ? 'font-kr text-[10px]' : 'text-[9px] tracking-[0.2em] uppercase'}`}>{E.guilt}</div>
          {guilts.slice(0, Math.max(1, 3 - Math.floor(pct / 40))).map((g) => (
            <div key={g} className="flex items-center gap-2 text-ink/70 leading-tight">
              <span className="text-gold">·</span>
              <span className="truncate">{g}</span>
            </div>
          ))}
        </div>
        <div className="absolute left-1/2 top-[48%] -translate-x-1/2">
          <div className="w-[3px] h-5 bg-gradient-to-b from-ink/60 to-transparent"/>
          <div className="mx-auto w-2 h-2 bg-gold rounded-full mt-1 animate-pulse"/>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 p-2 bg-parch/50">
          <div className={`text-sagedk mb-1 ${isKr ? 'font-kr text-[10px]' : 'text-[9px] tracking-[0.2em] uppercase'}`}>{E.pure}</div>
          <div className="text-ink/80 leading-tight">
            <div>const soul = pure(</div>
            <div>&nbsp;&nbsp;commit.map(repent)</div>
            <div>); <span className="text-gold">// ✝</span></div>
          </div>
        </div>
      </div>

      <div className="mt-4 h-px bg-ink/15 relative">
        <div className="absolute left-0 top-0 h-full bg-gold transition-all" style={{ width: `${pct}%` }}/>
      </div>
      <div className={`flex justify-between mt-2 text-ash ${isKr ? 'font-kr text-[10px]' : 'text-[9px] tracking-[0.2em] uppercase'}`}>
        <span>{E.sinAxis}</span>
        <span>{E.sanctityAxis}</span>
      </div>
    </div>
  );
}

// ─── Demo 2: Recursive License Loop — monitor treatment ────────────────
function LicenseLoopDemo({ t, isKr }) {
  const seed = [
    { to: 'sindresorhus',  pkg: 'is-odd',       state: 'sent'     },
    { to: 'substack',      pkg: 'optimist',     state: 'sent'     },
    { to: 'jonschlinkert', pkg: 'kind-of',      state: 'queued'   },
    { to: 'feross',        pkg: 'buffer',       state: 'drafting' },
    { to: 'tj',            pkg: 'commander',    state: 'queued'   },
    { to: 'kriskowal',     pkg: 'q',            state: 'bowed'    },
  ];
  const pool = [
    { to: 'isaacs',        pkg: 'semver' },
    { to: 'addyosmani',    pkg: 'critical' },
    { to: 'tannerlinsley', pkg: 'react-query' },
    { to: 'kentcdodds',    pkg: 'match-sorter' },
    { to: 'hzoo',          pkg: '@babel/core' },
    { to: 'paulirish',     pkg: 'git-open' },
    { to: 'rauchg',        pkg: 'ms' },
    { to: 'developit',     pkg: 'preact' },
  ];

  const [rows, setRows] = React.useState(seed);
  const [sentTotal, setSentTotal] = React.useState(128432);
  const [perMin, setPerMin] = React.useState(47);
  const [uptime, setUptime] = React.useState(0);

  React.useEffect(() => {
    // Advance row states up one notch each tick (drafting -> queued -> sent)
    const order = ['drafting', 'queued', 'sent'];
    const id = setInterval(() => {
      setRows((prev) => {
        const next = prev.map((r) => {
          if (r.state === 'sent' || r.state === 'bowed') return r;
          const i = order.indexOf(r.state);
          return { ...r, state: i >= 0 && i < order.length - 1 ? order[i + 1] : r.state };
        });
        // Rotate top (sent/bowed) off, push a fresh drafting at bottom
        if (next[0].state === 'sent' || next[0].state === 'bowed') {
          const fresh = pool[Math.floor(Math.random() * pool.length)];
          return [...next.slice(1), { ...fresh, state: 'drafting' }];
        }
        return next;
      });
      setSentTotal((v) => v + 1);
      setPerMin((v) => Math.max(30, Math.min(70, v + (Math.random() > 0.5 ? 1 : -1))));
    }, 1700);
    const u = setInterval(() => setUptime((x) => x + 1), 1000);
    return () => { clearInterval(id); clearInterval(u); };
  }, []);

  const fmtUptime = (s) => {
    const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600),
          m = Math.floor((s % 3600) / 60), sec = s % 60;
    return `${d}d ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  };

  const L = t.letters;
  const S = L.states;
  const stateChip = (s) => ({
    sent:     { cls: 'border-sagedk text-sagedk', label: S.sent },
    queued:   { cls: 'border-ash text-ash',       label: S.queued },
    drafting: { cls: 'border-gold text-gold',     label: S.drafting },
    bowed:    { cls: 'border-ink text-ink',       label: S.bowed },
  })[s];

  return (
    <div className="bg-paper border border-ink font-mono text-[11px] shadow-[0_0_0_1px_rgba(176,137,52,0.15)]">
      {/* monitor header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-ink bg-ink text-paper">
        <span className="flex items-center gap-2">
          <span className="flex gap-[3px]">
            <span className="w-1.5 h-1.5 rounded-full bg-goldlt"/>
            <span className="w-1.5 h-1.5 rounded-full bg-sage"/>
            <span className="w-1.5 h-1.5 rounded-full bg-paper/40"/>
          </span>
          <span className={`${isKr ? 'font-kr text-[11px]' : 'tracking-[0.22em] uppercase'}`}>{L.title}</span>
        </span>
        <span className={`flex items-center gap-1.5 text-goldlt ${isKr ? 'font-kr text-[11px]' : 'tracking-[0.2em] uppercase'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse"/>
          {L.running}
        </span>
      </div>

      {/* stat strip */}
      <div className="grid grid-cols-3 border-b border-ink/30 bg-parch/50">
        <div className="px-4 py-2 border-r border-ink/20">
          <div className={`text-ash ${isKr ? 'font-kr text-[10px]' : 'text-[9px] tracking-[0.22em] uppercase'}`}>{isKr ? '누적 발송' : 'total sent'}</div>
          <div className="font-serif text-xl tabular-nums leading-none mt-1">{sentTotal.toLocaleString()}</div>
        </div>
        <div className="px-4 py-2 border-r border-ink/20">
          <div className={`text-ash ${isKr ? 'font-kr text-[10px]' : 'text-[9px] tracking-[0.22em] uppercase'}`}>{L.throughput}</div>
          <div className="font-serif text-xl tabular-nums leading-none mt-1">{perMin}<span className="text-[10px] text-gold ml-1">/min</span></div>
        </div>
        <div className="px-4 py-2">
          <div className={`text-ash ${isKr ? 'font-kr text-[10px]' : 'text-[9px] tracking-[0.22em] uppercase'}`}>{L.uptime}</div>
          <div className="font-serif text-xl tabular-nums leading-none mt-1">{fmtUptime(uptime)}</div>
        </div>
      </div>

      {/* rows */}
      <ul>
        {rows.map((l, i) => {
          const chip = stateChip(l.state);
          return (
            <li key={`${l.to}-${i}`} className="flex items-center gap-3 px-4 py-2 border-b border-ink/10 last:border-b-0 transition-colors">
              <span className="text-gold">✉</span>
              <span className="tabular-nums text-ink/40 w-8">#{String(sentTotal - i).slice(-4)}</span>
              <span className="flex-1 truncate">
                <span className={`text-ink/60 ${isKr ? 'font-kr' : ''}`}>{L.to}:</span>{' '}
                <span className="text-ink">@{l.to}</span>
                <span className="text-ink/40"> · {l.pkg}</span>
              </span>
              <span className={`text-[9px] px-1.5 py-0.5 border ${chip.cls} ${isKr ? 'font-kr text-[10px]' : 'tracking-[0.2em] uppercase'}`}>
                {chip.label}
              </span>
            </li>
          );
        })}
      </ul>

      {/* footer bar */}
      <div className={`px-4 py-2.5 border-t border-ink bg-ink text-paper flex items-center justify-between ${isKr ? 'font-kr text-[11px]' : 'tracking-[0.22em] uppercase text-[10px]'}`}>
        <span>{L.loopsForever}</span>
        <span className="text-goldlt">cron: * * * * *</span>
      </div>
    </div>
  );
}

// ─── Demo 3: Vibe-Checked Logic ─────────────────────────────────────────
function VibeDemo({ t, isKr }) {
  const [hour, setHour] = React.useState(3);
  React.useEffect(() => {
    const id = setInterval(() => setHour((h) => (h + 1) % 24), 1100);
    return () => clearInterval(id);
  }, []);

  const intensity = (h) => 0.35 + 0.45 * Math.max(0, Math.sin(((h - 6) / 24) * Math.PI * 2) * 0.5 + 0.5);
  const bars = Array.from({ length: 24 }, (_, h) => intensity(h));
  const current = intensity(hour);
  const ok = current < 0.55;
  const V = t.vibe;

  return (
    <div className="bg-paper border border-ink p-5 font-mono text-[11px]">
      <div className="flex items-center justify-between mb-3">
        <span className={`text-ash ${isKr ? 'font-kr text-xs' : 'tracking-[0.25em] uppercase'}`}>{V.title}</span>
        <span className={`px-1.5 py-0.5 border ${ok ? 'border-sagedk text-sagedk' : 'border-gold text-gold'} ${isKr ? 'font-kr text-[10px]' : 'tracking-[0.2em] uppercase'}`}>
          {ok ? V.pass : V.wait}
        </span>
      </div>
      <div className="flex items-end gap-[3px] h-24 border-b border-ink/30">
        {bars.map((v, i) => (
          <div
            key={i}
            className="flex-1 relative"
            style={{
              height: `${v * 100}%`,
              background: i === hour ? '#B08934' : (v < 0.55 ? '#8A9A7A' : '#0A0A0A'),
              opacity: i === hour ? 1 : 0.75,
            }}
          >
            {i === hour && <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] tracking-widest text-gold">▼</span>}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-1 text-[9px] tracking-[0.2em] uppercase text-ash">
        <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="border border-ink/20 py-2">
          <div className={`text-ash ${isKr ? 'font-kr text-[10px]' : 'text-[9px] tracking-[0.2em] uppercase'}`}>{V.hour}</div>
          <div className="font-serif text-2xl leading-none mt-1 tabular-nums">{String(hour).padStart(2, '0')}:00</div>
        </div>
        <div className="border border-ink/20 py-2">
          <div className={`text-ash ${isKr ? 'font-kr text-[10px]' : 'text-[9px] tracking-[0.2em] uppercase'}`}>{V.carbon}</div>
          <div className="font-serif text-2xl leading-none mt-1">{Math.round(current * 100)}</div>
        </div>
        <div className="border border-ink/20 py-2">
          <div className={`text-ash ${isKr ? 'font-kr text-[10px]' : 'text-[9px] tracking-[0.2em] uppercase'}`}>{V.moon}</div>
          <div className="font-serif text-2xl leading-none mt-1">☽</div>
        </div>
      </div>
    </div>
  );
}

// ─── Feature row + section ──────────────────────────────────────────────
function FeatureRow({ feat, idx, isKr, t }) {
  const flip = idx % 2 === 1;
  const demos = [SoulExtractionDemo, LicenseLoopDemo, VibeDemo];
  const Demo = demos[idx] || SoulExtractionDemo;

  return (
    <article className="grid grid-cols-12 gap-8 py-20 border-b border-ink/20 last:border-b-0">
      <div className={`col-span-12 lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        <div className="flex items-baseline gap-5 mb-5">
          <span className="font-serif italic text-gold text-5xl leading-none">{feat.n}</span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ash">{feat.latin}</span>
        </div>

        <h3 className={`text-ink mb-6 ${isKr ? 'font-kr font-medium text-5xl leading-[1.15]' : 'font-serif text-6xl leading-[0.95] tracking-[-0.02em]'}`}>
          {feat.title}
        </h3>

        <p className={`max-w-xl text-ink/80 ${isKr ? 'font-kr text-lg leading-[1.85]' : 'font-serif text-xl leading-[1.5]'}`}>
          {feat.lede}
        </p>

        <ul className="mt-8 space-y-3">
          {feat.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <Cross size={11} className="text-gold mt-[7px] shrink-0"/>
              <span className={`text-ink/85 leading-snug ${isKr ? 'font-kr text-base leading-[1.8]' : 'font-serif text-lg'}`}>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-ash">
          <span className="w-8 h-px bg-ash"/>
          {feat.demoLabel}
        </div>
      </div>

      <div className={`col-span-12 lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <div className="sticky top-6">
          <div className={`mb-3 flex items-center justify-between text-ash ${isKr ? 'font-kr text-xs' : 'font-mono text-[10px] tracking-[0.3em] uppercase'}`}>
            <span>{isKr ? '실시간' : 'live'}</span>
            <span className="flex items-center gap-2">
              <Fleuron size={12} className="text-gold"/>
              {isKr ? '시연' : 'demonstration'}
            </span>
          </div>
          <Demo t={t} isKr={isKr}/>
        </div>
      </div>
    </article>
  );
}

function Features({ t, lang }) {
  const isKr = lang === 'kr';
  // Emphasize last word in title with gold
  const parts = t.pillars.title.split(' ');
  return (
    <section id="rites" className="border-b border-ink">
      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-10">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className={`text-gold mb-5 flex items-center gap-3 ${isKr ? 'font-kr text-sm' : 'font-mono text-[10px] tracking-[0.3em] uppercase'}`}>
              <Cross size={10}/> {t.pillars.eyebrow}
            </div>
            <h2 className={`text-ink ${isKr ? 'font-kr font-medium text-5xl leading-[1.2]' : 'font-serif text-6xl leading-[0.95] tracking-[-0.02em]'}`}>
              {parts.map((w, i) =>
                i === parts.length - 1
                  ? <em key={i} className="text-gold not-italic">{(i === 0 ? '' : ' ') + w}</em>
                  : (i === 0 ? w : ' ' + w)
              )}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pl-12 lg:border-l lg:border-ink/20">
            <p className={`text-ash ${isKr ? 'font-kr text-lg leading-[1.85]' : 'font-serif italic text-2xl leading-[1.4]'}`}>
              {t.pillars.sub}
            </p>
          </div>
        </div>

        <div className="mt-16">
          {t.features.map((feat, i) => (
            <FeatureRow key={i} feat={feat} idx={i} isKr={isKr} t={t}/>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Features });
