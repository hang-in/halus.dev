// Ornaments.jsx — decorative vectors used across the page

function Cross({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
      <path d="M5 3h4M5 11h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
    </svg>
  );
}

function Fleuron({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2c0 4-3 6-6 6 3 0 6 2 6 6 0-4 3-6 6-6-3 0-6-2-6-6z" fill="currentColor"/>
      <circle cx="12" cy="12" r="1.2" fill="#FAFAF5"/>
    </svg>
  );
}

function Sunburst({ className = "", rays = 36, inner = 38, outer = 220 }) {
  // Radial rays for hero backdrop
  const items = Array.from({ length: rays }, (_, i) => (i / rays) * 360);
  return (
    <div className={`relative ${className}`} style={{ width: outer * 2, height: outer * 2 }} aria-hidden="true">
      {items.map((deg, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 origin-top"
          style={{
            width: 1,
            height: outer - inner,
            transform: `translateX(-0.5px) translateY(0px) rotate(${deg}deg) translateY(${inner}px)`,
            background: 'linear-gradient(to bottom, rgba(176,137,52,0.55), rgba(176,137,52,0) 85%)',
          }}
        />
      ))}
    </div>
  );
}

function HaloRing({ size = 520, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 520 520" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="haloFill" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="rgba(212,185,112,0)"/>
          <stop offset="85%" stopColor="rgba(212,185,112,0.35)"/>
          <stop offset="100%" stopColor="rgba(212,185,112,0)"/>
        </radialGradient>
      </defs>
      <circle cx="260" cy="260" r="240" fill="url(#haloFill)"/>
      <circle cx="260" cy="260" r="230" fill="none" stroke="#B08934" strokeWidth="0.5"/>
      <circle cx="260" cy="260" r="195" fill="none" stroke="#B08934" strokeWidth="0.3" strokeDasharray="2 4"/>
    </svg>
  );
}

function Divider({ label, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 rule-gold"/>
      <Cross size={12} className="text-gold"/>
      {label && (
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ash">
          {label}
        </span>
      )}
      <Cross size={12} className="text-gold"/>
      <div className="flex-1 rule-gold"/>
    </div>
  );
}

// Roman numeral badge
function RomanBadge({ numeral, className = "" }) {
  return (
    <div className={`inline-flex items-center justify-center w-14 h-14 border border-ink ${className}`}>
      <span className="font-serif italic text-2xl text-ink">{numeral}</span>
    </div>
  );
}

// Lucide icon helper — renders by name after mount
function LucideIcon({ name, size = 16, className = "" }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, 'stroke-width': 1.4 },
      });
    }
  }, [name, size]);
  return <span ref={ref} className={`inline-flex ${className}`} style={{ width: size, height: size }}/>;
}

Object.assign(window, { Cross, Fleuron, Sunburst, HaloRing, Divider, RomanBadge, LucideIcon });
