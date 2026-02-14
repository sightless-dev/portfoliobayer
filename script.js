const { useEffect } = React;

const stats = [
  ['100%+', 'ROI в E-commerce'],
  ['8+', 'GEO рынка'],
  ['$3K+', 'Месячный бюджет'],
];

const about = [
  '4 года в Gambling индустрии',
  '2 года работы с Facebook Ads',
  'Опыт работы в команде и соло',
  'Глубокое понимание модели First Bill (PB)',
  'Сильный бэкграунд в создании gambling креативов',
];

const results = [
  'Стабильно положительный ROI',
  'Распределение бюджета и сплит кампаний',
  'Масштабирование и оптимизация',
  'Тестирование креативов и воронок',
  'Базовая стратегия бюджетирования',
];

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.16 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      document.querySelectorAll('.aurora').forEach((el, i) => {
        const f = (i + 1) * 0.35;
        el.style.transform = `translate(${x * f}px, ${y * f}px)`;
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="bg-layer bg-layer-1"></div>
      <div className="bg-layer bg-layer-2"></div>
      <div className="aurora a1"></div>
      <div className="aurora a2"></div>
      <div className="aurora a3"></div>

      <header className="sticky-top pt-2 px-2 px-md-3">
        <nav className="navbar navbar-expand-lg glass-nav rounded-4 container-lg reveal">
          <div className="container-fluid px-2 px-md-3">
            <a className="navbar-brand text-light fw-semibold fs-5" href="#top">Media Buyer</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
                <li className="nav-item"><a className="nav-link" href="#about">Обо мне</a></li>
                <li className="nav-item"><a className="nav-link" href="#experience">Опыт</a></li>
                <li className="nav-item"><a className="nav-link" href="#skills">Навыки</a></li>
                <li className="nav-item"><a className="nav-link" href="#results">Результаты</a></li>
                <li className="nav-item"><a className="nav-link" href="#contacts">Контакты</a></li>
              </ul>
              <a className="btn btn-accent btn-sm px-3" href="https://t.me/" target="_blank">Связаться</a>
            </div>
          </div>
        </nav>
      </header>

      <main id="top" className="container py-5">
        <section className="text-center hero reveal py-5">
          <span className="badge-pill">Рассматриваю позицию Junior Media Buyer / Помощник баера</span>
          <h1 className="display-3 fw-bold mt-3 mb-2 text-light">Media Buyer <span>Gambling Vertical</span></h1>
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
            <span className="tag">4 года в индустрии</span>
            <span className="tag">2 года Facebook Ads</span>
            <span className="tag">Tier 1-3 GEO</span>
          </div>
          <p className="hero-copy mx-auto mb-4">
            Performance-ориентированный медиабайер с сильным бэкграундом в gambling креативах и модели First Bill (PB). Фокус на масштабируемый, прибыльный трафик.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a className="btn btn-accent px-4 py-2" href="https://t.me/" target="_blank">✈ Написать в Telegram</a>
            <a className="btn btn-outline-light px-4 py-2" href="#about">Узнать больше</a>
          </div>
          <div className="row g-3 g-md-4 mt-4 justify-content-center">
            {stats.map(([value, label]) => (
              <div className="col-10 col-sm-4" key={value}>
                <div className="stat-card">
                  <strong>{value}</strong>
                  <small>{label}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="scroll-icon mt-4">⌄</div>
        </section>

        <section id="about" className="reveal section-space">
          <h2 className="section-title">Обо мне</h2>
          <div className="panel p-4 p-md-5">
            <div className="row g-3">
              {about.map((item) => (
                <div className="col-12 col-md-6" key={item}>
                  <div className="d-flex align-items-start gap-2 item-line">
                    <span className="line-icon">✔</span>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 mb-0 text-secondary-emphasis fs-5">
              Сочетаю креативное мышление с performance-маркетингом. Начинал с управления трафиком и масштабирования кампаний, позже развился в создание gambling креативов.
            </p>
          </div>
        </section>

        <section id="experience" className="reveal section-space">
          <h2 className="section-title">Опыт <span>работы</span></h2>
          <div className="panel p-4 mb-3">
            <h3 className="panel-title">💼 Facebook Ads</h3>
            <p className="mb-3 fs-5">2 года опыта</p>
            <ul className="text-secondary-emphasis mb-3 fs-5">
              <li>Запуск и масштабирование gambling офферов через модель First Bill (PB)</li>
              <li>Работа с арендованными и фармленными аккаунтами</li>
              <li>Опыт работы с Tier 1, Tier 2, Tier 3 GEO</li>
            </ul>
            <div className="geo-grid">
              {['BD','TR','LT','SK','CL','IT','AT','IE'].map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
          <div className="panel p-4">
            <h3 className="panel-title">📈 E-commerce</h3>
            <div className="row g-3 mt-1">
              <div className="col-12 col-md-4"><div className="mini-box">до 100% ROI</div></div>
              <div className="col-12 col-md-4"><div className="mini-box">до $3,000</div></div>
              <div className="col-12 col-md-4"><div className="mini-box">Полный цикл</div></div>
            </div>
          </div>
        </section>

        <section id="results" className="reveal section-space">
          <h2 className="section-title">Результаты и <span>подход</span></h2>
          <div className="row g-3 mb-3">
            {results.map((r) => <div className="col-12 col-md-6 col-lg-4" key={r}><div className="chip-box">{r}</div></div>)}
          </div>
          <div className="panel p-4">
            <p className="text-accent fs-4 fw-semibold mb-3">Понимание:</p>
            <div className="row g-2">
              {['CPA логика','Конверсионный поток','Поведение воронки','Выгорание креативов'].map((i) =>
                <div className="col-12 col-md-6 col-lg-3" key={i}><div className="mini-box">{i}</div></div>
              )}
            </div>
          </div>
        </section>

        <section id="skills" className="reveal section-space">
          <h2 className="section-title">Инструменты и <span>навыки</span></h2>
          <div className="row g-3 mb-3">
            {[
              ['Facebook Ads Manager', 'Полное управление рекламными кампаниями'],
              ['Фарминг аккаунтов', 'Прогрев профилей и подготовка к работе'],
              ['Мониторинг каналов', 'Отслеживание нишевых Telegram каналов'],
              ['Дизайн креативов', '2 года опыта создания gambling креативов'],
            ].map(([t, d]) => (
              <div className="col-12 col-md-6" key={t}>
                <div className="panel p-4 h-100">
                  <h4 className="mb-2 fs-3">🛠 {t}</h4>
                  <p className="mb-0 fs-5">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="panel p-4">
            <h4 className="mb-3 fs-3">Антидетект браузеры</h4>
            <div className="row g-3">
              {['Dolphin', 'Vision', 'OctoBrowser'].map((b) => <div className="col-12 col-md-4" key={b}><div className="mini-box">{b}</div></div>)}
            </div>
          </div>
        </section>

        <section className="reveal section-space">
          <h2 className="section-title"><span>Mindset</span></h2>
          <div className="row g-3">
            {['Быстро обучаюсь','Постоянно развиваюсь','Адаптивен к сложностям','Фокус на результат и рост'].map((m) =>
              <div className="col-12 col-md-6" key={m}><div className="panel p-4 h-100"><p className="mb-0 fs-4">⚡ {m}</p></div></div>
            )}
            <div className="col-12"><div className="panel p-4"><p className="mb-1 fs-4">Командный игрок</p><small>Но способен эффективно работать самостоятельно</small></div></div>
          </div>
        </section>

        <section id="contacts" className="reveal section-space text-center pb-5">
          <span className="badge-pill">Открыт к сотрудничеству</span>
          <h2 className="section-title mt-3">Давайте <span>работать вместе</span></h2>
          <p className="hero-copy mx-auto mb-4">Если вы ищете мотивированного медиабайера с сильным опытом в gambling вертикали — давайте свяжемся.</p>
          <a className="btn btn-accent px-4 py-2" href="https://t.me/" target="_blank">✈ Написать в Telegram</a>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
