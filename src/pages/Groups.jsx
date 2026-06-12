import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const groups = [
  {
    age: '2–3 yosh',
    title: 'Kichkintoylar guruhi',
    icon: 'fas fa-baby',
    color: '#FF6B35',
    bg: 'linear-gradient(135deg, #FFF5EE, #FFF0E5)',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800',
    fallback: 'https://placehold.co/800x400/FF6B35/white?text=Kichkintoylar+Guruhi',
    items: [
      "Ranglar va shakllar bilan tanishuv",
      "Oddiy qo'shiqlar va ertaklar tinglash",
      "Faol o'yinlar va motorik mashqlar",
      "Ijodiy chizish va loy bilan ishlash",
      "Ijtimoiy ko'nikmalar — do'stlik, ulashish"
    ],
    schedule: [
      { time: '08:00 - 09:00', desc: "Qabul qilish va erkin o'yin", icon: 'fas fa-hand-wave' },
      { time: '09:00 - 09:30', desc: 'Nonushta', icon: 'fas fa-utensils' },
      { time: '09:30 - 11:00', desc: "Rivojlantiruvchi mashg'ulotlar", icon: 'fas fa-brain' },
      { time: '11:00 - 12:00', desc: "Sayr va ochiq o'yinlar", icon: 'fas fa-tree' },
      { time: '12:00 - 13:00', desc: 'Tushlik va dam olish', icon: 'fas fa-utensils' },
      { time: '13:00 - 15:00', desc: 'Kunduzgi uyqu', icon: 'fas fa-bed' },
      { time: '15:00 - 16:00', desc: "Peshindan keyingi mashg'ulotlar", icon: 'fas fa-palette' },
      { time: '16:00 - 18:00', desc: "O'yin va kutib olish", icon: 'fas fa-gamepad' }
    ],
    delay: 0,
    number: '01'
  },
  {
    age: '4–5 yosh',
    title: "O'rta guruh",
    icon: 'fas fa-child',
    color: '#4ECDC4',
    bg: 'linear-gradient(135deg, #E8FFF8, #D6F5F3)',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
    fallback: "https://placehold.co/800x400/4ECDC4/white?text=O'rta+Guruh",
    items: [
      "Raqamlar va harflarni o'rganish",
      "Qo'shiq, raqs va tasviriy san'at",
      "Qiziqarli tajribalar va guruh ishi",
      "Hikoya va ertak aytib berish",
      "Ingliz tiliga kirish — oddiy so'zlar va raqamlar"
    ],
    schedule: [
      { time: '08:00 - 09:00', desc: 'Qabul qilish', icon: 'fas fa-hand-wave' },
      { time: '09:00 - 09:30', desc: 'Nonushta', icon: 'fas fa-utensils' },
      { time: "09:30 - 11:30", desc: "Darslar (matematika, o'qish, ingliz tili)", icon: 'fas fa-chalkboard' },
      { time: '11:30 - 12:30', desc: 'Sayr va jismoniy faoliyat', icon: 'fas fa-tree' },
      { time: '12:30 - 13:30', desc: 'Tushlik', icon: 'fas fa-utensils' },
      { time: '13:30 - 15:00', desc: 'Tinch vaqt', icon: 'fas fa-book' },
      { time: '15:00 - 16:30', desc: "Ijodiy mashg'ulotlar", icon: 'fas fa-palette' },
      { time: '16:30 - 18:00', desc: "O'yin va kutib olish", icon: 'fas fa-gamepad' }
    ],
    delay: 0.1,
    number: '02'
  },
  {
    age: '6–7 yosh',
    title: 'Katta guruh — Maktabga tayyorlov',
    icon: 'fas fa-graduation-cap',
    color: '#A855F7',
    bg: 'linear-gradient(135deg, #F5E8FF, #EDD6F5)',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    fallback: 'https://placehold.co/800x400/A855F7/white?text=Katta+Guruh',
    items: [
      "O'qish va yozishga tayyorlov",
      "Ingliz tili — gaplar, suhbat",
      "Matematika asoslari va mantiqiy fikrlash",
      "Ijodiy loyihalar va mustaqil fikrlash",
      "Maktab tartibiga ko'niktirish"
    ],
    schedule: [
      { time: '08:00 - 09:00', desc: 'Qabul qilish', icon: 'fas fa-hand-wave' },
      { time: '09:00 - 09:30', desc: 'Nonushta', icon: 'fas fa-utensils' },
      { time: '09:30 - 12:00', desc: "Intensiv darslar", icon: 'fas fa-chalkboard-user' },
      { time: '12:00 - 13:00', desc: "Sayr va sport o'yinlari", icon: 'fas fa-futbol' },
      { time: '13:00 - 14:00', desc: 'Tushlik', icon: 'fas fa-utensils' },
      { time: "14:00 - 15:30", desc: "Mustaqil o'qish va uy vazifasi", icon: 'fas fa-book-reader' },
      { time: "15:30 - 16:30", desc: "To'garaklar (shaxmat, robototexnika)", icon: 'fas fa-chess' },
      { time: '16:30 - 18:00', desc: "O'yin va kutib olish", icon: 'fas fa-gamepad' }
    ],
    delay: 0.2,
    number: '03'
  }
];

const stats = [
  { icon: 'fas fa-users', number: 3, label: 'YOSH GURUHLARI', color: '#FF6B35' },
  { icon: 'fas fa-chalkboard-user', number: 8, label: 'TARBIYACHILAR', color: '#4ECDC4' },
  { icon: 'fas fa-calendar-alt', number: 10, label: "KUNLIK MASHG'ULOTLAR", color: '#A855F7' },
  { icon: 'fas fa-smile', number: 95, label: 'OTA-ONALAR MAMNUNIYATI', color: '#22C55E' }
];

export default function Groups() {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.group-card-premium, .stat-card-group');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stats = document.querySelectorAll('.stat-number-group');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        let current = 0;
        const increment = target / 50;
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target;
            clearInterval(interval);
          } else {
            el.textContent = Math.floor(current);
          }
        }, 30);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    stats.forEach(stat => observer.observe(stat));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="groups-hero-premium">
        <div className="hero-particles-group">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle-g" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 20}, 80%, 60%)`
            }}></div>
          ))}
        </div>
        
        <div className="group-shapes">
          <div className="group-shape gs1"></div>
          <div className="group-shape gs2"></div>
          <div className="group-shape gs3"></div>
          <div className="group-shape gs4"></div>
          <div className="group-shape gs5"></div>
        </div>
        
        <div className="hero-content-group">
          <div className="floating-group-icons">
            <div className="group-icon-hero gi1"><i className="fas fa-baby"></i><span className="pulse-g"></span></div>
            <div className="group-icon-hero gi2"><i className="fas fa-child"></i><span className="pulse-g"></span></div>
            <div className="group-icon-hero gi3"><i className="fas fa-graduation-cap"></i><span className="pulse-g"></span></div>
            <div className="group-icon-hero gi4"><i className="fas fa-book-open"></i><span className="pulse-g"></span></div>
            <div className="group-icon-hero gi5"><i className="fas fa-palette"></i><span className="pulse-g"></span></div>
          </div>
          <h1 className="group-title"><span className="title-gradient-g">Guruhlar va Darslar</span></h1>
          <div className="title-decoration-g">
            <span className="deco-line-g"></span>
            <i className="fas fa-star"></i>
            <span className="deco-line-g"></span>
          </div>
          <p className="group-subtitle">Har bir yosh guruhiga mos maxsus dastur va tarbiyachilar</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="group-stats-section">
        <div className="container">
          <div className="stats-header-group">
            <span className="stats-badge-group">📊 Raqamlarda biz</span>
            <h2 className="stats-title-group">Bizning ko'rsatkichlarimiz</h2>
            <div className="stats-line-group">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="stats-grid-group">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="stat-card-group" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="stat-icon-group" style={{ background: `${stat.color}15` }}>
                  <i className={stat.icon} style={{ color: stat.color }}></i>
                </div>
                <div className="stat-number-group" data-target={stat.number}>0</div>
                <div className="stat-label-group">{stat.label}</div>
                <div className="stat-glow-group" style={{ background: stat.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Groups Cards */}
      <section className="groups-cards-section">
        <div className="container">
          <div className="groups-header">
            <span className="groups-badge">👶 Guruhlarimiz</span>
            <h2 className="groups-title">Yosh guruhlari</h2>
            <div className="groups-line">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="groups-cards-grid">
            {groups.map((group, idx) => (
              <div 
                key={group.title} 
                className="group-card-premium"
                style={{ background: group.bg, transitionDelay: `${group.delay}s` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="group-card-header" style={{ borderBottomColor: `${group.color}30` }}>
                  <div className="group-age-badge" style={{ background: group.color }}>
                    <i className={group.icon}></i> {group.age}
                  </div>
                  <div className="group-number">{group.number}</div>
                </div>
                
                {/* Sarlavha - faqat bir marta */}
                <h3 style={{ color: group.color }}>{group.title}</h3>
                
                <div className="group-image-wrapper">
                  <img src={group.image} alt={group.title} className="group-image" 
                    onError={(e) => { e.currentTarget.src = group.fallback; }} />
                  <div className="image-overlay-group" style={{ background: `linear-gradient(135deg, ${group.color}20, transparent)` }}></div>
                </div>
                
                <div className="group-info-section">
                  <div className="info-title">
                    <i className="fas fa-check-circle" style={{ color: group.color }}></i>
                    <span>Guruh dasturi</span>
                  </div>
                  <ul className="group-items-list">
                    {group.items.map((item, i) => (
                      <li key={i}>
                        <i className="fas fa-check" style={{ color: group.color }}></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="group-schedule-section">
                  <div className="info-title">
                    <i className="fas fa-calendar-day" style={{ color: group.color }}></i>
                    <span>Kunlik tartib</span>
                  </div>
                  <div className="schedule-list">
                    {group.schedule.map((item, i) => (
                      <div key={i} className="schedule-item">
                        <div className="schedule-time" style={{ color: group.color }}>
                          <i className={item.icon}></i> {item.time}
                        </div>
                        <div className="schedule-desc">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="group-hover-line" style={{ background: group.color }}></div>
                {hoveredCard === idx && <div className="card-ripple" style={{ background: `radial-gradient(circle, ${group.color}20, transparent 70%)` }}></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="groups-cta-section">
        <div className="container">
          <div className="cta-wrapper-g">
            <div className="cta-float-icons-g">
              <i className="fas fa-question-circle"></i>
              <i className="fas fa-comment-dots"></i>
              <i className="fas fa-headset"></i>
            </div>
            <h2>Farzandingiz qaysi guruhga mos?</h2>
            <p>Biz bilan bog'laning va bepul maslahat oling!</p>
            <Link to="/contact" className="cta-group-btn">
              Bog'lanish <i className="fas fa-arrow-right"></i>
              <span className="btn-shine-g"></span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ========== GROUPS PAGE PREMIUM STYLES ========== */
        
        /* Hero Section */
        .groups-hero-premium {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 120px 24px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-particles-group .particle-g {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
          animation: floatParticleG 10s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes floatParticleG {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-60px) translateX(40px); }
        }
        
        .group-shapes .group-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          filter: blur(40px);
        }
        .gs1 { width: 450px; height: 450px; background: #FF6B35; top: -120px; left: -120px; }
        .gs2 { width: 380px; height: 380px; background: #4ECDC4; bottom: -100px; right: -100px; }
        .gs3 { width: 300px; height: 300px; background: #A855F7; top: 50%; left: 20%; }
        .gs4 { width: 250px; height: 250px; background: #22C55E; bottom: 20%; right: 15%; }
        .gs5 { width: 200px; height: 200px; background: #FFE66D; top: 20%; left: 30%; }
        
        .floating-group-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .group-icon-hero {
          position: relative;
          width: 70px;
          height: 70px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          animation: floatIconG 3s ease-in-out infinite;
        }
        .gi1 { animation-delay: 0s; }
        .gi2 { animation-delay: 0.15s; }
        .gi3 { animation-delay: 0.3s; }
        .gi4 { animation-delay: 0.45s; }
        .gi5 { animation-delay: 0.6s; }
        
        @keyframes floatIconG {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .pulse-g {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 22px;
          animation: pulseRingG 2s infinite;
          pointer-events: none;
        }
        
        @keyframes pulseRingG {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          70% { box-shadow: 0 0 0 15px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        
        .group-title {
          margin-bottom: 20px;
        }
        .title-gradient-g {
          font-size: 52px;
          font-weight: 900;
          background: linear-gradient(135deg, #fff, #FF6B35, #4ECDC4, #fff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: titleGradientG 4s ease infinite;
        }
        
        @keyframes titleGradientG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .title-decoration-g {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        .deco-line-g {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FF6B35, #4ECDC4, transparent);
        }
        .title-decoration-g i {
          color: #FF6B35;
          font-size: 16px;
          animation: iconRotateG 3s linear infinite;
        }
        @keyframes iconRotateG {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .group-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Statistics Section */
        .group-stats-section {
          padding: 70px 0;
          background: #FFFBF5;
        }
        
        .stats-header-group {
          text-align: center;
          margin-bottom: 50px;
        }
        .stats-badge-group {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
          padding: 5px 18px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 15px;
        }
        .stats-title-group {
          font-size: 36px;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 15px;
        }
        .stats-line-group {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .stats-line-group span {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #A855F7);
          border-radius: 3px;
        }
        .stats-line-group span:nth-child(2) { width: 60px; }
        
        .stats-grid-group {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }
        .stat-card-group {
          background: white;
          padding: 30px 20px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
        }
        .stat-card-group.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .stat-card-group:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        
        .stat-icon-group {
          width: 65px;
          height: 65px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
        }
        .stat-icon-group i { font-size: 28px; }
        
        .stat-number-group {
          font-size: 42px;
          font-weight: 800;
          color: #FF6B35;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 5px;
        }
        .stat-label-group {
          font-size: 13px;
          color: #6B7280;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .stat-glow-group {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .stat-card-group:hover .stat-glow-group { transform: scaleX(1); }
        
        /* Groups Cards */
        .groups-cards-section {
          padding: 80px 0;
          background: white;
        }
        
        .groups-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .groups-badge {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #A855F7);
          color: white;
          padding: 5px 18px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 15px;
        }
        .groups-title {
          font-size: 36px;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 15px;
        }
        .groups-line {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .groups-line span {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #A855F7);
          border-radius: 3px;
        }
        .groups-line span:nth-child(2) { width: 60px; }
        
        .groups-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 35px;
        }
        .group-card-premium {
          border-radius: 32px;
          padding: 30px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
        }
        .group-card-premium.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .group-card-premium:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.12);
        }
        
        .group-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid;
        }
        .group-age-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          color: white;
        }
        .group-number {
          font-size: 32px;
          font-weight: 800;
          color: rgba(0,0,0,0.06);
          font-family: 'Baloo 2', cursive;
        }
        
        /* Sarlavha - bir marta, to'g'ri joylashgan */
        .group-card-premium h3 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        
        .group-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .group-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .group-card-premium:hover .group-image {
          transform: scale(1.05);
        }
        .image-overlay-group {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        .group-info-section, .group-schedule-section {
          margin-bottom: 20px;
        }
        .info-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .info-title i { font-size: 20px; }
        
        .group-items-list {
          list-style: none;
          padding: 0;
        }
        .group-items-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px dashed #F0E6D3;
        }
        .group-items-list li:last-child {
          border-bottom: none;
        }
        .group-items-list li i {
          font-size: 14px;
          width: 20px;
        }
        
        .schedule-list {
          background: rgba(0,0,0,0.02);
          border-radius: 16px;
          padding: 12px;
        }
        .schedule-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .schedule-item:last-child {
          border-bottom: none;
        }
        .schedule-time {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 14px;
        }
        .schedule-desc {
          font-size: 14px;
          color: #6B7280;
        }
        
        .group-hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .group-card-premium:hover .group-hover-line {
          transform: scaleX(1);
        }
        
        .card-ripple {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .group-card-premium:hover .card-ripple {
          opacity: 1;
        }
        
        /* CTA Section */
        .groups-cta-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 70px 0;
          text-align: center;
        }
        .cta-wrapper-g {
          text-align: center;
        }
        .cta-float-icons-g {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-bottom: 25px;
        }
        .cta-float-icons-g i {
          font-size: 35px;
          color: white;
          animation: floatIconCtaG 3s infinite;
        }
        .cta-float-icons-g i:nth-child(1) { animation-delay: 0s; }
        .cta-float-icons-g i:nth-child(2) { animation-delay: 0.5s; }
        .cta-float-icons-g i:nth-child(3) { animation-delay: 1s; }
        @keyframes floatIconCtaG {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cta-wrapper-g h2 {
          font-size: 36px;
          color: white;
          margin-bottom: 15px;
        }
        .cta-wrapper-g p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
        }
        .cta-group-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: #764ba2;
          padding: 16px 40px;
          border-radius: 60px;
          font-weight: 700;
          text-decoration: none;
          overflow: hidden;
        }
        .cta-group-btn:hover {
          gap: 15px;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .btn-shine-g {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }
        .cta-group-btn:hover .btn-shine-g { left: 100%; }
        
        @media (max-width: 1024px) {
          .groups-cards-grid {
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          }
        }
        
        @media (max-width: 900px) {
          .title-gradient-g { font-size: 38px; }
          .group-icon-hero { width: 55px; height: 55px; font-size: 24px; }
          .floating-group-icons { gap: 12px; }
          .groups-cards-grid { gap: 25px; }
          .group-card-premium { padding: 25px; }
          .stats-title-group, .groups-title { font-size: 28px; }
          .group-number { font-size: 28px; }
          .group-card-premium h3 { font-size: 20px; }
        }
        
        @media (max-width: 600px) {
          .group-image { height: 180px; }
          .schedule-item { flex-direction: column; align-items: flex-start; gap: 5px; }
        }
        
        @media (max-width: 480px) {
          .title-gradient-g { font-size: 28px; }
          .group-icon-hero { width: 45px; height: 45px; font-size: 20px; }
          .groups-cards-grid { grid-template-columns: 1fr; }
          .stat-number-group { font-size: 32px; }
          .group-number { font-size: 24px; }
        }
      `}</style>
    </>
  );
}