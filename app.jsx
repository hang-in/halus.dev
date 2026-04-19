// app.jsx — root, with mock routing

function HomeView({ t, lang }) {
  return (
    <>
      <Hero t={t} lang={lang}/>
      <Features t={t} lang={lang}/>
      <Pricing t={t} lang={lang}/>
      <Testimonials t={t} lang={lang}/>
    </>
  );
}

function App() {
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem('halus:lang') || 'en'; } catch { return 'en'; }
  });
  const [view, setView] = React.useState(() => {
    try { return localStorage.getItem('halus:view') || 'home'; } catch { return 'home'; }
  });

  React.useEffect(() => {
    try { localStorage.setItem('halus:lang', lang); } catch {}
    document.documentElement.lang = lang === 'kr' ? 'ko' : 'en';
  }, [lang]);
  React.useEffect(() => {
    try { localStorage.setItem('halus:view', view); } catch {}
  }, [view]);

  const t = COPY[lang];

  let body;
  switch (view) {
    case 'scripture':    body = <ScriptureView t={t} lang={lang}/>; break;
    case 'gospel':       body = <GospelView t={t} lang={lang}/>; break;
    case 'confessional': body = <ConfessionalView t={t} lang={lang}/>; break;
    case 'home':
    default:             body = <HomeView t={t} lang={lang}/>;
  }

  return (
    <div className="min-h-screen">
      <StatusBar t={t} lang={lang} setLang={setLang}/>
      <Nav t={t} lang={lang} view={view} setView={setView}/>
      <main>{body}</main>
      <Footer t={t} lang={lang} setView={setView}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
