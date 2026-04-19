// Pricing.jsx

function Tier({ tier, isKr, idx }) {
  const featured = tier.featured;
  const base =
    tier.accent === 'gold' ? 'bg-ink text-paper border-ink' :
    tier.accent === 'sage' ? 'bg-paper text-ink border-ink' :
                              'bg-paper text-ink border-ink';
  const accentBorder =
    tier.accent === 'gold' ? 'border-goldlt' :
    tier.accent === 'sage' ? 'border-sagedk' :
                              'border-gold';

  return (
    <div className={`relative border ${base} p-8 flex flex-col ${featured ? 'lg:-mt-6 lg:mb-[-24px] lg:z-10' : ''}`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-paper px-3 py-1 font-mono text-[9px] tracking-[0.3em] uppercase">
          ● {isKr ? '권장' : 'Recommended'} ●
        </div>
      )}

      {/* inner ceremonial frame */}
      <div className={`absolute inset-2 border ${accentBorder} pointer-events-none opacity-${featured ? '100' : '40'}`}/>

      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <div className={`font-mono text-[10px] tracking-[0.3em] uppercase ${tier.accent === 'gold' ? 'text-goldlt' : 'text-ash'}`}>
              {isKr ? '등급' : 'Tier'} {['I','II','III'][idx]}
            </div>
            <h3 className={`mt-2 ${isKr ? 'font-kr font-medium text-4xl' : 'font-serif text-5xl'} leading-none`}>
              {tier.name}
            </h3>
            <div className={`mt-1 ${isKr ? 'font-serif italic' : 'font-kr'} text-sm ${tier.accent === 'gold' ? 'text-goldlt/80' : 'text-ash'}`}>
              {tier.nameKr}
            </div>
          </div>
          <div className="w-10 h-10 border border-current flex items-center justify-center">
            {idx === 0 && <LucideIcon name="flame" size={18} className="opacity-70"/>}
            {idx === 1 && <LucideIcon name="shield" size={18} className="opacity-80"/>}
            {idx === 2 && <LucideIcon name="sparkles" size={18} className="opacity-80"/>}
          </div>
        </div>

        <div className={`h-px my-6 ${tier.accent === 'gold' ? 'bg-goldlt/40' : 'bg-ink/20'}`}/>

        <div className="flex items-baseline gap-2">
          <span className={`font-serif ${featured ? 'text-goldlt' : 'text-ink'} text-7xl leading-none tabular-nums`}>
            {tier.price}
          </span>
          <span className={`font-mono text-xs tracking-[0.2em] uppercase ${tier.accent === 'gold' ? 'text-paper/60' : 'text-ash'}`}>
            {tier.unit}
          </span>
        </div>
        <div className={`mt-2 font-mono text-[10px] tracking-[0.28em] uppercase ${tier.accent === 'gold' ? 'text-goldlt' : 'text-gold'}`}>
          {tier.tag}
        </div>

        <ul className="mt-8 space-y-3 flex-1">
          {tier.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className={`mt-[6px] inline-block w-3 h-px ${tier.accent === 'gold' ? 'bg-goldlt' : 'bg-gold'}`}/>
              <span className={`${isKr ? 'font-kr' : 'font-serif text-lg'} leading-snug ${tier.accent === 'gold' ? 'text-paper/90' : 'text-ink/85'}`}>
                {b}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className={`mt-10 inline-flex items-center justify-center gap-3 w-full py-4 font-mono text-[11px] tracking-[0.28em] uppercase border transition-colors ${
            tier.accent === 'gold'
              ? 'bg-goldlt text-ink border-goldlt hover:bg-paper'
              : tier.accent === 'sage'
              ? 'border-sagedk text-sagedk hover:bg-sagedk hover:text-paper'
              : 'border-ink text-ink hover:bg-ink hover:text-paper'
          }`}
        >
          <span className="w-2 h-2 rounded-full" style={{background: tier.accent === 'gold' ? '#B08934' : tier.accent === 'sage' ? '#6B7E5E' : '#1A1815'}}/>
          {tier.cta}
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

function Pricing({ t, lang }) {
  const isKr = lang === 'kr';
  return (
    <section id="pricing" className="parch-grain border-b border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-5 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-gold"/>
            <span className="w-1.5 h-1.5 rounded-full bg-gold"/>
            {t.pricing.eyebrow}
            <span className="w-1.5 h-1.5 rounded-full bg-gold"/>
            <span className="w-8 h-px bg-gold"/>
          </div>
          <h2 className={`text-ink ${isKr ? 'font-kr font-medium text-5xl leading-[1.15]' : 'font-serif text-6xl leading-[0.95] tracking-[-0.02em]'}`}>
            <em className="text-gold not-italic">{t.pricing.title}</em>
          </h2>
          <p className={`mt-5 ${isKr ? 'font-kr text-lg leading-[1.7]' : 'font-serif italic text-xl'} text-ash`}>
            {t.pricing.sub}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {t.pricing.tiers.map((tier, i) => (
            <Tier key={i} tier={tier} idx={i} isKr={isKr}/>
          ))}
        </div>

        {/* Watermark demo strip */}
        <WatermarkStrip isKr={isKr}/>

        <p className={`mt-10 text-center font-mono text-[11px] tracking-[0.25em] uppercase text-ash`}>
          {t.pricing.footnote}
        </p>
      </div>
    </section>
  );
}

function WatermarkStrip({ isKr }) {
  return (
    <div className="mt-16 border border-ink bg-paper relative overflow-hidden">
      <div className="absolute inset-0 watermark-scan pointer-events-none"/>
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch relative">
        <div className="md:col-span-5 p-6 border-b md:border-b-0 md:border-r border-ink">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            {isKr ? '워터마크 미리보기' : 'Watermark preview'}
          </div>
          <p className={`${isKr ? 'font-kr text-base leading-[1.7]' : 'font-serif text-xl leading-[1.45]'} text-ink/85`}>
            {isKr
              ? 'Canonization 티어는 모든 배포 문서에 투명성 배지를 자동 삽입합니다. 투명성은 기능입니다.'
              : 'The Canonization tier auto-injects an ethical transparency badge on every deployment artifact. Transparency is a feature.'}
          </p>
        </div>
        <div className="md:col-span-7 p-6 font-mono text-[11px] relative break-words">
          <div className="text-ash tracking-[0.2em] uppercase mb-2">$ curl -I halus.example.com</div>
          <div className="text-ink/80 leading-relaxed">
            <div><span className="text-gold">X-Halus-Status:</span> verified</div>
            <div><span className="text-gold">X-Ethical-Surface:</span> clean</div>
            <div><span className="text-gold">X-Narrative-Version:</span> 2.14.0</div>
            <div><span className="text-gold">X-Attribution-Chain:</span> complete</div>
            <div><span className="text-gold">X-Contact:</span> ethics@halus.dev</div>
          </div>
          <div className="absolute right-6 bottom-4 font-serif italic text-gold/70 text-3xl rotate-[-6deg] select-none">
            ethically reviewed
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Pricing });
