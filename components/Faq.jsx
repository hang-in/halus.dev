function Faq({ t, lang }) {
  const isKr = lang === 'kr';
  
  return (
    <section className="py-24 md:py-32 border-b border-ink/10 relative overflow-hidden bg-paper">
      <div className="absolute inset-0 pointer-events-none watermark-scan opacity-20"/>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <span className={`inline-block mb-4 text-ash ${isKr ? 'font-kr text-[11px]' : 'font-mono text-[10px] tracking-[0.2em] uppercase'}`}>
              {t.faq.eyebrow}
            </span>
            <h2 className={`text-ink ${isKr ? 'font-kr font-light tracking-tight text-4xl' : 'font-serif text-5xl'} mb-6`}>
              {t.faq.title}
            </h2>
            <div className="w-12 h-px bg-gold/50 mb-0 hidden lg:block"></div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="border-t border-ink/20">
              {t.faq.items.map((item, i) => (
                <div key={i} className="group border-b border-ink/20 hover:border-ink/40 transition-colors">
                  <details className="w-full">
                    <summary className={`w-full py-6 flex items-center justify-between cursor-pointer list-none ${isKr ? 'font-kr text-xl leading-snug' : 'font-serif text-2xl'} text-ink/90 group-hover:text-ink transition-colors`}>
                      <span>{item.q}</span>
                      <span className="text-gold/60 group-hover:text-gold transition-colors ml-4 shrink-0 font-mono text-xl leading-none">
                        +
                      </span>
                    </summary>
                    <div className="pb-8 pr-8">
                      <p className={`text-ash ${isKr ? 'font-kr text-base leading-[1.8]' : 'font-serif text-[19px] leading-[1.6]'}`}>
                        {item.a}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            {/* Custom style to hide the default exact triangle icon in summary for webkit/firefox */}
            <style dangerouslySetInnerHTML={{__html: `
              details > summary::-webkit-details-marker { display: none; }
              details[open] > summary > span:last-child { transform: rotate(45deg); display: inline-block; transition: transform 0.2s; }
              details > summary > span:last-child { display: inline-block; transition: transform 0.2s; }
            `}} />
          </div>
        </div>
      </div>
    </section>
  );
}
