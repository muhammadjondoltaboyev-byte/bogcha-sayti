import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: 'fas fa-smile', number: 500, label: 'Baxtli bolalar', color: '#FF6B35', bg: 'linear-gradient(135deg, #FFE8D6, #FFF5E6)' },
  { icon: 'fas fa-chalkboard-user', number: 10, label: 'Tajribali pedagoglar', color: '#4ECDC4', bg: 'linear-gradient(135deg, #D6F5F3, #E8FFF8)' },
  { icon: 'fas fa-calendar-alt', number: 10, label: 'Yillik tajriba', color: '#A855F7', bg: 'linear-gradient(135deg, #EDD6F5, #F5E8FF)' },
  { icon: 'fas fa-trophy', number: 15, label: 'Mukofotlar', color: '#FFE66D', bg: 'linear-gradient(135deg, #FEF3C7, #FFFBEB)' }
];

const values = [
  { icon: 'fas fa-heart', title: "Mehr va e'tibor", desc: 'Har bir bolaga individual yondashuv', color: '#FF6B35', delay: 0 },
  { icon: 'fas fa-graduation-cap', title: "Bilim va o'sish", desc: "Zamonaviy ta'lim dasturlari", color: '#4ECDC4', delay: 0.1 },
  { icon: 'fas fa-paintbrush', title: 'Ijodkorlik', desc: "Ijodiy qobiliyatlarni rivojlantirish", color: '#A855F7', delay: 0.2 },
  { icon: 'fas fa-shield-alt', title: 'Xavfsiz muhit', desc: '24/7 kuzatuv va xavfsizlik', color: '#22C55E', delay: 0.3 }
];

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll animation for elements
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Counter animation for stats
  useEffect(() => {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
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

  // Parallax mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const shapes = document.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.015;
        const x = (e.clientX - window.innerWidth / 2) * speed;
        const y = (e.clientY - window.innerHeight / 2) * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Hero Section - Premium */}
      <section className="about-hero-premium">
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `hsl(${Math.random() * 60 + 20}, 80%, 60%)`
            }}></div>
          ))}
        </div>
        
        <div className="floating-shapes">
          <div className="floating-shape shape-a"></div>
          <div className="floating-shape shape-b"></div>
          <div className="floating-shape shape-c"></div>
          <div className="floating-shape shape-d"></div>
          <div className="floating-shape shape-e"></div>
        </div>
        
        <div className="hero-content-center">
          <div className="floating-icons-group">
            <div className="hero-icon icon-1"><i className="fas fa-school"></i><span className="pulse"></span></div>
            <div className="hero-icon icon-2"><i className="fas fa-child"></i><span className="pulse"></span></div>
            <div className="hero-icon icon-3"><i className="fas fa-apple-alt"></i><span className="pulse"></span></div>
            <div className="hero-icon icon-4"><i className="fas fa-star"></i><span className="pulse"></span></div>
            <div className="hero-icon icon-5"><i className="fas fa-heart"></i><span className="pulse"></span></div>
          </div>
          <h1 className="premium-title">
            <span className="title-gradient">Biz haqimizda</span>
          </h1>
          <div className="title-decoration">
            <span className="decoration-line"></span>
            <i className="fas fa-star"></i>
            <span className="decoration-line"></span>
          </div>
          <p className="hero-description">Bolalaringizni sevgi va bilim bilan tarbiyalovchi bog'cha</p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content-premium">
        <div className="container">
          {/* About Text and Image */}
          <div className="about-grid-premium">
            <div className="about-text-box animate-on-scroll">
              <div className="section-tag">Biz haqimizda</div>
              <h2>Quvnoq Bolajonlar — bu kim?</h2>
              <p><strong>Quvnoq Bolajonlar</strong> — mehrga to'la va xavfsiz muhitda bolalarning har tomonlama rivojlanishini ta'minlaydigan xususiy bolalar bog'chasi. Bizning asosiy maqsadimiz — har bir bolani quvnoq, sog'lom va bilimli qilish!</p>
              <p>Bizda zamonaviy o'quv dasturlari, malakali tarbiyachilar va ijodiy mashg'ulotlar mavjud. Bolajonlarimiz har kuni yangi narsalarni o'rganadi, o'yin orqali rivojlanadi va o'z qobiliyatlarini namoyon etishadi.</p>
              <div className="about-stats-mini">
                <div className="mini-stat"><span>500+</span><span>Baxtli bolalar</span></div>
                <div className="mini-stat"><span>10+</span><span>Yillik tajriba</span></div>
                <div className="mini-stat"><span>6+</span><span>Malakali tarbiyachi</span></div>
              </div>
            </div>
            <div className="about-image-box animate-on-scroll">
              <div className="image-wrapper-premium">
                <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600" alt="Bog'cha" />
                <div className="image-overlay-premium">
                  <div className="play-icon"><i className="fas fa-play"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section - TUZATILGAN */}
          <div className="values-premium-section">
            <div className="section-header-center animate-on-scroll">
              <span className="section-badge-gradient">Qadriyatlarimiz</span>
              <h2 className="section-title-premium">Bizning asosiy tamoyillarimiz</h2>
              <div className="section-line">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="values-grid-premium">
              {values.map((value, idx) => (
                <div 
                  key={value.title} 
                  className="value-card-premium animate-on-scroll"
                  style={{ transitionDelay: `${value.delay}s` }}
                >
                  <div className="value-icon-premium" style={{ background: `${value.color}15` }}>
                    <i className={value.icon} style={{ color: value.color }}></i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                  <div className="value-hover-line" style={{ background: value.color }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="stats-premium-section">
            <div className="section-header-center animate-on-scroll">
              <span className="section-badge-gradient">Raqamlarda biz</span>
              <h2 className="section-title-premium">Bizning yutuqlarimiz</h2>
              <div className="section-line">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="stats-grid-premium">
              {stats.map((stat, idx) => (
                <div key={stat.label} className="stat-card-premium animate-on-scroll" style={{ background: stat.bg, transitionDelay: `${idx * 0.1}s` }}>
                  <div className="stat-icon-premium" style={{ background: `${stat.color}15` }}>
                    <i className={stat.icon} style={{ color: stat.color }}></i>
                  </div>
                  <div className="stat-number" data-target={stat.number}>0</div>
                  <div className="stat-label-premium">{stat.label}</div>
                  <div className="stat-glow" style={{ background: stat.color }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mission-vision-premium">
            <div className="mission-card animate-on-scroll">
              <div className="card-icon-circle">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Bizning maqsadimiz</h3>
              <p>Har bir bolaning individual qobiliyatlarini rivojlantirish, ularni maktabga va kelajakdagi hayotga tayyorlash.</p>
              <div className="card-decoration"></div>
            </div>
            <div className="vision-card animate-on-scroll">
              <div className="card-icon-circle">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Bizning orzuyimiz</h3>
              <p>O'zbekistondagi eng yaxshi xususiy bog'cha sifatida tan olinib, har bir bolaga sifatli ta'lim olish imkoniyatini yaratish.</p>
              <div className="card-decoration"></div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="info-cards-premium">
            <div className="info-card-premium animate-on-scroll">
              <div className="info-icon-circle"><i className="fas fa-map-marker-alt"></i></div>
              <h3>Manzil</h3>
              <p>Farg'ona viloyati, Dang'ara tumani, G'umoyli ko'chasi 12-uy</p>
            </div>
            <div className="info-card-premium animate-on-scroll">
              <div className="info-icon-circle"><i className="fas fa-clock"></i></div>
              <h3>Ish vaqti</h3>
              <p>Dushanba – Juma, 08:00 – 18:00</p>
            </div>
            <div className="info-card-premium animate-on-scroll">
              <div className="info-icon-circle"><i className="fas fa-phone-alt"></i></div>
              <h3>Bog'lanish</h3>
              <p>+998 91 685 16 85<br />@Muhammadjon_85</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner-about">
        <div className="container">
          <div className="cta-content-about">
            <div className="cta-icons">
              <i className="fas fa-building"></i>
              <i className="fas fa-smile"></i>
              <i className="fas fa-heart"></i>
            </div>
            <h2>Bog'chamizni ko'rishni xohlaysizmi?</h2>
            <p>Biz bilan bog'laning va bepul ko'rik uchun tashrif buyuring!</p>
            <Link to="/contact" className="cta-btn-about">Bog'lanish <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ========== ABOUT PAGE PREMIUM STYLES ========== */
        
        /* Hero Section */
        .about-hero-premium {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 120px 24px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-particles .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
          animation: floatParticleAbout 8s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes floatParticleAbout {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50px) translateX(30px); }
        }
        
        .floating-shapes .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          filter: blur(40px);
          transition: transform 0.3s ease-out;
        }
        .shape-a { width: 400px; height: 400px; background: #FF6B35; top: -100px; left: -100px; }
        .shape-b { width: 350px; height: 350px; background: #4ECDC4; bottom: -80px; right: -80px; }
        .shape-c { width: 300px; height: 300px; background: #A855F7; top: 40%; right: 10%; }
        .shape-d { width: 250px; height: 250px; background: #FFE66D; bottom: 20%; left: 15%; }
        .shape-e { width: 200px; height: 200px; background: #22C55E; top: 20%; left: 25%; }
        
        .floating-icons-group {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 35px;
          flex-wrap: wrap;
        }
        
        .hero-icon {
          position: relative;
          width: 75px;
          height: 75px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          animation: floatIconAbout 3s ease-in-out infinite;
        }
        .icon-1 { animation-delay: 0s; }
        .icon-2 { animation-delay: 0.2s; }
        .icon-3 { animation-delay: 0.4s; }
        .icon-4 { animation-delay: 0.6s; }
        .icon-5 { animation-delay: 0.8s; }
        
        @keyframes floatIconAbout {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 25px;
          animation: pulseRingAbout 2s infinite;
          pointer-events: none;
        }
        
        @keyframes pulseRingAbout {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          70% { box-shadow: 0 0 0 15px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        
        .premium-title {
          margin-bottom: 20px;
        }
        .title-gradient {
          font-size: 56px;
          font-weight: 900;
          background: linear-gradient(135deg, #fff, #FF6B35, #A855F7, #fff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: titleGradient 4s ease infinite;
        }
        
        @keyframes titleGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .title-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        .decoration-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FF6B35, #A855F7, transparent);
        }
        .title-decoration i {
          color: #FF6B35;
          font-size: 14px;
          animation: starRotate 2s linear infinite;
        }
        @keyframes starRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .hero-description {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* About Content */
        .about-content-premium { padding: 80px 0; background: #FFFBF5; }
        
        .about-grid-premium {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }
        
        .section-tag {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
          padding: 5px 18px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 20px;
        }
        
        .about-text-box h2 {
          font-size: 32px;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 20px;
          color: #2D2D2D;
        }
        
        .about-text-box p {
          color: #6B7280;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        
        .about-stats-mini {
          display: flex;
          gap: 20px;
          margin-top: 25px;
        }
        .mini-stat {
          text-align: center;
          padding: 10px 15px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          flex: 1;
        }
        .mini-stat span:first-child {
          display: block;
          font-size: 24px;
          font-weight: 800;
          color: #FF6B35;
        }
        .mini-stat span:last-child {
          font-size: 12px;
          color: #6B7280;
        }
        
        .image-wrapper-premium {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .image-wrapper-premium img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .image-wrapper-premium:hover img { transform: scale(1.05); }
        
        .image-overlay-premium {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .image-wrapper-premium:hover .image-overlay-premium { opacity: 1; }
        .play-icon {
          width: 70px;
          height: 70px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .play-icon i { font-size: 28px; color: #FF6B35; margin-left: 5px; }
        
        /* Section Header */
        .section-header-center { text-align: center; margin-bottom: 50px; }
        .section-badge-gradient {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
          padding: 6px 20px;
          border-radius: 50px;
          font-size: 14px;
          margin-bottom: 15px;
        }
        .section-title-premium {
          font-size: 36px;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 20px;
        }
        .section-line {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .section-line span {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #A855F7);
          border-radius: 3px;
        }
        .section-line span:nth-child(2) { width: 60px; }
        
        /* Values Grid - TUZATILGAN */
        .values-grid-premium {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }
        
        .value-card-premium {
          background: white;
          padding: 35px 25px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          cursor: pointer;
        }
        
        .value-card-premium:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .value-icon-premium {
          width: 75px;
          height: 75px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          transition: all 0.3s ease;
        }
        
        .value-card-premium:hover .value-icon-premium {
          transform: scale(1.1) rotate(5deg);
        }
        
        .value-icon-premium i {
          font-size: 36px;
          transition: all 0.3s ease;
        }
        
        .value-card-premium h3 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }
        
        .value-card-premium p {
          color: #6B7280;
          line-height: 1.6;
          transition: color 0.3s ease;
        }
        
        .value-hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          transform: scaleX(0);
          transition: transform 0.4s ease;
          border-radius: 0 0 24px 24px;
        }
        
        .value-card-premium:hover .value-hover-line {
          transform: scaleX(1);
        }
        
        /* Stats Grid */
        .stats-grid-premium {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
          margin-bottom: 80px;
        }
        .stat-card-premium {
          padding: 30px 20px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .stat-card-premium:hover { transform: translateY(-8px); }
        
        .stat-icon-premium {
          width: 65px;
          height: 65px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
        }
        .stat-icon-premium i { font-size: 28px; }
        
        .stat-number {
          font-size: 42px;
          font-weight: 800;
          color: #FF6B35;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 5px;
        }
        .stat-label-premium {
          font-size: 14px;
          color: #6B7280;
          font-weight: 600;
        }
        .stat-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .stat-card-premium:hover .stat-glow { transform: scaleX(1); }
        
        /* Mission Vision */
        .mission-vision-premium {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }
        .mission-card, .vision-card {
          background: white;
          padding: 40px 30px;
          border-radius: 28px;
          text-align: center;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          cursor: pointer;
        }
        .mission-card:hover, .vision-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        
        .card-icon-circle {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #FFE8D6, #FFD6B0);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .card-icon-circle i { font-size: 40px; color: #FF6B35; }
        
        .mission-card h3, .vision-card h3 { font-size: 24px; margin-bottom: 15px; }
        .mission-card p, .vision-card p { color: #6B7280; line-height: 1.7; }
        
        .card-decoration {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(255,107,53,0.05), transparent);
          border-radius: 50%;
        }
        
        /* Info Cards */
        .info-cards-premium {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .info-card-premium {
          background: white;
          padding: 35px 25px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.4s;
          border: 1px solid #F0E6D3;
          cursor: pointer;
        }
        .info-card-premium:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        
        .info-icon-circle {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .info-icon-circle i { font-size: 32px; color: white; }
        .info-card-premium h3 { font-size: 22px; margin-bottom: 12px; }
        .info-card-premium p { color: #6B7280; line-height: 1.6; }
        
        /* CTA Banner */
        .cta-banner-about {
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 70px 0;
          text-align: center;
        }
        .cta-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        .cta-icons i {
          font-size: 35px;
          color: white;
          animation: floatCtaAbout 3s infinite;
        }
        .cta-icons i:nth-child(1) { animation-delay: 0s; }
        .cta-icons i:nth-child(2) { animation-delay: 0.5s; }
        .cta-icons i:nth-child(3) { animation-delay: 1s; }
        @keyframes floatCtaAbout {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cta-btn-about {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: #764ba2;
          padding: 14px 35px;
          border-radius: 60px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }
        .cta-btn-about:hover { gap: 15px; transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
        
        /* Animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
        }
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (max-width: 900px) {
          .about-grid-premium { grid-template-columns: 1fr; text-align: center; gap: 30px; }
          .about-stats-mini { justify-content: center; }
          .title-gradient { font-size: 40px; }
          .hero-icon { width: 55px; height: 55px; font-size: 24px; }
          .floating-icons-group { gap: 12px; }
          .section-title-premium { font-size: 28px; }
          .values-grid-premium { gap: 20px; }
          .stats-grid-premium { gap: 20px; }
          .mission-vision-premium { gap: 20px; }
          .info-cards-premium { gap: 20px; }
        }
        
        @media (max-width: 480px) {
          .title-gradient { font-size: 32px; }
          .hero-icon { width: 45px; height: 45px; font-size: 20px; }
          .stat-number { font-size: 32px; }
          .about-stats-mini { flex-direction: column; align-items: center; }
          .mini-stat { width: 100%; }
          .values-grid-premium { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}