// Docs.jsx — docs view with sidebar

function DocsView({ t, lang }) {
  const isKr = lang === 'kr';
  const G = t.docs;
  const [active, setActive] = React.useState('intro');

  const meta = (
    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ash space-y-3">
      <div className="flex items-center justify-between">
        <span>{isKr ? '판본' : 'edition'}</span>
        <span className="text-gold">{G.version}</span>
      </div>
      <div className="h-px bg-ink/20"/>
      <div className="flex items-center justify-between">
        <span>{isKr ? '상태' : 'status'}</span>
        <span className="flex items-center gap-2 text-sagedk">
          <span className="w-1.5 h-1.5 rounded-full bg-sage"/>
          {isKr ? 'stable · verified' : 'stable · verified'}
        </span>
      </div>
    </div>
  );

  return (
    <>
      <PageHeader
        eyebrow={G.eyebrow}
        title={G.title.split(' ').map((w, i, a) => i === a.length - 1
          ? <em key={i} className="text-gold not-italic"> {w}</em>
          : (i === 0 ? w : ' ' + w))}
        sub={G.sub}
        isKr={isKr}
        meta={meta}
      />

      <section className="border-b border-ink">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <div className="border border-ink bg-paper">
                <div className={`px-4 py-3 bg-ink text-paper flex items-center justify-between ${isKr ? 'font-kr text-xs' : 'font-mono text-[10px] tracking-[0.28em] uppercase'}`}>
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-goldlt"/>{isKr ? '목차' : 'Contents'}</span>
                  <span className="text-goldlt">§</span>
                </div>
                <ul>
                  {G.toc.map((item, i) => {
                    const isActive = active === item.k;
                    return (
                      <li key={item.k}>
                        <button
                          onClick={() => setActive(item.k)}
                          className={`w-full text-left px-4 py-2.5 flex items-center gap-3 border-t border-ink/15 transition-colors ${isActive ? 'bg-parch text-ink' : 'text-ink/70 hover:bg-parch/60 hover:text-ink'} ${isKr ? 'font-kr text-[13px]' : 'font-mono text-[11px]'}`}
                        >
                          <span className={`tabular-nums ${isActive ? 'text-gold' : 'text-ash'}`}>{String(i + 1).padStart(2, '0')}</span>
                          <span className="flex-1">{item.label}</span>
                          {isActive && <span className="text-gold">→</span>}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={`mt-6 p-4 border border-ink/30 bg-parch/60 ${isKr ? 'font-kr text-[13px] leading-[1.7]' : 'font-serif italic text-[15px] leading-[1.45]'} text-ink/80`}>
                {isKr
                  ? '기술적인 질문이 있으십니까? 상담을 통해 명확한 안내를 받으십시오.'
                  : 'Technical questions? Request a consultation for precise guidance.'}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <article className="lg:col-span-9 min-w-0">
            <DocsContent section={G.sections[active === 'rules' ? 'linter' : active]} sectionKey={active} G={G} isKr={isKr}/>
          </article>
        </div>
      </section>
    </>
  );
}

function DocsContent({ section, sectionKey, G, isKr }) {
  if (!section) return null;
  return (
    <div>
      <div className={`font-mono text-[10px] tracking-[0.3em] uppercase text-ash mb-3 flex items-center gap-3`}>
        <span className="text-gold">§</span>
        {G.toc.findIndex(x => x.k === sectionKey) + 1} · {sectionKey}
      </div>
      <h2 className={`text-ink ${isKr ? 'font-kr font-medium text-5xl leading-[1.2]' : 'font-serif text-6xl leading-[0.95] tracking-[-0.02em]'}`}>
        {section.title}
      </h2>
      <div className="rule-gold w-16 my-6"/>

      <div className="space-y-5">
        {section.body && section.body.map((p, i) => (
          <p key={i} className={`text-ink/85 ${isKr ? 'font-kr text-[17px] leading-[1.9]' : 'font-serif text-[21px] leading-[1.5]'} whitespace-pre-line`}>
            {p}
          </p>
        ))}
      </div>

      {section.code && (
        <div className="mt-8 border border-ink bg-ink text-paper font-mono text-[13px] leading-[1.65] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-paper/20 text-[10px] tracking-[0.25em] uppercase text-paper/60">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-goldlt"/>
              {sectionKey === 'install' ? 'terminal' : sectionKey === 'ci' ? 'yaml' : 'code'}
            </span>
            <span className="text-goldlt">✓</span>
          </div>
          <pre className="p-5 whitespace-pre-wrap">{section.code}</pre>
        </div>
      )}

      {/* Rules table for linter */}
      {sectionKey === 'linter' && section.rules && (
        <div className="mt-10">
          <div className={`text-ash mb-3 ${isKr ? 'font-kr text-sm' : 'font-mono text-[10px] tracking-[0.3em] uppercase'}`}>
            {isKr ? '선정된 규칙 (전체 보기)' : 'Selected rules (full catalog)'}
          </div>
          <div className="border border-ink overflow-x-auto">
            <div className={`hidden md:grid grid-cols-12 gap-3 px-4 py-2.5 bg-ink text-paper font-mono text-[10px] tracking-[0.28em] uppercase min-w-[600px]`}>
              <span className="col-span-2">{isKr ? '번호' : 'id'}</span>
              <span className="col-span-1">{isKr ? '등급' : 'grade'}</span>
              <span className="col-span-3">{isKr ? '이름' : 'name'}</span>
              <span className="col-span-6">{isKr ? '설명' : 'description'}</span>
            </div>
            {section.rules.map((r, i) => (
              <div key={r.id} className={`flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-3 px-4 py-4 md:py-3 items-start md:min-w-[600px] ${i ? 'border-t border-ink/15' : ''}`}>
                <div className="md:col-span-2 flex items-center justify-between w-full md:w-auto">
                  <span className="font-mono text-[11px] text-ink">{r.id}</span>
                  <span className="md:hidden inline-flex items-center justify-center w-7 h-6 border font-mono text-[10px] border-ink/40 text-ash">{r.grade}</span>
                </div>
                <span className="hidden md:flex md:col-span-1">
                  <span className={`inline-flex items-center justify-center w-7 h-6 border font-mono text-[10px] ${
                    r.grade === 'V' ? 'bg-ink text-paper border-ink' :
                    r.grade === 'IV' ? 'border-gold text-gold' :
                    r.grade === 'III' ? 'border-ink text-ink' :
                    'border-ink/40 text-ash'
                  }`}>{r.grade}</span>
                </span>
                <span className="md:col-span-3 font-mono text-[12px] text-gold break-all">{r.name}</span>
                <span className={`md:col-span-6 text-ink/80 ${isKr ? 'font-kr text-[14px] leading-[1.75]' : 'font-serif text-[17px] leading-[1.45]'}`}>{r.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* footer action */}
      <div className="mt-12 flex items-center justify-between border-t border-ink/15 pt-6 font-mono text-[10px] tracking-[0.28em] uppercase">
        <span className="text-ash">{isKr ? '편집: Halus 팀' : 'Maintained by the Halus team'}</span>
        <span className="flex items-center gap-2 text-gold">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"/>
          {isKr ? '검증 및 서명 완료' : 'verified · signed'}
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { DocsView });
