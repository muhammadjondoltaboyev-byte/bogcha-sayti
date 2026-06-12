import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const teachers = [
  { 
    avatar: '🌼', 
    name: 'Gulnoza opa', 
    subject: 'Kichik guruh tarbiyachisi', 
    experience: '10 yillik tajriba',
    text: "Bolalarga mehribon va sabrli. Har bir bolaning o'ziga xos xususiyatini anglab, rivojlantirishga yordam beradi.",
    color: '#FF6B35',
    bg: 'linear-gradient(135deg, #FFF5EE, #FFF0E5)',
    delay: 0,
    number: '01'
  },
  { 
    avatar: '🎨', 
    name: 'Malika opa', 
    subject: 'Rasm va ijod o\'qituvchisi', 
    experience: '6 yillik tajriba',
    text: "Bolalarning ijodiy iqtidorini kashf etadi va rivojlantiradi. Rasm, loy, appliqe mashg'ulotlarini olib boradi.",
    color: '#4ECDC4',
    bg: 'linear-gradient(135deg, #E8FFF8, #D6F5F3)',
    delay: 0.1,
    number: '02'
  },
  { 
    avatar: '📖', 
    name: 'Nigora opa', 
    subject: "O'qish va yozuv", 
    experience: '6 yillik tajriba',
    text: "Yozish va harf tanishtirishda maxsus metodikadan foydalanadi. Sabr va mehribonlik bilan dars beradi.",
    color: '#A855F7',
    bg: 'linear-gradient(135deg, #F5E8FF, #EDD6F5)',
    delay: 0.2,
    number: '03'
  },
  { 
    avatar: '🎶', 
    name: 'Nasiba opa', 
    subject: 'Musiqa va raqs', 
    experience: '4 yillik tajriba',
    text: "Musiqa va raqs orqali bolalarning ijodiy va jismoniy rivojlanishiga hissa qo'shadi.",
    color: '#22C55E',
    bg: 'linear-gradient(135deg, #E8FFF0, #D6F5DC)',
    delay: 0.3,
    number: '04'
  },
  { 
    avatar: '🔢', 
    name: 'Dilnoza opa', 
    subject: 'Matematika va hisob', 
    experience: '4 yillik tajriba',
    text: "O'yin usulida matematika va mantiqiy fikrlashni o'rgatadi. Bolalar raqamlarni sevib o'rganadi.",
    color: '#F59E0B',
    bg: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)',
    delay: 0.4,
    number: '05'
  },
  { 
    avatar: '🇬🇧', 
    name: 'Nodira opa', 
    subject: 'Ingliz tili', 
    experience: '5 yillik tajriba',
    text: "Ingliz tili va o'qish mashg'ulotlarini olib boradi. Zamonaviy metodikalar bilan ishlaydi.",
    color: '#3B82F6',
    bg: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
    delay: 0.5,
    number: '06'
  }
];

export default function Teachers() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Scroll animation for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.teacher-card-premium');
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

  return (
    <>
      {/* Hero Section */}
      <section className="teachers-hero-premium">
        <div className="hero-particles-teacher">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle-t" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 20}, 80%, 60%)`
            }}></div>
          ))}
        </div>
        
        <div className="teacher-shapes">
          <div className="teacher-shape t1"></div>
          <div className="teacher-shape t2"></div>
          <div className="teacher-shape t3"></div>
          <div className="teacher-shape t4"></div>
          <div className="teacher-shape t5"></div>
        </div>
        
        <div className="hero-content-teacher">
          <div className="floating-teacher-icons">
            <div className="teacher-icon-hero ti1"><i className="fas fa-chalkboard-user"></i><span className="pulse-t"></span></div>
            <div className="teacher-icon-hero ti2"><i className="fas fa-book-open"></i><span className="pulse-t"></span></div>
            <div className="teacher-icon-hero ti3"><i className="fas fa-palette"></i><span className="pulse-t"></span></div>
            <div className="teacher-icon-hero ti4"><i className="fas fa-music"></i><span className="pulse-t"></span></div>
            <div className="teacher-icon-hero ti5"><i className="fas fa-language"></i><span className="pulse-t"></span></div>
          </div>
          <h1 className="teacher-title"><span className="title-gradient-t">Bizning tarbiyachilar</span></h1>
          <div className="title-decoration-t">
            <span className="deco-line-t"></span>
            <i className="fas fa-star"></i>
            <span className="deco-line-t"></span>
          </div>
          <p className="teacher-subtitle">Malakali, mehribon va tajribali pedagoglar jamoasi</p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="teachers-grid-section">
        <div className="container">
          <div className="teachers-header">
            <span className="teachers-badge">👩‍🏫 Bizning jamoa</span>
            <h2 className="teachers-title">Tajribali tarbiyachilar</h2>
            <div className="teachers-line">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="teachers-grid-premium">
            {teachers.map((teacher, idx) => (
              <div 
                key={teacher.name} 
                className="teacher-card-premium"
                style={{ background: teacher.bg, transitionDelay: `${teacher.delay}s` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="teacher-card-avatar" style={{ borderColor: teacher.color }}>
                  <div className="avatar-emoji">{teacher.avatar}</div>
                  <div className="avatar-ring" style={{ background: `${teacher.color}20` }}></div>
                  {hoveredCard === idx && <div className="avatar-glow" style={{ background: teacher.color }}></div>}
                </div>
                <h3 style={{ color: teacher.color }}>{teacher.name}</h3>
                <div className="teacher-badge" style={{ background: `${teacher.color}15`, color: teacher.color }}>
                  <i className="fas fa-graduation-cap"></i> {teacher.subject}
                </div>
                <div className="teacher-experience" style={{ background: `${teacher.color}10` }}>
                  <i className="fas fa-clock"></i> {teacher.experience}
                </div>
                <p>{teacher.text}</p>
                <div className="teacher-social">
                  <a href="#" style={{ color: teacher.color }}><i className="fas fa-envelope"></i></a>
                  <a href="#" style={{ color: teacher.color }}><i className="fas fa-phone-alt"></i></a>
                  <a href="#" style={{ color: teacher.color }}><i className="fab fa-telegram-plane"></i></a>
                </div>
                <div className="teacher-number">{teacher.number}</div>
                <div className="teacher-hover-line" style={{ background: teacher.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="teachers-cta-section">
        <div className="container">
          <div className="cta-wrapper-t">
            <div className="cta-float-icons-t">
              <i className="fas fa-handshake"></i>
              <i className="fas fa-smile"></i>
              <i className="fas fa-heart"></i>
            </div>
            <h2>Tarbiyachilarimiz bilan tanishmoqchimisiz?</h2>
            <p>Bog'chamizga tashrif buyuring va jamoamiz bilan shaxsan uchrashing!</p>
            <Link to="/contact" className="cta-teacher-btn">
              Bog'lanish <i className="fas fa-arrow-right"></i>
              <span className="btn-shine-t"></span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ========== TEACHERS PAGE PREMIUM STYLES ========== */
        
        /* Hero Section */
        .teachers-hero-premium {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 120px 24px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-particles-teacher .particle-t {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
          animation: floatParticleT 10s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes floatParticleT {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-60px) translateX(40px); }
        }
        
        .teacher-shapes .teacher-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          filter: blur(40px);
        }
        .t1 { width: 450px; height: 450px; background: #FF6B35; top: -120px; left: -120px; }
        .t2 { width: 380px; height: 380px; background: #4ECDC4; bottom: -100px; right: -100px; }
        .t3 { width: 300px; height: 300px; background: #A855F7; top: 50%; left: 20%; }
        .t4 { width: 250px; height: 250px; background: #22C55E; bottom: 20%; right: 15%; }
        .t5 { width: 200px; height: 200px; background: #FFE66D; top: 20%; left: 30%; }
        
        .floating-teacher-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .teacher-icon-hero {
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
          animation: floatIconT 3s ease-in-out infinite;
        }
        .ti1 { animation-delay: 0s; }
        .ti2 { animation-delay: 0.15s; }
        .ti3 { animation-delay: 0.3s; }
        .ti4 { animation-delay: 0.45s; }
        .ti5 { animation-delay: 0.6s; }
        
        @keyframes floatIconT {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .pulse-t {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 22px;
          animation: pulseRingT 2s infinite;
          pointer-events: none;
        }
        
        @keyframes pulseRingT {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          70% { box-shadow: 0 0 0 15px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        
        .teacher-title {
          margin-bottom: 20px;
        }
        .title-gradient-t {
          font-size: 52px;
          font-weight: 900;
          background: linear-gradient(135deg, #fff, #FF6B35, #4ECDC4, #fff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: titleGradientT 4s ease infinite;
        }
        
        @keyframes titleGradientT {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .title-decoration-t {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        .deco-line-t {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FF6B35, #4ECDC4, transparent);
        }
        .title-decoration-t i {
          color: #FF6B35;
          font-size: 16px;
          animation: iconRotateT 3s linear infinite;
        }
        @keyframes iconRotateT {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .teacher-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Teachers Grid */
        .teachers-grid-section {
          padding: 80px 0;
          background: #FFFBF5;
        }
        
        .teachers-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .teachers-badge {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
          padding: 5px 18px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 15px;
        }
        .teachers-title {
          font-size: 36px;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 15px;
        }
        .teachers-line {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .teachers-line span {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #A855F7);
          border-radius: 3px;
        }
        .teachers-line span:nth-child(2) { width: 60px; }
        
        .teachers-grid-premium {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }
        .teacher-card-premium {
          border-radius: 28px;
          padding: 35px 25px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
        }
        .teacher-card-premium.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .teacher-card-premium:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        
        .teacher-card-avatar {
          position: relative;
          width: 110px;
          height: 110px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid;
          border-radius: 50%;
          background: white;
        }
        .avatar-emoji {
          font-size: 52px;
          z-index: 2;
        }
        .avatar-ring {
          position: absolute;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          opacity: 0.5;
          animation: pulseRingAvatar 2s ease-in-out infinite;
        }
        @keyframes pulseRingAvatar {
          0% { transform: scale(0.9); opacity: 0.4; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        .avatar-glow {
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          animation: avatarGlow 0.6s ease-out;
        }
        @keyframes avatarGlow {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        
        .teacher-card-premium h3 {
          font-size: 24px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 8px;
        }
        
        .teacher-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          margin: 0 auto 12px;
          width: fit-content;
        }
        
        .teacher-experience {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 50px;
          font-size: 12px;
          margin: 0 auto 15px;
          width: fit-content;
        }
        
        .teacher-card-premium p {
          color: #6B7280;
          line-height: 1.6;
          text-align: center;
          margin-bottom: 20px;
        }
        
        .teacher-social {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 10px;
        }
        .teacher-social a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .teacher-social a:hover {
          transform: translateY(-3px) scale(1.1);
          background: #f5f5f5;
        }
        
        .teacher-number {
          position: absolute;
          bottom: 15px;
          right: 20px;
          font-size: 42px;
          font-weight: 800;
          color: rgba(0,0,0,0.04);
          font-family: 'Baloo 2', cursive;
          transition: all 0.3s;
        }
        .teacher-card-premium:hover .teacher-number {
          transform: scale(1.1);
          color: rgba(0,0,0,0.08);
        }
        
        .teacher-hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .teacher-card-premium:hover .teacher-hover-line {
          transform: scaleX(1);
        }
        
        /* CTA Section */
        .teachers-cta-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 70px 0;
          text-align: center;
        }
        .cta-wrapper-t {
          text-align: center;
        }
        .cta-float-icons-t {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-bottom: 25px;
        }
        .cta-float-icons-t i {
          font-size: 35px;
          color: white;
          animation: floatIconCtaT 3s infinite;
        }
        .cta-float-icons-t i:nth-child(1) { animation-delay: 0s; }
        .cta-float-icons-t i:nth-child(2) { animation-delay: 0.5s; }
        .cta-float-icons-t i:nth-child(3) { animation-delay: 1s; }
        @keyframes floatIconCtaT {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cta-wrapper-t h2 {
          font-size: 36px;
          color: white;
          margin-bottom: 15px;
        }
        .cta-wrapper-t p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
        }
        .cta-teacher-btn {
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
        .cta-teacher-btn:hover {
          gap: 15px;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .btn-shine-t {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }
        .cta-teacher-btn:hover .btn-shine-t { left: 100%; }
        
        /* Animations */
        .animate-on-scroll-t {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        .animate-on-scroll-t.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (max-width: 1024px) {
          .teachers-grid-premium {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          }
        }
        
        @media (max-width: 900px) {
          .title-gradient-t { font-size: 38px; }
          .teacher-icon-hero { width: 55px; height: 55px; font-size: 24px; }
          .floating-teacher-icons { gap: 12px; }
          .teachers-grid-premium { gap: 20px; }
          .teacher-card-premium { padding: 30px 20px; }
          .teachers-title { font-size: 28px; }
          .teacher-card-avatar { width: 90px; height: 90px; }
          .avatar-emoji { font-size: 42px; }
          .teacher-number { font-size: 32px; bottom: 12px; right: 15px; }
        }
        
        @media (max-width: 600px) {
          .teacher-card-avatar { width: 80px; height: 80px; }
          .avatar-emoji { font-size: 36px; }
        }
        
        @media (max-width: 480px) {
          .title-gradient-t { font-size: 28px; }
          .teacher-icon-hero { width: 45px; height: 45px; font-size: 20px; }
          .teacher-number { font-size: 28px; }
          .teacher-card-premium h3 { font-size: 20px; }
          .teachers-grid-premium { grid-template-columns: 1fr; }
          .teacher-card-premium { padding: 25px 18px; }
          .teacher-badge { font-size: 11px; padding: 4px 12px; }
        }
      `}</style>
    </>
  );
}