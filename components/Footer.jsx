// Footer.jsx — expanded institutional footer with Legal + $32.80 savings story

function Footer({ t, lang, setView }) {
  const isKr = lang === 'kr';
  const F = t.footer;

  const go = (k) => (e) => { e.preventDefault(); setView && setView(k); window.scrollTo({ top: 0, behavior: 'instant' }); };

  // Map footer link labels → route keys (best effort, both langs)
  const routeFor = (label) => {
    const s = label.toString();
    if (/scripture|경전/i.test(s)) return 'scripture';
    if (/gospel|docs|복음|문서/i.test(s)) return 'gospel';
    if (/confessional|고해/i.test(s)) return 'confessional';
    if (/rites|indulgences|moral linter|changelog|삼례|면죄|린터|변경록/i.test(s)) return 'home';
    return null;
  };

  return (
    <footer className="bg-ink text-paper">
      {/* Savings / $32.80 story */}
      <div className="border-b border-paper/15 bg-[#0f0e0a]">
        <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-goldlt flex items-center gap-2 mb-3">
              <Cross size={10}/> {isKr ? '투명성' : 'Transparency'}
            </div>
            <div className={`${isKr ? 'font-kr font-medium text-2xl leading-[1.3]' : 'font-serif text-3xl leading-[1.05]'} text-paper`}>
              {F.savingsHeadline}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className={`${isKr ? 'font-kr text-base leading-[1.85]' : 'font-serif italic text-xl leading-[1.5]'} text-paper/80`}>
              {F.savingsBody}
            </p>
            <div className="mt-4 inline-flex items-center gap-3 px-3 py-2 border border-goldlt/40 bg-[#141309] font-mono text-[10px] tracking-[0.22em] uppercase">
              <span className="text-goldlt">Domain Surplus Transparency</span>
              <span className="w-px h-3 bg-goldlt/40"/>
              <span className="text-paper/80">
                {isKr
                  ? '.dev 전환 순 절감: $32.80 · 상태: 커뮤니티 카르마에 재투자됨'
                  : 'Net Savings from .dev Transition: $32.80 · Status: Invested in Community Karma'}
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 flex lg:justify-end">
            <a className={`inline-flex items-center gap-2 px-4 py-3 border border-goldlt text-goldlt hover:bg-goldlt hover:text-ink transition-colors ${isKr ? 'font-kr text-sm' : 'font-mono text-[10px] tracking-[0.28em] uppercase'}`}>
              {F.savingsLink}
            </a>
          </div>
        </div>
      </div>

      {/* Scripture band */}
      <div className="border-b border-paper/15">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-goldlt flex items-center gap-2">
              <Cross size={10}/> {F.scriptureLabel}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <p className={`${isKr ? 'font-kr font-light text-2xl leading-[1.7]' : 'font-serif italic text-3xl md:text-4xl leading-[1.25]'} text-paper`}>
              {F.verse}
            </p>
          </div>
        </div>
      </div>

      {/* Link grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex items-center justify-center w-11 h-11 border border-paper">
              <span className="absolute inset-[3px] border border-goldlt"/>
              <span className="font-serif italic text-2xl leading-none translate-y-[1px] text-paper">h</span>
            </span>
            <div className="leading-tight">
              <div className="font-serif text-3xl">{t.brand}</div>
              <div className={`mt-0.5 text-paper/50 ${isKr ? 'font-kr text-[11px]' : 'font-mono text-[10px] tracking-[0.22em] uppercase'}`}>
                {F.tagline}
              </div>
            </div>
          </div>
          <p className={`mt-6 max-w-sm text-paper/70 ${isKr ? 'font-kr text-base leading-[1.85]' : 'font-serif italic text-lg leading-[1.5]'}`}>
            {F.madeBy}
          </p>

          {/* Audit marks */}
          <div className="mt-6 flex items-center gap-3 flex-wrap font-mono text-[9px] tracking-[0.25em] uppercase">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 border border-paper/30 text-paper/70">
              <span className="w-1.5 h-1.5 bg-sage"/> {isKr ? '감사 완료 2026 Q1' : 'Audit · 2026 Q1'}
            </span>
            <span className="inline-flex items-center gap-2 px-2.5 py-1 border border-paper/30 text-paper/70">
              <Cross size={8} className="text-goldlt"/> {isKr ? '축성됨' : 'sanctified'}
            </span>
            <span className="inline-flex items-center gap-2 px-2.5 py-1 border border-paper/30 text-paper/70">
              SOC-2
            </span>
          </div>
        </div>

        {Object.entries(F.links).map(([key, links]) => (
          <div key={key} className="col-span-6 lg:col-span-2">
            <div className={`text-goldlt mb-4 ${isKr ? 'font-kr text-[11px] tracking-[0.2em]' : 'font-mono text-[10px] tracking-[0.3em] uppercase'}`}>
              {key}
            </div>
            <ul className="space-y-2">
              {links.map((l) => {
                const r = routeFor(l);
                return (
                  <li key={l}>
                    <a
                      href="#"
                      onClick={r ? go(r) : (e) => e.preventDefault()}
                      className={`${isKr ? 'font-kr text-[15px]' : 'font-serif text-lg'} text-paper/85 hover:text-goldlt transition-colors`}
                    >
                      {l}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-paper/15">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50">
          <span>{F.copy}</span>
          <span className="flex items-center gap-3">
            <Cross size={9} className="text-goldlt"/>
            SANCTVM · SANCTVM · SANCTVM
            <Cross size={9} className="text-goldlt"/>
          </span>
          <span>halus.dev</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
