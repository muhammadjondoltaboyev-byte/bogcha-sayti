import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LottieAnim from '../components/LottieAnim';

const features = [
  { icon: 'fas fa-heart', title: "Mehr va e'tibor", text: "Har bir bolani o'z farzandimizday sevamiz va ularga alohida e'tibor qaratamiz.", color: '#FF6B35', delay: 0 },
  { icon: 'fas fa-book', title: "Zamonaviy ta'lim", text: "Ingliz tili, matematika, rasm, musiqa va boshqa ko'plab qiziqarli darslar.", color: '#4ECDC4', delay: 0.1 },
  { icon: 'fas fa-shield-alt', title: "Xavfsiz muhit", text: "Bolalaringiz uchun 100% xavfsiz, tozalik va tartibga rioya qiladigan muhit.", color: '#A855F7', delay: 0.2 },
  { icon: 'fas fa-palette', title: "Ijodiy mashg'ulotlar", text: "O'yin orqali o'rganish. Har kuni yangi ijodiy faoliyat va qiziqarli tajribalar.", color: '#FFE66D', delay: 0.3 }
];

const groups = [
  { className: 'g1', age: '2–3 yosh', title: 'Kichkintoylar', text: "Ranglar, shakllar, qo'shiqlar va o'yinlar orqali birinchi bilimlar.", icon: 'fas fa-baby', color: '#FF6B35', delay: 0 },
  { className: 'g2', age: '4–5 yosh', title: "O'rta guruh", text: "Raqamlar, harflar, raqs va guruh ishlari bilan rivojlanish.", icon: 'fas fa-child', color: '#4ECDC4', delay: 0.1 },
  { className: 'g3', age: '6–7 yosh', title: 'Katta guruh', text: "Maktabga tayyorlov, ingliz tili va mustaqil fikrlash.", icon: 'fas fa-graduation-cap', color: '#A855F7', delay: 0.2 }
];

const testimonials = [
  { name: 'Nilufar opa', text: "Farzandim bu bog'chaga borganidan keyin juda quvnoq va bilimli bo'lib qaytadi. Tarbiyachilar ham juda mehribon va e'tiborli!", rating: 5, avatar: '👩', delay: 0 },
  { name: 'Jasur aka', text: "Bu hududdagi eng yaxshi bog'chalardan biri. Bolajonlar xavfsizligi va sifatli ta'lim uchun jamoaga katta rahmat!", rating: 5, avatar: '👨', delay: 0.1 },
  { name: 'Dildora opa', text: "Bog'chadagi ingliz tili va qo'shimcha to'garaklar ajoyib. Farzandim maktabga dastlabki bilimlar bilan tayyor bo'lib ketdi!", rating: 5, avatar: '👩', delay: 0.2 }
];

const socialLinks = [
  { href: 'https://t.me/Muhammadjon_85', icon: 'fab fa-telegram-plane', name: 'Telegram', color: '#0088cc' },
  { href: 'https://wa.me/998916851685', icon: 'fab fa-whatsapp', name: 'WhatsApp', color: '#25D366' },
  { href: 'https://instagram.com/d_muxammadjon', icon: 'fab fa-instagram', name: 'Instagram', color: '#E4405F' },
  { href: 'https://facebook.com/d_muxammadjon', icon: 'fab fa-facebook-f', name: 'Facebook', color: '#1877F2' }
];

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll animation for elements
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll-home');
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
    const stats = document.querySelectorAll('.stat-num-home');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
        const plus = el.textContent.trim().endsWith('+');
        let current = 0;
        const increment = target / 50;
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target + (plus ? '+' : '');
            clearInterval(interval);
          } else {
            el.textContent = Math.floor(current) + (plus ? '+' : '');
          }
        }, 20);
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
      const shapes = document.querySelectorAll('.home-shape');
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

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    const email = event.target.newsletterEmail.value.trim();
    if (!email) return;
    const subscribers = JSON.parse(localStorage.getItem('newsletter') || '[]');
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      localStorage.setItem('newsletter', JSON.stringify(subscribers));
      alert("✅ Obuna bo'ldingiz!");
      event.target.reset();
    } else {
      alert("❌ Siz allaqachon obuna bo'lgansiz!");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="home-hero-premium">
        <div className="hero-particles-home">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="particle-h" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 20}, 80%, 60%)`
            }}></div>
          ))}
        </div>
        
        <div className="home-shapes">
          <div className="home-shape hs1"></div>
          <div className="home-shape hs2"></div>
          <div className="home-shape hs3"></div>
          <div className="home-shape hs4"></div>
          <div className="home-shape hs5"></div>
        </div>
        
        <div className="hero-content-home">
          <div className="floating-home-icons">
            <div className="home-icon-hero hi1"><i className="fas fa-star"></i><span className="pulse-h"></span></div>
            <div className="home-icon-hero hi2"><i className="fas fa-heart"></i><span className="pulse-h"></span></div>
            <div className="home-icon-hero hi3"><i className="fas fa-smile"></i><span className="pulse-h"></span></div>
            <div className="home-icon-hero hi4"><i className="fas fa-rocket"></i><span className="pulse-h"></span></div>
          </div>
          <div className="hero-badge-home">
            <i className="fas fa-calendar-alt"></i> 2025-yildan beri faoliyat yuritmoqda
          </div>
          <h1 className="home-title">
            Farzandingiz uchun
            <span className="title-gradient-home"> quvnoq dunyo!</span>
          </h1>
          <p className="home-subtitle">Sevgi, mehr va bilim bilan tarbiyalaymiz. Har bir bola alohida, har bir kun yangi kashfiyot!</p>
          <div className="hero-buttons-home">
            <Link to="/contact" className="btn-primary-home">
              Ro'yxatdan o'tish <i className="fas fa-arrow-right"></i>
              <span className="btn-shine"></span>
            </Link>
            <Link to="/about" className="btn-secondary-home">
              <i className="fas fa-play-circle"></i> Biz haqimizda
            </Link>
          </div>
          <div className="hero-stats-home">
            <div className="stat-home">
              <div className="stat-icon-home"><i className="fas fa-users"></i></div>
              <div className="stat-info-home">
                <span className="stat-num-home" data-target="3">3</span>
                <span className="stat-label-home">YOSH GURUHI</span>
              </div>
            </div>
            <div className="stat-home">
              <div className="stat-icon-home"><i className="fas fa-chalkboard-user"></i></div>
              <div className="stat-info-home">
                <span className="stat-num-home" data-target="6">6</span>
                <span className="stat-label-home">TARBIYACHI</span>
              </div>
            </div>
            <div className="stat-home">
              <div className="stat-icon-home"><i className="fas fa-medal"></i></div>
              <div className="stat-info-home">
                <span className="stat-num-home" data-target="10">10+</span>
                <span className="stat-label-home">TAJRIBA YILI</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-image-home">
          <div className="image-card-home">
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600" alt="Bog'cha" />
            <div className="image-overlay-home"></div>
            <div className="image-badge-home">
              <i className="fas fa-camera"></i> Virtual tour
            </div>
          </div>
          <div className="floating-lottie">
            <LottieAnim path="https://assets10.lottiefiles.com/packages/lf20_1hc1uq13.json" style={{ width: 140, height: 140 }} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features-section">
        <div className="container">
          <div className="section-header-home">
            <span className="section-badge-home">Nima uchun biz?</span>
            <h2 className="section-title-home">Bizning afzalliklarimiz</h2>
            <div className="section-line-home">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="features-grid-home">
            {features.map((feature, idx) => (
              <div 
                key={feature.title} 
                className="feature-card-home animate-on-scroll-home"
                style={{ transitionDelay: `${feature.delay}s` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="feature-icon-home" style={{ background: `${feature.color}15` }}>
                  <i className={feature.icon} style={{ color: feature.color }}></i>
                  {hoveredCard === idx && <div className="icon-ripple-home" style={{ background: feature.color }}></div>}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <div className="feature-hover-line" style={{ background: feature.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Groups Preview Section */}
      <section className="home-groups-section">
        <div className="container">
          <div className="section-header-home">
            <span className="section-badge-home">Guruhlarimiz</span>
            <h2 className="section-title-home">Yosh guruhlari</h2>
            <div className="section-line-home">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="groups-grid-home">
            {groups.map((group, idx) => (
              <div 
                key={group.title} 
                className={`group-card-home ${group.className} animate-on-scroll-home`}
                style={{ transitionDelay: `${group.delay}s` }}
              >
                <div className="group-icon-home">
                  <i className={group.icon}></i>
                </div>
                <div className="group-age-home">{group.age}</div>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <Link to="/groups" className="group-link-home">
                  Batafsil <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials-section">
        <div className="container">
          <div className="section-header-home">
            <span className="section-badge-home">Ota-onalar fikri</span>
            <h2 className="section-title-home">Ishonchli fikrlar</h2>
            <div className="section-line-home">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="testimonials-grid-home">
            {testimonials.map((item, idx) => (
              <div 
                key={item.name} 
                className="testimonial-card-home animate-on-scroll-home"
                style={{ transitionDelay: `${item.delay}s` }}
              >
                <div className="quote-icon-home"><i className="fas fa-quote-left"></i></div>
                <p className="testimonial-text-home">"{item.text}"</p>
                <div className="testimonial-footer-home">
                  <div className="testimonial-avatar-home">{item.avatar}</div>
                  <div className="testimonial-info-home">
                    <strong>{item.name}</strong>
                    <div className="stars-home">
                      {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-content-home">
            <div className="cta-float-icons-home">
              <i className="fas fa-rainbow"></i>
              <i className="fas fa-smile"></i>
              <i className="fas fa-heart"></i>
            </div>
            <h2>Farzandingizni bizga ishoning!</h2>
            <p>Hoziroq ro'yxatdan o'ting va birinchi darsga taklif qiling!</p>
            <Link to="/contact" className="cta-btn-home">
              Bepul konsultatsiya <i className="fas fa-arrow-right"></i>
              <span className="btn-shine-cta"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="home-newsletter-section">
        <div className="container">
          <div className="newsletter-wrapper-home">
            <div className="newsletter-content-home">
              <div className="newsletter-icon-home">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <h3>Yangiliklardan xabardor bo'ling</h3>
              <p>Eng so'nggi yangiliklar va maxsus takliflarni birinchi bo'lib oling!</p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form-home">
                <div className="input-group-home">
                  <i className="fas fa-envelope"></i>
                  <input type="email" name="newsletterEmail" placeholder="Email manzilingiz" required />
                </div>
                <button type="submit">
                  Obuna bo'lish <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
            <div className="newsletter-decoration-home">
              <div className="deco-dot dot1"></div>
              <div className="deco-dot dot2"></div>
              <div className="deco-dot dot3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Social Buttons */}
      <div className="floating-buttons-home">
        {socialLinks.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            target="_blank" 
            rel="noreferrer"
            className="float-btn-home"
            style={{ background: item.color }}
          >
            <i className={item.icon}></i>
            <span className="tooltip-home">{item.name}</span>
          </a>
        ))}
        <a href="tel:+998916851685" className="float-btn-home call-btn">
          <i className="fas fa-phone-alt"></i>
          <span className="tooltip-home">Qo'ng'iroq</span>
        </a>
      </div>

      <style>{`
        /* ========== HOME PAGE PREMIUM STYLES ========== */
        
        /* Hero Section */
        .home-hero-premium {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 100px 24px 80px;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .hero-particles-home .particle-h {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
          animation: floatParticleH 10s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes floatParticleH {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-60px) translateX(40px); }
        }
        
        .home-shapes .home-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          filter: blur(40px);
        }
        .hs1 { width: 500px; height: 500px; background: #FF6B35; top: -150px; left: -150px; }
        .hs2 { width: 400px; height: 400px; background: #4ECDC4; bottom: -100px; right: -100px; }
        .hs3 { width: 350px; height: 350px; background: #A855F7; top: 40%; right: 15%; }
        .hs4 { width: 280px; height: 280px; background: #22C55E; bottom: 15%; left: 10%; }
        .hs5 { width: 200px; height: 200px; background: #FFE66D; top: 25%; left: 25%; }
        
        .hero-content-home {
          flex: 1;
          position: relative;
          z-index: 2;
        }
        
        .floating-home-icons {
          display: flex;
          justify-content: flex-start;
          gap: 15px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        
        .home-icon-hero {
          position: relative;
          width: 60px;
          height: 60px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          animation: floatIconH 3s ease-in-out infinite;
        }
        .hi1 { animation-delay: 0s; }
        .hi2 { animation-delay: 0.2s; }
        .hi3 { animation-delay: 0.4s; }
        .hi4 { animation-delay: 0.6s; }
        
        @keyframes floatIconH {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .pulse-h {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          animation: pulseRingH 2s infinite;
          pointer-events: none;
        }
        
        @keyframes pulseRingH {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          70% { box-shadow: 0 0 0 12px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        
        .hero-badge-home {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          padding: 6px 18px;
          border-radius: 50px;
          font-size: 14px;
          color: white;
          margin-bottom: 25px;
        }
        
        .home-title {
          font-size: 56px;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }
        .title-gradient-home {
          background: linear-gradient(135deg, #FF6B35, #FF8C5A, #A855F7);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }
        
        .home-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          max-width: 500px;
          margin-bottom: 35px;
          line-height: 1.7;
        }
        
        .hero-buttons-home {
          display: flex;
          gap: 20px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }
        
        .btn-primary-home {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          padding: 14px 32px;
          border-radius: 60px;
          color: white;
          font-weight: 700;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.3s;
        }
        .btn-primary-home:hover {
          gap: 15px;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,107,53,0.3);
        }
        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        .btn-primary-home:hover .btn-shine { left: 100%; }
        
        .btn-secondary-home {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          padding: 14px 32px;
          border-radius: 60px;
          color: white;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn-secondary-home:hover {
          gap: 12px;
          background: rgba(255,255,255,0.25);
        }
        
        .hero-stats-home {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }
        .stat-home {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          padding: 12px 20px;
          border-radius: 20px;
        }
        .stat-icon-home {
          width: 45px;
          height: 45px;
          background: rgba(255,255,255,0.15);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-icon-home i { font-size: 22px; color: white; }
        .stat-num-home {
          font-size: 28px;
          font-weight: 800;
          color: #FF6B35;
          display: block;
        }
        .stat-label-home {
          font-size: 11px;
          color: rgba(255,255,255,0.7);
          font-weight: 600;
        }
        
        .hero-image-home {
          flex: 1;
          position: relative;
          z-index: 2;
        }
        .image-card-home {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 30px 50px rgba(0,0,0,0.3);
        }
        .image-card-home img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .image-card-home:hover img { transform: scale(1.05); }
        .image-overlay-home {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,107,53,0.2), transparent);
          pointer-events: none;
        }
        .image-badge-home {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          padding: 8px 16px;
          border-radius: 30px;
          color: white;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .floating-lottie {
          position: absolute;
          bottom: -30px;
          left: -30px;
        }
        
        /* Features Section */
        .home-features-section {
          padding: 80px 0;
          background: white;
        }
        
        .section-header-home {
          text-align: center;
          margin-bottom: 50px;
        }
        .section-badge-home {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
          padding: 5px 18px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 15px;
        }
        .section-title-home {
          font-size: 36px;
          font-family: 'Baloo 2', cursive;
          margin-bottom: 20px;
        }
        .section-line-home {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .section-line-home span {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #A855F7);
          border-radius: 3px;
        }
        .section-line-home span:nth-child(2) { width: 60px; }
        
        .features-grid-home {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }
        .feature-card-home {
          background: #FFFBF5;
          padding: 35px 25px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
        }
        .feature-card-home.animated {
          opacity: 1;
          transform: translateY(0);
        }
        .feature-card-home:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .feature-icon-home {
          position: relative;
          width: 75px;
          height: 75px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .feature-icon-home i { font-size: 36px; }
        .feature-card-home h3 { font-size: 20px; margin-bottom: 12px; }
        .feature-card-home p { color: #6B7280; line-height: 1.6; }
        .feature-hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .feature-card-home:hover .feature-hover-line { transform: scaleX(1); }
        .icon-ripple-home {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          animation: rippleEffect 0.6s ease-out;
        }
        @keyframes rippleEffect {
          0% { transform: scale(0.5); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        /* Groups Section */
        .home-groups-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #FFFBF5, #FFF5EE);
        }
        .groups-grid-home {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .group-card-home {
          padding: 35px 28px;
          border-radius: 24px;
          color: white;
          transition: all 0.4s;
          opacity: 0;
          transform: translateY(30px);
        }
        .group-card-home.animated {
          opacity: 1;
          transform: translateY(0);
        }
        .group-card-home:hover {
          transform: translateY(-8px);
        }
        .g1 { background: linear-gradient(135deg, #FF6B35, #FF8C5A); }
        .g2 { background: linear-gradient(135deg, #4ECDC4, #38B2AC); }
        .g3 { background: linear-gradient(135deg, #A855F7, #9333EA); }
        .group-icon-home {
          width: 60px;
          height: 60px;
          background: rgba(255,255,255,0.2);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .group-icon-home i { font-size: 28px; }
        .group-age-home {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 4px 14px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 12px;
        }
        .group-card-home h3 { font-size: 24px; margin-bottom: 10px; }
        .group-card-home p { opacity: 0.9; margin-bottom: 20px; }
        .group-link-home {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-weight: 600;
          text-decoration: none;
        }
        .group-link-home:hover { gap: 12px; }
        
        /* Testimonials Section */
        .home-testimonials-section {
          padding: 80px 0;
          background: white;
        }
        .testimonials-grid-home {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }
        .testimonial-card-home {
          background: #FFFBF5;
          padding: 35px;
          border-radius: 24px;
          transition: all 0.4s;
          border: 1px solid #F0E6D3;
          opacity: 0;
          transform: translateY(30px);
        }
        .testimonial-card-home.animated {
          opacity: 1;
          transform: translateY(0);
        }
        .testimonial-card-home:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .quote-icon-home {
          font-size: 40px;
          color: #FF6B35;
          opacity: 0.3;
          margin-bottom: 20px;
        }
        .testimonial-text-home {
          font-size: 16px;
          line-height: 1.7;
          color: #4B5563;
          margin-bottom: 25px;
          font-style: italic;
        }
        .testimonial-footer-home {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .testimonial-avatar-home {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, #FFE8D6, #FFD6B0);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
        }
        .testimonial-info-home strong { display: block; color: #FF6B35; margin-bottom: 5px; }
        .stars-home { color: #FFE66D; }
        
        /* CTA Section */
        .home-cta-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 70px 0;
          text-align: center;
        }
        .cta-float-icons-home {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-bottom: 25px;
        }
        .cta-float-icons-home i {
          font-size: 40px;
          color: white;
          animation: floatCtaIcon 3s infinite;
        }
        .cta-float-icons-home i:nth-child(1) { animation-delay: 0s; }
        .cta-float-icons-home i:nth-child(2) { animation-delay: 0.5s; }
        .cta-float-icons-home i:nth-child(3) { animation-delay: 1s; }
        @keyframes floatCtaIcon {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cta-content-home h2 {
          font-size: 36px;
          color: white;
          margin-bottom: 15px;
        }
        .cta-content-home p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
        }
        .cta-btn-home {
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
        .cta-btn-home:hover {
          gap: 15px;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .btn-shine-cta {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }
        .cta-btn-home:hover .btn-shine-cta { left: 100%; }
        
        /* Newsletter Section */
        .home-newsletter-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
        }
        .newsletter-wrapper-home {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }
        .newsletter-icon-home {
          font-size: 50px;
          color: #FF6B35;
          margin-bottom: 20px;
          display: inline-block;
          animation: floatNewsletter 3s infinite;
        }
        @keyframes floatNewsletter {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .newsletter-content-home h3 {
          font-size: 32px;
          color: white;
          margin-bottom: 15px;
        }
        .newsletter-content-home p {
          color: rgba(255,255,255,0.7);
          margin-bottom: 30px;
        }
        .newsletter-form-home {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .input-group-home {
          position: relative;
          flex: 1;
          min-width: 250px;
        }
        .input-group-home i {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }
        .input-group-home input {
          width: 100%;
          padding: 15px 20px 15px 48px;
          border-radius: 60px;
          border: none;
          outline: none;
          font-size: 16px;
        }
        .newsletter-form-home button {
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          border: none;
          padding: 15px 35px;
          border-radius: 60px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
        }
        .newsletter-form-home button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255,107,53,0.3);
        }
        .newsletter-decoration-home {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .deco-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255,107,53,0.3);
          border-radius: 50%;
        }
        .dot1 { top: 20%; left: -30px; animation: floatDot 4s infinite; }
        .dot2 { bottom: 30%; right: -40px; animation: floatDot 5s infinite reverse; }
        .dot3 { top: 50%; right: -20px; animation: floatDot 3.5s infinite; }
        @keyframes floatDot {
          0%,100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.8; }
        }
        
        /* Floating Buttons */
        .floating-buttons-home {
          position: fixed;
          right: 20px;
          bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 999;
        }
        .float-btn-home {
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 22px;
          transition: all 0.3s;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          text-decoration: none;
        }
        .float-btn-home:hover {
          transform: translateY(-5px) scale(1.1);
        }
        .tooltip-home {
          position: absolute;
          right: 60px;
          background: #1f2937;
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
        }
        .float-btn-home:hover .tooltip-home {
          opacity: 1;
          visibility: visible;
          right: 65px;
        }
        .call-btn { background: #FF6B35; }
        
        /* Responsive */
        @media (max-width: 900px) {
          .home-hero-premium { flex-direction: column; text-align: center; padding: 80px 20px; }
          .floating-home-icons { justify-content: center; }
          .hero-buttons-home { justify-content: center; }
          .hero-stats-home { justify-content: center; }
          .home-title { font-size: 42px; }
          .floating-lottie { display: none; }
          .section-title-home { font-size: 28px; }
        }
        
        @media (max-width: 480px) {
          .home-title { font-size: 32px; }
          .home-icon-hero { width: 45px; height: 45px; font-size: 20px; }
          .stat-home { padding: 8px 15px; }
          .stat-num-home { font-size: 22px; }
          .feature-card-home { padding: 25px 20px; }
        }
      `}</style>
    </>
  );
}