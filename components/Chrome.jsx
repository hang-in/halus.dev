// Chrome.jsx — status bar + nav with mock routing

function StatusBar({ t, lang, setLang }) {
  return (
    <div className="bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-2.5 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="inline-block w-1.5 h-1.5 bg-gold shrink-0"/>
          <span className="opacity-80 truncate">{t.bar.status}</span>
        </div>
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <span className="opacity-80 hover:opacity-100 hover:text-goldlt transition-colors cursor-pointer">
            {t.bar.donate} ↗
          </span>
          <span className="opacity-30">/</span>
          <span className="opacity-40">{t.bar.langLabel}</span>
          <div className="flex items-stretch border border-paper/30">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-goldlt text-ink' : 'text-paper/70 hover:text-goldlt'}`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <span className="w-px bg-paper/30"/>
            <button
              onClick={() => setLang('kr')}
              className={`px-2.5 py-1 transition-colors ${lang === 'kr' ? 'bg-goldlt text-ink' : 'text-paper/70 hover:text-goldlt'}`}
              aria-pressed={lang === 'kr'}
            >
              KR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav({ t, lang, setLang, view, setView, theme, setTheme }) {
  const isKr = lang === 'kr';
  const routes = [
    { k: 'home',         label: t.routes.home },
    { k: 'scripture',    label: t.routes.scripture },
    { k: 'gospel',       label: t.routes.gospel },
    { k: 'confessional', label: t.routes.confessional },
  ];

  const onGo = (k) => (e) => { e.preventDefault(); setView(k); window.scrollTo({ top: 0, behavior: 'instant' }); };

  return (
    <nav className="border-b border-ink bg-paper sticky top-0 z-40 paper-grain">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4 md:gap-6">
        <a href="#" onClick={onGo('home')} className="flex items-center gap-3 group shrink-0">
          <span className="relative inline-flex items-center justify-center w-9 h-9 border border-ink bg-paper">
            <span className="absolute inset-[3px] border border-gold"/>
            <span className="font-serif italic text-xl leading-none translate-y-[1px]">h</span>
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full bg-goldlt/60 blur-[2px]"/>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-tight flex items-baseline gap-1">
              <span>halus</span>
              <span className="inline-flex items-center px-1.5 py-0.5 bg-ink text-paper font-mono text-[9px] tracking-[0.18em] uppercase leading-none translate-y-[-2px]">.dev</span>
            </span>
            <span className={`mt-1 hidden sm:block text-ash ${isKr ? 'font-kr text-[10px]' : 'font-mono text-[9px] tracking-[0.2em] uppercase'}`}>
              {t.brandMeaning}
            </span>
          </span>
        </a>

        <div className={`hidden md:flex items-center gap-8 ${isKr ? 'font-kr text-sm' : 'font-mono text-[11px] tracking-[0.22em] uppercase'}`}>
          {routes.map((r) => {
            const active = view === r.k;
            return (
              <a
                key={r.k}
                href={`#/${r.k}`}
                onClick={onGo(r.k)}
                className={`relative py-1 transition-colors ${active ? 'text-ink' : 'text-ink/60 hover:text-ink'}`}
              >
                {active && <span className="absolute -left-3 top-1/2 -translate-y-1/2 text-gold text-[9px]">✝</span>}
                {r.label}
                {active && <span className="absolute left-0 right-0 -bottom-[21px] h-[2px] bg-gold"/>}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => setTheme(theme === 'paper' ? 'crypt' : 'paper')}
            className={`p-2 border transition-colors ${theme === 'crypt' ? 'border-gold text-gold bg-ink' : 'border-ink text-ink hover:bg-parch'}`}
            title="Toggle The Crypt"
          >
            {theme === 'crypt' ? <LucideIcon name="flame" size={14}/> : <LucideIcon name="moon" size={14}/>}
          </button>
          <a
            href="#"
            className={`group relative hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-ink hover:bg-ink hover:text-paper transition-colors ${isKr ? 'font-kr text-sm' : 'font-mono text-[11px] tracking-[0.22em] uppercase'}`}
          >
            <Cross size={10}/>
            {t.nav.login}
          </a>
        </div>
      </div>
      {/* Mobile nav strip */}
      <div className={`md:hidden border-t border-ink/10 px-4 py-2.5 flex items-center justify-between overflow-x-auto whitespace-nowrap ${isKr ? 'font-kr text-xs' : 'font-mono text-[9px] tracking-[0.2em] uppercase'}`}>
        <div className="flex items-center gap-5">
          {routes.map((r) => {
            const active = view === r.k;
            return (
              <a
                key={`m-${r.k}`}
                href={`#/${r.k}`}
                onClick={onGo(r.k)}
                className={`transition-colors ${active ? 'text-gold' : 'text-ink/60 hover:text-ink'}`}
              >
                {r.label}
              </a>
            );
          })}
        </div>
        <div className="flex items-stretch ml-5 shrink-0 border border-ink/20 rounded-sm overflow-hidden">
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`relative z-50 cursor-pointer px-2 py-1 transition-colors ${lang === 'en' ? 'bg-ink text-paper' : 'text-ink/70 hover:text-ink'}`}
          >
            EN
          </button>
          <span className="w-px bg-ink/20"/>
          <button
            type="button"
            onClick={() => setLang('kr')}
            className={`relative z-50 cursor-pointer px-2 py-1 transition-colors ${lang === 'kr' ? 'bg-ink text-paper' : 'text-ink/70 hover:text-ink'}`}
          >
            KR
          </button>
        </div>
      </div>
    </nav>
  );
}

// ── Page header, shared across views ─────────────────────────────
function PageHeader({ eyebrow, title, sub, isKr, meta }) {
  return (
    <section className="parch-grain border-b border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <div className={`text-gold mb-5 flex items-center gap-3 ${isKr ? 'font-kr text-sm' : 'font-mono text-[10px] tracking-[0.3em] uppercase'}`}>
            <Cross size={10}/> {eyebrow}
          </div>
          <h1 className={`text-ink ${isKr ? 'font-kr font-medium text-5xl leading-[1.2]' : 'font-serif text-7xl leading-[0.95] tracking-[-0.02em]'}`}>
            {title}
          </h1>
          {sub && (
            <p className={`mt-5 max-w-2xl text-ash ${isKr ? 'font-kr text-lg leading-[1.85]' : 'font-serif italic text-2xl leading-[1.35]'}`}>
              {sub}
            </p>
          )}
        </div>
        {meta && (
          <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-ink/20">
            {meta}
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { StatusBar, Nav, PageHeader });
