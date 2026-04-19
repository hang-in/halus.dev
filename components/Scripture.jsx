// Scripture.jsx — blog listing + epistle detail view

function ScriptureView({ t, lang }) {
  const isKr = lang === 'kr';
  const S = t.scripture;
  const [openIdx, setOpenIdx] = React.useState(null);

  if (openIdx !== null && S.articles[openIdx]) {
    return <EpistleDetail art={S.articles[openIdx]} S={S} isKr={isKr} onBack={() => setOpenIdx(null)}/>;
  }

  const meta = (
    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ash space-y-3">
      <div className="flex items-center justify-between">
        <span>{isKr ? '연보' : 'Vol.'} I</span>
        <span>{S.articles.length} {isKr ? '편' : 'articles'}</span>
      </div>
      <div className="h-px bg-ink/20"/>
      <div className="flex items-center justify-between text-gold">
        <Cross size={9}/>
        <span>IMPRIMATVR</span>
        <Cross size={9}/>
      </div>
    </div>
  );

  return (
    <>
      <PageHeader
        eyebrow={S.eyebrow}
        title={<><em className="text-gold not-italic">{S.title.split(' ')[0]}</em>{' ' + S.title.split(' ').slice(1).join(' ')}</>}
        sub={S.sub}
        isKr={isKr}
        meta={meta}
      />

      <section className="border-b border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <ScriptureFeatured art={S.articles[0]} S={S} isKr={isKr} onOpen={() => setOpenIdx(0)}/>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-t border-ink/15 pt-16">
            {S.articles.slice(1).map((a, i) => (
              <ScriptureCard key={i} art={a} S={S} isKr={isKr} onOpen={() => setOpenIdx(i + 1)}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ScriptureFeatured({ art, S, isKr, onOpen }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
      <div className="lg:col-span-5">
        <div className="relative aspect-[4/5] border border-ink bg-parch overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(135deg, rgba(10,10,10,0.12) 0 1px, transparent 1px 5px), repeating-linear-gradient(45deg, rgba(10,10,10,0.08) 0 1px, transparent 1px 7px)`
          }}/>
          <div className="absolute inset-4 border border-ink"/>
          <div className="absolute inset-6 border border-gold"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <Cross size={26} className="text-gold mb-4"/>
            <div className="font-serif italic text-3xl leading-tight">{art.title}</div>
            <div className="mt-4 w-12 h-px bg-ink/30"/>
            <div className="mt-4 font-mono text-[9px] tracking-[0.3em] uppercase text-ash">{art.n}</div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold flex items-center gap-3">
          <span>{S.latest}</span>
          <span className="w-8 h-px bg-gold"/>
          <span className="text-ash">{art.tag}</span>
        </div>
        <h2 className={`mt-4 text-ink ${isKr ? 'font-kr font-medium text-5xl leading-[1.15]' : 'font-serif text-6xl leading-[0.95] tracking-[-0.02em]'}`}>
          {art.title}
        </h2>
        <p className={`mt-5 text-ink/85 ${isKr ? 'font-kr text-lg leading-[1.85]' : 'font-serif text-2xl leading-[1.4]'}`}>
          {art.dek}
        </p>

        <div className="mt-8 flex items-center gap-5 font-mono text-[10px] tracking-[0.25em] uppercase text-ash">
          <span>{art.date}</span>
          <span className="w-1 h-1 rounded-full bg-gold"/>
          <span>{S.by} <span className="text-ink">{art.author}</span></span>
          <span className="w-1 h-1 rounded-full bg-gold"/>
          <span>{art.mins} {S.readTime}</span>
        </div>

        <button
          onClick={onOpen}
          className={`mt-8 inline-flex items-center gap-3 self-start px-5 py-3 border border-ink hover:bg-ink hover:text-paper transition-colors ${isKr ? 'font-kr text-sm' : 'font-mono text-[11px] tracking-[0.28em] uppercase'}`}
        >
          <Cross size={10}/>
          {S.ctaExamine}
          <span>→</span>
        </button>
      </div>
    </article>
  );
}

function ScriptureCard({ art, S, isKr, onOpen }) {
  return (
    <article className="group cursor-pointer" onClick={onOpen}>
      <div className="flex items-center gap-3 mb-4 font-mono text-[10px] tracking-[0.25em] uppercase text-ash">
        <span className="text-gold">{art.n}</span>
        <span className="w-6 h-px bg-ink/30"/>
        <span>{art.tag}</span>
      </div>
      <h3 className={`text-ink group-hover:text-gold transition-colors ${isKr ? 'font-kr font-medium text-3xl leading-[1.25]' : 'font-serif text-4xl leading-[1.05] tracking-[-0.01em]'}`}>
        {art.title}
      </h3>
      <div className="rule-gold my-4 w-10"/>
      <p className={`text-ink/75 ${isKr ? 'font-kr text-[15px] leading-[1.85]' : 'font-serif text-lg leading-[1.45]'}`}>
        {art.dek}
      </p>
      <div className="mt-5 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] uppercase text-ash">
        <span>{art.date}</span>
        <span>{art.mins} {S.readTime}</span>
      </div>
    </article>
  );
}

function EpistleDetail({ art, S, isKr, onBack }) {
  const body = art.body || [];
  return (
    <article>
      {/* Sub-nav strip */}
      <div className="border-b border-ink bg-parch/60">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 text-ink hover:text-gold transition-colors ${isKr ? 'font-kr text-sm' : 'font-mono text-[11px] tracking-[0.28em] uppercase'}`}
          >
            <span>←</span>
            {S.ctaBack}
          </button>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ash flex items-center gap-3">
            <span>{art.n}</span>
            <span className="w-1 h-1 rounded-full bg-gold"/>
            <span>{art.tag}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="border-b border-ink">
        <div className="max-w-[900px] mx-auto px-6 py-20 text-center">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold"/>
            <Cross size={10}/>
            {isKr ? '서신' : 'Epistle'} · {art.n}
            <Cross size={10}/>
            <span className="w-8 h-px bg-gold"/>
          </div>
          <h1 className={`text-ink ${isKr ? 'font-kr font-medium text-5xl leading-[1.25]' : 'font-serif text-7xl leading-[0.95] tracking-[-0.02em]'}`}>
            {art.title}
          </h1>
          <p className={`mt-6 max-w-2xl mx-auto text-ash ${isKr ? 'font-kr text-lg leading-[1.85]' : 'font-serif italic text-2xl leading-[1.35]'}`}>
            {art.dek}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 font-mono text-[10px] tracking-[0.25em] uppercase text-ash">
            <span>{art.date}</span>
            <span className="w-1 h-1 rounded-full bg-gold"/>
            <span>{S.by} <span className="text-ink">{art.author}</span></span>
            <span className="w-1 h-1 rounded-full bg-gold"/>
            <span>{art.mins} {S.readTime}</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="border-b border-ink">
        <div className="max-w-[780px] mx-auto px-6 py-16">
          {body.map((b, i) => {
            if (b.kind === 'h') {
              return (
                <h2 key={i} className={`mt-10 mb-5 text-ink flex items-baseline gap-4 ${isKr ? 'font-kr font-medium text-3xl' : 'font-serif text-4xl tracking-[-0.01em]'}`}>
                  <span className="text-gold">§</span>
                  {b.text}
                </h2>
              );
            }
            if (b.kind === 'pull') {
              return (
                <blockquote key={i} className="my-10 pl-6 border-l-2 border-gold">
                  <p className={`text-ink ${isKr ? 'font-kr font-medium text-2xl leading-[1.6]' : 'font-serif italic text-3xl leading-[1.2]'}`}>
                    {b.text}
                  </p>
                </blockquote>
              );
            }
            if (b.kind === 'closing') {
              return (
                <div key={i} className="mt-16 pt-8 border-t border-ink/20">
                  <p className={`text-ash text-center ${isKr ? 'font-kr text-[15px] leading-[1.85]' : 'font-serif italic text-xl leading-[1.45]'}`}>
                    {b.text}
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-2 text-gold">
                    <Cross size={10}/><Cross size={10}/><Cross size={10}/>
                  </div>
                </div>
              );
            }
            // paragraph
            const isFirst = i === 0 || (body[i - 1] && body[i - 1].kind === 'h');
            return (
              <p
                key={i}
                className={`mb-5 text-ink/88 ${isFirst && !isKr ? 'dropcap' : ''} ${isKr ? 'font-kr text-[17px] leading-[2]' : 'font-serif text-[21px] leading-[1.55]'}`}
              >
                {b.text}
              </p>
            );
          })}

          {/* Back link at bottom */}
          <div className="mt-12 pt-8 border-t border-ink/15 flex items-center justify-between">
            <button
              onClick={onBack}
              className={`inline-flex items-center gap-2 text-ink hover:text-gold transition-colors ${isKr ? 'font-kr text-sm' : 'font-mono text-[11px] tracking-[0.28em] uppercase'}`}
            >
              <span>←</span>
              {S.ctaBack}
            </button>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ash flex items-center gap-2">
              <Cross size={9} className="text-gold"/>
              {isKr ? '축성 · 편찬 완료' : 'sanctified · filed'}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { ScriptureView });
