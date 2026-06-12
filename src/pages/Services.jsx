import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const services = [
  { 
    icon: 'fas fa-clock', 
    title: 'Yarim kunlik guruh', 
    description: "08:00 dan 13:00 gacha. Asosiy mashg'ulotlar, o'yinlar va tushlik ovqat kiradi.", 
    price: '800 000', 
    note: "so'm / oyiga", 
    featured: false,
    color: '#4ECDC4',
    bg: 'linear-gradient(135deg, #E8FFF8, #D6F5F3)',
    delay: 0,
    number: '01'
  },
  { 
    icon: 'fas fa-child', 
    title: "To'liq kunlik qarov", 
    description: "08:00 dan 18:00 gacha. 3 mahal ovqatlanish, barcha mashg'ulotlar, o'yinlar va dam olish.", 
    price: '1 200 000', 
    note: "so'm / oyiga", 
    featured: true,
    color: '#FF6B35',
    bg: 'linear-gradient(135deg, #FFF5EE, #FFF0E5)',
    delay: 0.1,
    number: '02'
  },
  { 
    icon: 'fas fa-palette', 
    title: "Qo'shimcha mashg'ulotlar", 
    description: "Ingliz tili, rasm, raqs va qo'shiq. Haftasiga 3 marta, alohida yo'nalish uchun.", 
    price: '200 000', 
    note: "so'm / yo'nalish", 
    featured: false,
    color: '#A855F7',
    bg: 'linear-gradient(135deg, #F5E8FF, #EDD6F5)',
    delay: 0.2,
    number: '03'
  }
];

const servicesIncluded = [
  { icon: 'fas fa-bus', label: 'Transport xizmati', color: '#F59E0B' },
  { icon: 'fas fa-apple-alt', label: "Sog'lom ovqatlanish", color: '#22C55E' },
  { icon: 'fas fa-hospital', label: 'Tibbiy nazorat', color: '#EF4444' },
  { icon: 'fas fa-language', label: 'Ingliz tili darslari', color: '#3B82F6' },
  { icon: 'fas fa-robot', label: "STEM ta'lim", color: '#A855F7' },
  { icon: 'fas fa-futbol', label: "Sport mashg'ulotlari", color: '#10B981' },
  { icon: 'fas fa-music', label: "Musiqa va san'at", color: '#EC4899' },
  { icon: 'fas fa-spa', label: 'Yoga va meditatsiya', color: '#8B5CF6' }
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Scroll animation for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card-premium, .included-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // Price counter animation
  useEffect(() => {
    const priceSpans = document.querySelectorAll('.price-value');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          let current = 0;
          const increment = target / 50;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target.toLocaleString();
              clearInterval(interval);
            } else {
              el.textContent = Math.floor(current).toLocaleString();
            }
          }, 20);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    priceSpans.forEach(span => observer.observe(span));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="services-hero-premium">
        <div className="hero-particles-service">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="particle-s" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 20}, 80%, 60%)`
            }}></div>
          ))}
        </div>
        
        <div className="service-shapes">
          <div className="service-shape s1"></div>
          <div className="service-shape s2"></div>
          <div className="service-shape s3"></div>
          <div className="service-shape s4"></div>
          <div className="service-shape s5"></div>
        </div>
        
        <div className="hero-content-service">
          <div className="floating-service-icons">
            <div className="service-icon-hero si1"><i className="fas fa-coins"></i><span className="pulse-s"></span></div>
            <div className="service-icon-hero si2"><i className="fas fa-dollar-sign"></i><span className="pulse-s"></span></div>
            <div className="service-icon-hero si3"><i className="fas fa-money-bill-wave"></i><span className="pulse-s"></span></div>
            <div className="service-icon-hero si4"><i className="fas fa-tag"></i><span className="pulse-s"></span></div>
            <div className="service-icon-hero si5"><i className="fas fa-gem"></i><span className="pulse-s"></span></div>
          </div>
          <h1 className="service-title"><span className="title-gradient-s">Narxlar va xizmatlar</span></h1>
          <div className="title-decoration-s">
            <span className="deco-line-s"></span>
            <i className="fas fa-money-bill-wave"></i>
            <span className="deco-line-s"></span>
          </div>
          <p className="service-subtitle">Qulay narxlarda sifatli va zamonaviy ta'lim</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-header">
            <span className="services-badge">✨ Xizmatlarimiz ✨</span>
            <h2 className="services-title">Takliflarimiz</h2>
            <div className="services-line">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="services-grid-premium">
            {services.map((service, idx) => (
              <div 
                key={service.title} 
                className={`service-card-premium ${service.featured ? 'featured' : ''}`}
                style={{ background: service.bg, transitionDelay: `${service.delay}s` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {service.featured && (
                  <div className="featured-badge-s premium-pulse-s">
                    <i className="fas fa-star"></i> ENG KO'P TANLANADI
                  </div>
                )}
                <div className="service-card-icon" style={{ background: `${service.color}15` }}>
                  <i className={service.icon} style={{ color: service.color }}></i>
                  {hoveredCard === idx && <div className="icon-ripple-s" style={{ background: service.color }}></div>}
                </div>
                <h3 style={{ color: service.color }}>{service.title}</h3>
                <p>{service.description}</p>
                <div className="price-container">
                  <span className="price-value" data-target={parseInt(service.price.replace(/\s/g, ''))}>
                    {service.price}
                  </span>
                  <span className="price-note">{service.note}</span>
                </div>
                <Link to="/contact" className="service-btn" style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)` }}>
                  Ro'yxatdan o'tish <i className="fas fa-arrow-right"></i>
                  <span className="btn-shine-s"></span>
                </Link>
                <div className="service-number">{service.number}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="included-section-premium">
        <div className="container">
          <div className="included-header">
            <span className="included-badge">🎁 Qo'shimcha xizmatlar</span>
            <h2 className="included-title">Barcha xizmatlarimiz</h2>
            <div className="included-line">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="included-grid-premium">
            {servicesIncluded.map((item, idx) => (
              <div key={item.label} className="included-item animate-on-scroll-s" style={{ transitionDelay: `${idx * 0.05}s` }}>
                <div className="included-icon" style={{ background: `${item.color}15` }}>
                  <i className={item.icon} style={{ color: item.color }}></i>
                </div>
                <span>{item.label}</span>
                <div className="included-hover" style={{ background: item.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="discount-section-premium">
        <div className="container">
          <div className="discount-banner-premium animated-gradient-s">
            <div className="discount-glow-s"></div>
            <div className="discount-content-s">
              <div className="discount-floating-icons">
                <i className="fas fa-gift"></i>
                <i className="fas fa-tag"></i>
                <i className="fas fa-percent"></i>
              </div>
              <h3>🎁 Maxsus taklif!</h3>
              <p><strong>2 yoki undan ko'p farzand uchun 10% chegirma</strong></p>
              <p>6 oylik to'lov uchun <strong>5% chegirma</strong></p>
              <div className="discount-badge-s rotating-badge-s">
                <span>-10%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="cta-wrapper-s">
            <div className="cta-float-icons-s">
              <i className="fas fa-question-circle"></i>
              <i className="fas fa-comment-dots"></i>
              <i className="fas fa-headset"></i>
            </div>
            <h2>Savollaringiz bormi?</h2>
            <p>Narxlar va xizmatlar haqida batafsil ma'lumot olish uchun bog'laning!</p>
            <Link to="/contact" className="cta-service-btn">
              Bepul konsultatsiya <i className="fas fa-arrow-right"></i>
              <span className="btn-shine-service"></span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ========== SERVICES PAGE PREMIUM STYLES ========== */
        
        /* Hero Section */
        .services-hero-premium {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 120px 24px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-particles-service .particle-s {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
          animation: floatParticleS 10s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes floatParticleS {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-60px) translateX(40px); }
        }
        
        .service-shapes .service-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          filter: blur(40px);
        }
        .s1 { width: 450px; height: 450px; background: #FF6B35; top: -120px; left: -120px; }
        .s2 { width: 380px; height: 380px; background: #4ECDC4; bottom: -100px; right: -100px; }
        .s3 { width: 300px; height: 300px; background: #A855F7; top: 50%; left: 20%; }
        .s4 { width: 250px; height: 250px; background: #22C55E; bottom: 20%; right: 15%; }
        .s5 { width: 200px; height: 200px; background: #FFE66D; top: 20%; left: 30%; }
        
        .floating-service-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .service-icon-hero {
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
          animation: floatIconS 3s ease-in-out infinite;
        }
        .si1 { animation-delay: 0s; }
        .si2 { animation-delay: 0.15s; }
        .si3 { animation-delay: 0.3s; }
        .si4 { animation-delay: 0.45s; }
        .si5 { animation-delay: 0.6s; }
        
        @keyframes floatIconS {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .pulse-s {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 22px;
          animation: pulseRingS 2s infinite;
          pointer-events: none;
        }
        
        @keyframes pulseRingS {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          70% { box-shadow: 0 0 0 15px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        
        .service-title {
          margin-bottom: 20px;
        }
        .title-gradient-s {
          font-size: 52px;
          font-weight: 900;
          background: linear-gradient(135deg, #fff, #FF6B35, #4ECDC4, #fff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: titleGradientS 4s ease infinite;
        }
        
        @keyframes titleGradientS {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .title-decoration-s {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        .deco-line-s {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FF6B35, #4ECDC4, transparent);
        }
        .title-decoration-s i {
          color: #FF6B35;
          font-size: 16px;
          animation: iconRotateS 3s linear infinite;
        }
        @keyframes iconRotateS {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .service-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Services Grid */
        .services-grid-section {
          padding: 80px 0;
          background: #FFFBF5;
        }
        
        .services-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .services-badge {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
          padding: 5px 18px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 15px;
        }
        .services-title {
          font-size: 36px;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 15px;
        }
        .services-line {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .services-line span {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #A855F7);
          border-radius: 3px;
        }
        .services-line span:nth-child(2) { width: 60px; }
        
        .services-grid-premium {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }
        .service-card-premium {
          border-radius: 28px;
          padding: 40px 28px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
        }
        .service-card-premium.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .service-card-premium:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        .service-card-premium.featured {
          border: 2px solid #FF6B35;
          box-shadow: 0 10px 30px rgba(255,107,53,0.15);
        }
        
        /* TUZATILGAN - BADGE ICHKI TOMONDA */
        .featured-badge-s {
          position: absolute;
          top: 15px;
          left: 15px;
          right: auto;
          transform: none;
          background: #FF6B35;
          color: white;
          padding: 6px 18px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        
        .premium-pulse-s {
          animation: pulseBadge 2s infinite;
        }
        @keyframes pulseBadge {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,107,53,0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255,107,53,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,107,53,0); }
        }
        
        .service-card-icon {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          transition: all 0.3s;
        }
        .service-card-premium:hover .service-card-icon {
          transform: scale(1.1) rotate(5deg);
        }
        .service-card-icon i { font-size: 38px; }
        
        .icon-ripple-s {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          animation: rippleEffectS 0.6s ease-out;
        }
        @keyframes rippleEffectS {
          0% { transform: scale(0.5); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        .service-card-premium h3 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .service-card-premium p {
          color: #6B7280;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .price-container {
          margin-bottom: 25px;
        }
        .price-value {
          font-size: 38px;
          font-weight: 800;
          color: #FF6B35;
          font-family: 'Baloo 2', cursive;
        }
        .price-note {
          font-size: 14px;
          color: #6B7280;
        }
        
        .service-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 60px;
          color: white;
          font-weight: 700;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.3s;
        }
        .service-btn:hover {
          gap: 15px;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .btn-shine-s {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        .service-btn:hover .btn-shine-s { left: 100%; }
        
        .service-number {
          position: absolute;
          bottom: 20px;
          right: 25px;
          font-size: 42px;
          font-weight: 800;
          color: rgba(0,0,0,0.06);
          font-family: 'Baloo 2', cursive;
          transition: all 0.3s;
        }
        .service-card-premium:hover .service-number {
          transform: scale(1.1);
          color: rgba(0,0,0,0.1);
        }
        
        /* Included Services */
        .included-section-premium {
          padding: 60px 0;
          background: white;
        }
        .included-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .included-badge {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #A855F7);
          color: white;
          padding: 5px 18px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 15px;
        }
        .included-title {
          font-size: 32px;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 15px;
        }
        .included-line {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .included-line span {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #A855F7);
          border-radius: 3px;
        }
        .included-line span:nth-child(2) { width: 60px; }
        
        .included-grid-premium {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        .included-item {
          background: #FFFBF5;
          padding: 18px 22px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateX(-20px);
          cursor: pointer;
        }
        .included-item.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .included-item:hover {
          transform: translateX(8px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .included-icon {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .included-item:hover .included-icon {
          transform: scale(1.1) rotate(5deg);
        }
        .included-icon i { font-size: 24px; }
        .included-item span { font-weight: 600; color: #2D2D2D; }
        .included-hover {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .included-item:hover .included-hover { transform: scaleX(1); }
        
        /* Discount Banner */
        .discount-section-premium {
          padding: 40px 0 80px;
          background: #FFFBF5;
        }
        .discount-banner-premium {
          background: linear-gradient(135deg, #FFE66D, #FFD93D);
          border-radius: 40px;
          padding: 50px 35px;
          position: relative;
          overflow: hidden;
        }
        .animated-gradient-s {
          background: linear-gradient(270deg, #FFE66D, #FFD93D, #FFB347, #FFE66D);
          background-size: 300% 300%;
          animation: gradientShiftS 4s ease infinite;
        }
        @keyframes gradientShiftS {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .discount-glow-s {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%);
          animation: rotateGlowS 8s linear infinite;
        }
        @keyframes rotateGlowS {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .discount-content-s {
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .discount-floating-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        .discount-floating-icons i {
          font-size: 40px;
          color: #FF6B35;
          animation: floatIconDiscount 3s infinite;
        }
        .discount-floating-icons i:nth-child(1) { animation-delay: 0s; }
        .discount-floating-icons i:nth-child(2) { animation-delay: 0.5s; }
        .discount-floating-icons i:nth-child(3) { animation-delay: 1s; }
        @keyframes floatIconDiscount {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .discount-content-s h3 {
          font-size: 32px;
          margin-bottom: 15px;
          color: #2D2D2D;
        }
        .discount-content-s p {
          font-size: 16px;
          margin-bottom: 8px;
          color: #4B5563;
        }
        .discount-badge-s {
          position: absolute;
          top: 25px;
          right: 35px;
          background: #FF6B35;
          color: white;
          width: 85px;
          height: 85px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 24px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          z-index: 5;
        }
        .rotating-badge-s {
          animation: rotate360 4s linear infinite;
        }
        @keyframes rotate360 {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        /* CTA Section */
        .services-cta-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 70px 0;
          text-align: center;
        }
        .cta-wrapper-s {
          text-align: center;
        }
        .cta-float-icons-s {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-bottom: 25px;
        }
        .cta-float-icons-s i {
          font-size: 35px;
          color: white;
          animation: floatIconCtaS 3s infinite;
        }
        .cta-float-icons-s i:nth-child(1) { animation-delay: 0s; }
        .cta-float-icons-s i:nth-child(2) { animation-delay: 0.5s; }
        .cta-float-icons-s i:nth-child(3) { animation-delay: 1s; }
        @keyframes floatIconCtaS {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cta-wrapper-s h2 {
          font-size: 36px;
          color: white;
          margin-bottom: 15px;
        }
        .cta-wrapper-s p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
        }
        .cta-service-btn {
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
        .cta-service-btn:hover {
          gap: 15px;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .btn-shine-service {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }
        .cta-service-btn:hover .btn-shine-service { left: 100%; }
        
        /* Animations */
        .animate-on-scroll-s {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        .animate-on-scroll-s.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (max-width: 1024px) {
          .services-grid-premium {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          }
          .featured-badge-s {
            font-size: 11px;
            padding: 4px 14px;
            top: 12px;
            left: 12px;
          }
        }
        
        @media (max-width: 900px) {
          .title-gradient-s { font-size: 38px; }
          .service-icon-hero { width: 55px; height: 55px; font-size: 24px; }
          .floating-service-icons { gap: 12px; }
          .services-grid-premium { gap: 20px; }
          .service-card-premium { padding: 30px 20px; }
          .price-value { font-size: 32px; }
          .services-title { font-size: 28px; }
          .discount-badge-s { width: 65px; height: 65px; font-size: 18px; top: 15px; right: 20px; }
          .service-number { font-size: 32px; bottom: 15px; right: 18px; }
        }
        
        @media (max-width: 600px) {
          .featured-badge-s {
            font-size: 10px;
            padding: 3px 12px;
            top: 10px;
            left: 10px;
          }
        }
        
        @media (max-width: 480px) {
          .title-gradient-s { font-size: 28px; }
          .service-icon-hero { width: 45px; height: 45px; font-size: 20px; }
          .price-value { font-size: 28px; }
          .service-number { font-size: 28px; }
          .discount-badge-s { width: 55px; height: 55px; font-size: 14px; top: 10px; right: 12px; }
          .service-card-premium h3 { font-size: 20px; }
          .services-grid-premium { grid-template-columns: 1fr; }
          .service-card-premium { padding: 25px 18px; }
        }
      `}</style>
    </>
  );
}