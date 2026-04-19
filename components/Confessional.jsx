// Confessional.jsx — expanded testimony view

function ConfessionalView({ t, lang }) {
  const isKr = lang === 'kr';
  const C = t.confessional;

  const meta = (
    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ash space-y-3">
      <div className="flex items-center justify-between">
        <span>{isKr ? '봉인' : 'seal'}</span>
        <span className="text-gold">OFFICIAL</span>
      </div>
      <div className="h-px bg-ink/20"/>
      <div className="flex items-center justify-between">
        <span>{isKr ? '익명' : 'anonymous'}</span>
        <span>{C.items.length} {isKr ? '건' : 'cases'}</span>
      </div>
    </div>
  );

  return (
    <>
      <PageHeader
        eyebrow={C.eyebrow}
        title={<>{C.title.split(':')[0]}:<em className="text-gold not-italic">{C.title.split(':')[1]}</em></>}
        sub={C.sub}
        isKr={isKr}
        meta={meta}
      />

      {/* Interactive Terminal Confessional */}
      <section className="bg-ink border-b border-paper/10">
        <div className="max-w-[1000px] mx-auto px-6 py-16">
          <TerminalConfessional isKr={isKr} />
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-ink bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4">
          {C.stats.map((s, i) => (
            <div key={i} className={`px-6 ${i ? 'md:border-l border-paper/15' : ''}`}>
              <div className="font-serif text-5xl leading-none text-goldlt">{s.value}</div>
              <div className={`mt-2 text-paper/70 ${isKr ? 'font-kr text-[13px]' : 'font-mono text-[10px] tracking-[0.25em] uppercase'}`}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonies */}
      <section className="border-b border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-20 space-y-10">
          {C.items.map((item, i) => (
            <TestimonyCard key={i} item={item} C={C} isKr={isKr} idx={i}/>
          ))}

          <div className="border-t border-ink/20 pt-10 flex items-center justify-between flex-wrap gap-6">
            <p className={`max-w-xl text-ink/80 ${isKr ? 'font-kr text-lg leading-[1.85]' : 'font-serif italic text-2xl leading-[1.35]'}`}>
              {isKr
                ? '당신의 증언이 이 성소에 기록되길 원하시나요? 고해는 우편으로 수신되며, 봉인 아래 번역되어, 익명으로 공유됩니다.'
                : 'Would you have your testimony recorded here? Confessions are received by post, translated under seal, and published anonymously.'}
            </p>
            <a className={`inline-flex items-center gap-3 px-6 py-4 bg-ink text-paper hover:bg-gold transition-colors ${isKr ? 'font-kr text-sm' : 'font-mono text-[11px] tracking-[0.28em] uppercase'}`}>
              <Cross size={11} className="text-goldlt"/>
              {C.booking}
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonyCard({ item, C, isKr, idx }) {
  const flip = idx % 2 === 1;
  return (
    <article className="grid grid-cols-12 gap-0 border border-ink bg-paper">
      {/* Before — malus */}
      <div className={`col-span-12 md:col-span-5 p-8 bg-parch/60 border-r border-ink relative ${flip ? 'md:order-2' : ''}`}>
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ash flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full border border-ink"/>
          {isKr ? 'malus 시절' : 'Before · on malus'}
        </div>
        <blockquote className={`text-ink/75 ${isKr ? 'font-kr text-[15px] leading-[1.9]' : 'font-serif italic text-[19px] leading-[1.5]'}`}>
          {item.whenMalus}
        </blockquote>
      </div>

      {/* After — halus */}
      <div className={`col-span-12 md:col-span-7 p-8 relative ${flip ? 'md:order-1' : ''}`}>
        <div className="absolute inset-2 border border-gold/25 pointer-events-none"/>
        <div className="relative">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold flex items-center gap-2 mb-4">
            <Cross size={9}/>
            {isKr ? 'halus로 이주 후' : 'After · on halus'}
            <span className="ml-auto text-ash">{C.migrateBadge}</span>
          </div>
          <blockquote className={`text-ink ${isKr ? 'font-kr text-[18px] leading-[1.85]' : 'font-serif italic text-[26px] leading-[1.3]'}`}>
            {item.whenHalus}
          </blockquote>

          <div className="rule-gold my-6"/>

          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className={`text-ink/80 ${isKr ? 'font-kr text-[14px]' : 'font-serif italic text-lg'}`}>— {item.who}</div>
            </div>
            <div className="flex items-center gap-5 font-mono text-[10px] tracking-[0.25em] uppercase text-ash">
              <span className="flex items-center gap-2">
                <Cross size={9} className="text-gold"/>
                {C.onTier}: <span className="text-ink">{item.tier}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="font-serif text-xl not-italic text-gold tabular-nums">{item.days}</span>
                <span>{C.daysSince}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function TerminalConfessional({ isKr }) {
  const [input, setInput] = React.useState('');
  const [logs, setLogs] = React.useState([
    { type: 'sys', text: isKr ? 'halus.dev 도덕 터미널에 접속되었습니다.' : 'Connected to halus.dev moral terminal.' },
    { type: 'sys', text: isKr ? '당신의 커밋, 혹은 마음의 짐을 고백하십시오.' : 'Confess your commit, or the burden on your soul.' },
  ]);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [logs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userText = input.trim();
    setInput('');
    setLogs(prev => [...prev, { type: 'user', text: '> ' + userText }]);
    setIsProcessing(true);

    const steps = isKr ? [
      { t: 600,  text: '[진단] 도덕적 지연(Moral Latency) 계산 중...' },
      { t: 1400, text: '[경고] 출처 누락 및 이기적 강제 푸시 서명 감지됨.' },
      { t: 2200, text: '[처방] 108배 배례 권고 및 사죄 서신 큐(Queue) 자동 등록 중...' },
      { t: 3000, text: '[완료] 당신의 짐이 가벼워졌습니다. 분산 원장에 기록됨.' },
    ] : [
      { t: 600,  text: '[SCAN] Calculating Moral Latency...' },
      { t: 1400, text: '[WARN] Unattributed fork and selfish force-push detected.' },
      { t: 2200, text: '[REMEDY] 108 bows required. Queuing automated apology letters...' },
      { t: 3000, text: '[DONE] Your load is lightened. Logged to the distributed ledger.' },
    ];

    for (const step of steps) {
      await new Promise(r => setTimeout(r, step.t / steps.length));
      setLogs(prev => [...prev, { type: 'sys', text: step.text }]);
    }
    
    setIsProcessing(false);
  };

  return (
    <div className="w-full bg-[#050505] border border-gold/30 rounded-sm overflow-hidden flex flex-col font-mono text-[13px] shadow-[0_0_30px_rgba(176,137,52,0.1)]">
      {/* Terminal Title Bar */}
      <div className="flex items-center px-4 py-2 bg-paper/5 border-b border-gold/20">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-ash/50"/>
          <div className="w-2.5 h-2.5 rounded-full bg-ash/50"/>
          <div className="w-2.5 h-2.5 rounded-full bg-ash/50"/>
        </div>
        <div className="mx-auto text-gold/70 tracking-[0.2em] uppercase text-[10px]">The Confessional</div>
      </div>
      
      {/* Terminal Output */}
      <div ref={scrollRef} className="p-6 h-64 overflow-y-auto no-scrollbar space-y-3">
        {logs.map((log, i) => (
          <div key={i} className={`${log.type === 'user' ? 'text-paper' : 'text-sage'} opacity-90 leading-relaxed`}>
            {log.text}
          </div>
        ))}
        {isProcessing && (
          <div className="text-sage opacity-50 animate-pulse">_</div>
        )}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="px-6 py-4 border-t border-paper/10 flex items-center bg-[#080808]">
        <span className="text-gold mr-3">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isProcessing}
          placeholder={isKr ? "고해할 내용을 입력하세요 (예: Stack Overflow 코드를 훔쳤습니다)" : "Type your confession (e.g., I stole code from Stack Overflow)"}
          className="flex-1 bg-transparent text-paper outline-none placeholder:text-paper/20 disabled:opacity-50"
          autoComplete="off"
        />
        <button type="submit" disabled={isProcessing || !input.trim()} className="opacity-0 w-0 h-0">Submit</button>
      </form>
    </div>
  );
}

Object.assign(window, { ConfessionalView });
