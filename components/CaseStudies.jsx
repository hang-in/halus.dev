// CaseStudies.jsx — case studies / migration view

function CaseStudiesView({ t, lang }) {
  const isKr = lang === 'kr';
  const C = t.caseStudies;

  const meta = (
    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ash space-y-3">
      <div className="flex items-center justify-between">
        <span>{isKr ? '검증됨' : 'verified'}</span>
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

      {/* Interactive Terminal Demo */}
      <section className="bg-ink border-b border-paper/10">
        <div className="max-w-[1000px] mx-auto px-6 py-16">
          <EthicalTerminal isKr={isKr} />
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
            <MigrationCard key={i} item={item} C={C} isKr={isKr} idx={i}/>
          ))}

          <div className="border-t border-ink/20 pt-10 flex items-center justify-between flex-wrap gap-6">
            <p className={`max-w-xl text-ink/80 ${isKr ? 'font-kr text-lg leading-[1.85]' : 'font-serif italic text-2xl leading-[1.35]'}`}>
              {isKr
                ? '귀 조직의 마이그레이션 사례를 공유하시겠습니까? 모든 제출물은 익명화 후 검증을 거쳐 게시됩니다.'
                : 'Share your migration story? All submissions are anonymized, verified, and published with permission.'}
            </p>
            <a className={`inline-flex items-center gap-3 px-6 py-4 bg-ink text-paper hover:bg-gold transition-colors ${isKr ? 'font-kr text-sm' : 'font-mono text-[11px] tracking-[0.28em] uppercase'}`}>
              <span className="text-goldlt">→</span>
              {C.booking}
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function MigrationCard({ item, C, isKr, idx }) {
  const flip = idx % 2 === 1;
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-ink bg-paper">
      {/* Before — legacy state */}
      <div className={`md:col-span-5 p-8 bg-parch/60 border-r border-ink relative ${flip ? 'md:order-2' : ''}`}>
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ash flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full border border-ink"/>
          {isKr ? '기존 인프라 상태' : 'Legacy state · before migration'}
        </div>
        <blockquote className={`text-ink/75 ${isKr ? 'font-kr text-[15px] leading-[1.9]' : 'font-serif italic text-[19px] leading-[1.5]'}`}>
          {item.whenMalus}
        </blockquote>
      </div>

      {/* After — on halus */}
      <div className={`md:col-span-7 p-8 relative ${flip ? 'md:order-1' : ''}`}>
        <div className="absolute inset-2 border border-gold/25 pointer-events-none"/>
        <div className="relative">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold"/>
            {isKr ? 'Halus 도입 후' : 'Optimized · on halus'}
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
                <span className="w-1.5 h-1.5 rounded-full bg-gold"/>
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

function EthicalTerminal({ isKr }) {
  const [input, setInput] = React.useState('');
  const [logs, setLogs] = React.useState([
    { type: 'sys', text: isKr ? 'halus.dev 윤리 분석 터미널에 접속되었습니다.' : 'Connected to halus.dev ethical analysis terminal.' },
    { type: 'sys', text: isKr ? 'AI 워크플로우 또는 코드 출처에 대한 우려 사항을 입력하십시오.' : 'Describe your AI workflow concern or code provenance issue.' },
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
      { t: 600,  text: '[분석] 윤리적 표면(Ethical Surface) 스캔 중...' },
      { t: 1400, text: '[감지] 귀속 누락 및 내러티브 갭 식별됨.' },
      { t: 2200, text: '[시정] 내러티브 재작성 적용 중... 귀속 체인 업데이트 큐 등록.' },
      { t: 3000, text: '[완료] 윤리적 표면 정리됨. 감사 추적 기록 완료.' },
    ] : [
      { t: 600,  text: '[SCAN] Analyzing ethical surface area...' },
      { t: 1400, text: '[DETECT] Unattributed derivation and narrative gap identified.' },
      { t: 2200, text: '[REMEDY] Applying narrative rewrite... Attribution chain update queued.' },
      { t: 3000, text: '[DONE] Ethical surface clean. Audit trail recorded.' },
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
        <div className="mx-auto text-gold/70 tracking-[0.2em] uppercase text-[10px]">Ethical Analysis Terminal</div>
      </div>
      
      {/* Terminal Output */}
      <div ref={scrollRef} className="p-6 h-64 overflow-y-auto no-scrollbar space-y-3">
        {logs.map((log, i) => (
          <div key={i} className={`${log.type === 'user' ? 'text-[#FAFAF5]' : 'text-sage'} opacity-90 leading-relaxed`}>
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
          placeholder={isKr ? "우려 사항을 입력하세요 (예: AI가 생성한 코드의 출처가 불분명합니다)" : "Describe your concern (e.g., AI-generated code with unclear provenance)"}
          className="flex-1 bg-transparent text-[#FAFAF5] outline-none placeholder:text-[#FAFAF5]/40 disabled:opacity-50"
          autoComplete="off"
        />
        <button type="submit" disabled={isProcessing || !input.trim()} className="opacity-0 w-0 h-0">Submit</button>
      </form>
    </div>
  );
}

Object.assign(window, { CaseStudiesView });
