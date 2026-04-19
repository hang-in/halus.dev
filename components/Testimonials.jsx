// Testimonials.jsx

function Testimonials({ t, lang }) {
  const isKr = lang === 'kr';
  return (
    <section className="border-b border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-3 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold"/> {t.testimonials.eyebrow}
            </div>
            <h2 className={`${isKr ? 'font-kr font-medium text-4xl' : 'font-serif text-5xl'} leading-[0.95] tracking-[-0.02em]`}>
              {isKr ? <>{t.testimonials.heading_a} <em className="text-gold not-italic">{t.testimonials.heading_b}</em></> : <>{t.testimonials.heading_a} <em className="text-gold not-italic">{t.testimonials.heading_b}</em></>}
            </h2>
          </div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ash max-w-xs">
            {isKr
              ? t.testimonials.note
              : t.testimonials.note}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((it, i) => (
            <figure key={i} className="border border-ink p-7 bg-paper relative">
              <span className="absolute -top-3 left-6 bg-paper px-2 font-serif italic text-gold text-3xl leading-none">“</span>
              <blockquote className={`${isKr ? 'font-kr text-base leading-[1.8]' : 'font-serif italic text-xl leading-[1.45]'} text-ink/90`}>
                {it.quote}
              </blockquote>
              <div className="rule-gold my-5"/>
              <figcaption className="font-mono text-[10px] tracking-[0.25em] uppercase text-ash flex items-center justify-between">
                <span>{it.who}</span>
                <span className="flex gap-[2px] text-gold">
                  {'★★★★★'.split('').map((c, i) => <span key={i}>{c}</span>)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials });
