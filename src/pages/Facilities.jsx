import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const facilities = [
  { 
    icon: 'fas fa-chalkboard-user', 
    title: "O'quv xonalari", 
    text: "Yoritilgan va xavfsiz o‘quv xonalari, kichik guruhlar uchun mos. Zamonaviy interaktiv doskalar va o‘quv qurollari bilan jihozlangan.",
    color: '#FF6B35',
    bg: 'linear-gradient(135deg, #FFF5E6, #FFF0E5)',
    delay: 0
  },
  { 
    icon: 'fas fa-tree', 
    title: 'Ochiq maydon', 
    text: "Tashqi o'yin maydonlari va yashil hududlar bolalar uchun. Xavfsiz qoplamali, zamonaviy o'yin jihozlari bilan jihozlangan.",
    color: '#4ECDC4',
    bg: 'linear-gradient(135deg, #E8FFF8, #D6F5F3)',
    delay: 0.1
  },
  { 
    icon: 'fas fa-utensils', 
    title: 'Ovqat xizmati', 
    text: "Sog'lom va muvozanatli ovqatlanish rejalari. Tajribali oshpazlar tomonidan tayyorlangan, 3 mahal issiq ovqat.",
    color: '#22C55E',
    bg: 'linear-gradient(135deg, #E8FFF0, #D6F5DC)',
    delay: 0.2
  },
  { 
    icon: 'fas fa-medkit', 
    title: 'Tibbiy nuqta', 
    text: "Favqulodda holatlar uchun birinchi yordam va muntazam tekshiruvlar. Tajribali hamshira va zamonaviy tibbiy jihozlar.",
    color: '#EF4444',
    bg: 'linear-gradient(135deg, #FFF5F5, #FEE2E2)',
    delay: 0.3
  },
  { 
    icon: 'fas fa-bus', 
    title: 'Transport', 
    text: "Xavfsiz va ishonchli yo'lovchi tashish xizmatlari. Kamerali, konditsionerli avtobuslar va professional haydovchilar.",
    color: '#F59E0B',
    bg: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)',
    delay: 0.4
  },
  { 
    icon: 'fas fa-shield-alt', 
    title: '24/7 Xavfsizlik', 
    text: "Kamera va professional qo'riqlash xizmati. Kirishda maxsus nazorat, butun hudud video kuzatuv tizimi bilan qoplangan.",
    color: '#3B82F6',
    bg: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
    delay: 0.5
  },
  { 
    icon: 'fas fa-laptop-code', 
    title: 'Zamonaviy texnologiyalar', 
    text: "Interaktiv doskalar va kompyuter sinflari. Multimedia jihozlari, robototexnika va STEM ta'lim uchun maxsus xonalar.",
    color: '#A855F7',
    bg: 'linear-gradient(135deg, #F5E8FF, #EDD6F5)',
    delay: 0.6
  },
  { 
    icon: 'fas fa-hand-holding-heart', 
    title: 'Psixologik yordam', 
    text: "Bolalar psixologi va individual yondashuv. Har bir bolaning hissiy va ijtimoiy rivojlanishiga alohida e'tibor.",
    color: '#EC4899',
    bg: 'linear-gradient(135deg, #FFF0F8, #FCE7F3)',
    delay: 0.7
  }
];

const stats = [
  { icon: 'fas fa-smile', number: 500, label: 'Baxtli bolalar', color: '#FF6B35' },
  { icon: 'fas fa-chalkboard-user', number: 15, label: 'Tajribali pedagoglar', color: '#4ECDC4' },
  { icon: 'fas fa-building', number: 12, label: 'Zamonaviy xonalar', color: '#A855F7' },
  { icon: 'fas fa-clock', number: 24, label: 'Kunlik xavfsizlik', color: '#22C55E' }
];

export default function Facilities() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll animation for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.facility-card-premium, .stat-card-facility');
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

  // Counter animation for stats
  useEffect(() => {
    const stats = document.querySelectorAll('.stat-number-facility');
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

  // Parallax mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const shapes = document.querySelectorAll('.facility-shape');
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.02;
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
      {/* Hero Section */}
      <section className="facilities-hero-premium">
        <div className="hero-particles-facility">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="particle-f" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 20}, 80%, 60%)`
            }}></div>
          ))}
        </div>
        
        <div className="facility-shapes">
          <div className="facility-shape shape-f1"></div>
          <div className="facility-shape shape-f2"></div>
          <div className="facility-shape shape-f3"></div>
          <div className="facility-shape shape-f4"></div>
        </div>
        
        <div className="hero-content-facility">
          <div className="floating-facility-icons">
            <div className="facility-icon fi1"><i className="fas fa-building"></i><span className="pulse-f"></span></div>
            <div className="facility-icon fi2"><i className="fas fa-school"></i><span className="pulse-f"></span></div>
            <div className="facility-icon fi3"><i className="fas fa-apple-alt"></i><span className="pulse-f"></span></div>
            <div className="facility-icon fi4"><i className="fas fa-bus"></i><span className="pulse-f"></span></div>
            <div className="facility-icon fi5"><i className="fas fa-shield-alt"></i><span className="pulse-f"></span></div>
            <div className="facility-icon fi6"><i className="fas fa-laptop-code"></i><span className="pulse-f"></span></div>
          </div>
          <h1 className="facility-title"><span className="title-gradient-f">Imkoniyatlar va Inshootlar</span></h1>
          <div className="title-decoration-f">
            <span className="deco-line"></span>
            <i className="fas fa-cogs"></i>
            <span className="deco-line"></span>
          </div>
          <p className="facility-subtitle">Bizning bog'chamizda bolalar uchun barcha qulayliklar mavjud</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="facility-stats-section">
        <div className="container">
          <div className="stats-header">
            <span className="stats-badge">Raqamlarda biz</span>
            <h2 className="stats-title">Bizning ko'rsatkichlarimiz</h2>
            <div className="stats-line">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="stats-grid-facility">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="stat-card-facility animate-on-scroll-f" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="stat-icon-facility" style={{ background: `${stat.color}15` }}>
                  <i className={stat.icon} style={{ color: stat.color }}></i>
                </div>
                <div className="stat-number-facility" data-target={stat.number}>0</div>
                <div className="stat-label-facility">{stat.label}</div>
                <div className="stat-glow-f" style={{ background: stat.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="facilities-grid-section">
        <div className="container">
          <div className="facilities-header">
            <span className="facilities-badge">✨ Bizning imkoniyatlarimiz ✨</span>
            <h2 className="facilities-title">Barcha qulayliklar</h2>
            <div className="facilities-line">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="facilities-grid-premium">
            {facilities.map((facility, idx) => (
              <div 
                key={facility.title} 
                className="facility-card-premium animate-on-scroll-f"
                style={{ 
                  background: facility.bg,
                  transitionDelay: `${facility.delay}s`
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="facility-card-icon" style={{ background: `${facility.color}15` }}>
                  <i className={facility.icon} style={{ color: facility.color }}></i>
                  {hoveredCard === idx && <div className="icon-ripple" style={{ background: facility.color }}></div>}
                </div>
                <h3 style={{ color: facility.color }}>{facility.title}</h3>
                <p>{facility.text}</p>
                <div className="facility-hover-line" style={{ background: facility.color }}></div>
                <div className="facility-number">{String(idx + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="video-tour-section">
        <div className="container">
          <div className="video-tour-wrapper">
            <div className="video-tour-content">
              <div className="video-tour-icon">
                <i className="fas fa-play-circle"></i>
              </div>
              <h2>Virtual sayohat</h2>
              <p>Bog'chamiz bo'ylab virtual sayohat qiling va barcha imkoniyatlarni ko'ring</p>
              <button className="video-tour-btn">
                <i className="fas fa-play"></i> Videoni ko'rish
                <span className="btn-glow-v"></span>
              </button>
            </div>
            <div className="video-tour-decoration">
              <div className="video-circle circle-1"></div>
              <div className="video-circle circle-2"></div>
              <div className="video-circle circle-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="facility-cta-section">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-float-icons">
              <i className="fas fa-phone-alt"></i>
              <i className="fas fa-map-marker-alt"></i>
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h2>Bog'chamizga tashrif buyuring!</h2>
            <p>Imkoniyatlar bilan yaqindan tanishish uchun bizga murojaat qiling</p>
            <Link to="/contact" className="cta-facility-btn">
              Bog'lanish <i className="fas fa-arrow-right"></i>
              <span className="btn-shine"></span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ========== FACILITIES PAGE PREMIUM STYLES ========== */
        
        /* Hero Section */
        .facilities-hero-premium {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 120px 24px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-particles-facility .particle-f {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
          animation: floatParticleF 10s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes floatParticleF {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-60px) translateX(40px); }
        }
        
        .facility-shapes .facility-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          filter: blur(40px);
          transition: transform 0.3s ease-out;
        }
        .shape-f1 { width: 450px; height: 450px; background: #FF6B35; top: -120px; left: -120px; }
        .shape-f2 { width: 380px; height: 380px; background: #4ECDC4; bottom: -100px; right: -100px; }
        .shape-f3 { width: 300px; height: 300px; background: #A855F7; top: 50%; left: 20%; }
        .shape-f4 { width: 250px; height: 250px; background: #22C55E; bottom: 20%; right: 15%; }
        
        .floating-facility-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .facility-icon {
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
          animation: floatIconF 3s ease-in-out infinite;
        }
        .fi1 { animation-delay: 0s; }
        .fi2 { animation-delay: 0.15s; }
        .fi3 { animation-delay: 0.3s; }
        .fi4 { animation-delay: 0.45s; }
        .fi5 { animation-delay: 0.6s; }
        .fi6 { animation-delay: 0.75s; }
        
        @keyframes floatIconF {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .pulse-f {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 22px;
          animation: pulseRingF 2s infinite;
          pointer-events: none;
        }
        
        @keyframes pulseRingF {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          70% { box-shadow: 0 0 0 15px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        
        .facility-title {
          margin-bottom: 20px;
        }
        .title-gradient-f {
          font-size: 52px;
          font-weight: 900;
          background: linear-gradient(135deg, #fff, #FF6B35, #4ECDC4, #fff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: titleGradientF 4s ease infinite;
        }
        
        @keyframes titleGradientF {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .title-decoration-f {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        .deco-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FF6B35, #4ECDC4, transparent);
        }
        .title-decoration-f i {
          color: #FF6B35;
          font-size: 16px;
          animation: iconRotate 3s linear infinite;
        }
        @keyframes iconRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .facility-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Statistics Section */
        .facility-stats-section {
          padding: 70px 0;
          background: linear-gradient(135deg, #FFFBF5, #FFF5EE);
        }
        
        .stats-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .stats-badge {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
          padding: 5px 18px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 15px;
        }
        .stats-title {
          font-size: 36px;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 15px;
        }
        .stats-line {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .stats-line span {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #A855F7);
          border-radius: 3px;
        }
        .stats-line span:nth-child(2) { width: 60px; }
        
        .stats-grid-facility {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }
        .stat-card-facility {
          background: white;
          padding: 35px 25px;
          border-radius: 28px;
          text-align: center;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
        }
        .stat-card-facility.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .stat-card-facility:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        
        .stat-icon-facility {
          width: 70px;
          height: 70px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
        }
        .stat-icon-facility i { font-size: 32px; }
        
        .stat-number-facility {
          font-size: 44px;
          font-weight: 800;
          color: #FF6B35;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 8px;
        }
        .stat-label-facility {
          font-size: 14px;
          color: #6B7280;
          font-weight: 600;
        }
        .stat-glow-f {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .stat-card-facility:hover .stat-glow-f { transform: scaleX(1); }
        
        /* Facilities Grid */
        .facilities-grid-section {
          padding: 80px 0;
          background: white;
        }
        
        .facilities-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .facilities-badge {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #A855F7);
          color: white;
          padding: 5px 18px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 15px;
        }
        .facilities-title {
          font-size: 36px;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 15px;
        }
        .facilities-line {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .facilities-line span {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #A855F7);
          border-radius: 3px;
        }
        .facilities-line span:nth-child(2) { width: 60px; }
        
        .facilities-grid-premium {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }
        .facility-card-premium {
          border-radius: 28px;
          padding: 35px 28px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
        }
        .facility-card-premium.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .facility-card-premium:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        
        .facility-card-icon {
          position: relative;
          width: 75px;
          height: 75px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s;
        }
        .facility-card-premium:hover .facility-card-icon {
          transform: scale(1.1) rotate(5deg);
        }
        .facility-card-icon i { font-size: 36px; }
        
        .icon-ripple {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          animation: rippleEffectF 0.6s ease-out;
        }
        @keyframes rippleEffectF {
          0% { transform: scale(0.5); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        .facility-card-premium h3 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .facility-card-premium p {
          color: #6B7280;
          line-height: 1.6;
        }
        .facility-hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .facility-card-premium:hover .facility-hover-line { transform: scaleX(1); }
        
        .facility-number {
          position: absolute;
          bottom: 15px;
          right: 20px;
          font-size: 48px;
          font-weight: 800;
          color: rgba(0,0,0,0.05);
          font-family: 'Baloo 2', cursive;
          transition: all 0.3s;
        }
        .facility-card-premium:hover .facility-number {
          transform: scale(1.1);
          color: rgba(0,0,0,0.08);
        }
        
        /* Video Tour Section */
        .video-tour-section {
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          padding: 80px 0;
        }
        .video-tour-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 50px;
          flex-wrap: wrap;
        }
        .video-tour-content {
          flex: 1;
          text-align: center;
        }
        .video-tour-icon {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          animation: pulseVideo 2s infinite;
        }
        .video-tour-icon i {
          font-size: 50px;
          color: white;
          margin-left: 8px;
        }
        @keyframes pulseVideo {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,107,53,0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(255,107,53,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,107,53,0); }
        }
        .video-tour-content h2 {
          font-size: 32px;
          color: white;
          margin-bottom: 15px;
        }
        .video-tour-content p {
          color: #a0a0a0;
          margin-bottom: 25px;
        }
        .video-tour-btn {
          position: relative;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          border: none;
          padding: 14px 35px;
          border-radius: 60px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          overflow: hidden;
        }
        .video-tour-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255,107,53,0.3);
        }
        .btn-glow-v {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        .video-tour-btn:hover .btn-glow-v { left: 100%; }
        
        .video-tour-decoration {
          flex: 1;
          position: relative;
          height: 250px;
        }
        .video-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,107,53,0.2), transparent);
        }
        .circle-1 { width: 150px; height: 150px; top: 20%; left: 10%; animation: floatCircle 6s infinite; }
        .circle-2 { width: 100px; height: 100px; bottom: 20%; right: 20%; animation: floatCircle 8s infinite reverse; }
        .circle-3 { width: 80px; height: 80px; top: 50%; left: 40%; animation: floatCircle 5s infinite; }
        @keyframes floatCircle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        /* CTA Section */
        .facility-cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
        }
        .cta-wrapper {
          text-align: center;
        }
        .cta-float-icons {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-bottom: 25px;
        }
        .cta-float-icons i {
          font-size: 35px;
          color: white;
          animation: floatIconCta 3s infinite;
        }
        .cta-float-icons i:nth-child(1) { animation-delay: 0s; }
        .cta-float-icons i:nth-child(2) { animation-delay: 0.5s; }
        .cta-float-icons i:nth-child(3) { animation-delay: 1s; }
        @keyframes floatIconCta {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cta-wrapper h2 {
          font-size: 36px;
          color: white;
          margin-bottom: 15px;
        }
        .cta-wrapper p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
        }
        .cta-facility-btn {
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
          transition: all 0.3s;
          overflow: hidden;
        }
        .cta-facility-btn:hover {
          gap: 15px;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }
        .cta-facility-btn:hover .btn-shine { left: 100%; }
        
        /* Animations */
        .animate-on-scroll-f {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
        }
        .animate-on-scroll-f.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (max-width: 900px) {
          .title-gradient-f { font-size: 38px; }
          .facility-icon { width: 55px; height: 55px; font-size: 24px; }
          .floating-facility-icons { gap: 12px; }
          .facilities-grid-premium { gap: 20px; }
          .video-tour-wrapper { flex-direction: column; text-align: center; }
          .video-tour-decoration { height: 150px; }
          .stats-title, .facilities-title { font-size: 28px; }
        }
        
        @media (max-width: 480px) {
          .title-gradient-f { font-size: 28px; }
          .facility-icon { width: 45px; height: 45px; font-size: 20px; }
          .stat-number-facility { font-size: 32px; }
          .facility-card-premium { padding: 25px 20px; }
          .facility-number { font-size: 32px; }
        }
      `}</style>
    </>
  );
}