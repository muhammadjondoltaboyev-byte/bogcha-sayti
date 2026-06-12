import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

const initialData = {
  parentName: '',
  parentPhone: '',
  parentEmail: '',
  address: '',
  childName: '',
  childAge: '',
  preferredGroup: '',
  message: ''
};

export default function Contact() {
  const [formData, setFormData] = useState(initialData);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('kindergarten_form_data');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('kindergarten_form_data', JSON.stringify(formData));
  }, [formData]);

  const progressWidth = `${((step - 1) / 2) * 100}%`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const nextStep = () => {
    if (step === 1 && !formData.parentName.trim()) {
      setError("Iltimos, ota-onaning ismini kiriting.");
      return;
    }
    if (step === 1 && !formData.parentPhone.trim()) {
      setError("Iltimos, telefon raqamini kiriting.");
      return;
    }
    if (step === 2 && !formData.childName.trim()) {
      setError("Iltimos, farzandingiz ismini kiriting.");
      return;
    }
    if (step === 2 && !formData.childAge) {
      setError("Iltimos, farzandingiz yoshini tanlang.");
      return;
    }
    if (step === 2 && !formData.preferredGroup) {
      setError("Iltimos, guruhni tanlang.");
      return;
    }
    setStep(prev => prev + 1);
    setError('');
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    setError('');
  };

  const handleSubmit = async () => {
    if (!formData.parentName.trim() || !formData.parentPhone.trim() || 
        !formData.childName.trim() || !formData.childAge || !formData.preferredGroup) {
      setError("Iltimos, barcha majburiy maydonlarni to'ldiring.");
      return;
    }

    setIsLoading(true);
    setError('');

    const templateParams = {
      parent_name: formData.parentName,
      parent_phone: formData.parentPhone,
      parent_email: formData.parentEmail || 'Kiritilmagan',
      address: formData.address || 'Kiritilmagan',
      child_name: formData.childName,
      child_age: formData.childAge,
      preferred_group: formData.preferredGroup,
      message: formData.message || 'Izoh yo\'q',
      date: new Date().toLocaleString('uz-UZ')
    };

    try {
      if (window.emailjs) {
        await window.emailjs.send(
          'service_6nnlqzs',
          'template_zgnzl3a',
          templateParams,
          'f3nKwUprvQY-fMRtW'
        );
      }
      
      const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
      registrations.push(templateParams);
      localStorage.setItem('registrations', JSON.stringify(registrations));
      
      confetti({ particleCount: 150, spread: 180, origin: { y: 0.6 } });
      confetti({ particleCount: 80, spread: 220, origin: { x: 0.5, y: 0.4 } });
      setTimeout(() => {
        confetti({ particleCount: 50, spread: 140, origin: { y: 0.7 } });
      }, 400);
      
      setSubmitted(true);
      setFormData(initialData);
      localStorage.removeItem('kindergarten_form_data');
      
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error('Xatolik:', err);
      setError("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    } finally {
      setIsLoading(false);
    }
  };

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const shapes = document.querySelectorAll('.contact-shape');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 15;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <section className="contact-hero-premium">
        <div className="hero-particles-contact">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="particle-c" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 20}, 80%, 60%)`
            }}></div>
          ))}
        </div>
        
        <div className="contact-shapes">
          <div className="contact-shape cs1"></div>
          <div className="contact-shape cs2"></div>
          <div className="contact-shape cs3"></div>
          <div className="contact-shape cs4"></div>
        </div>
        
        <div className="hero-content-contact">
          <div className="floating-contact-icons">
            <div className="contact-icon-hero ci1"><i className="fas fa-phone-alt"></i><span className="pulse-c"></span></div>
            <div className="contact-icon-hero ci2"><i className="fab fa-telegram-plane"></i><span className="pulse-c"></span></div>
            <div className="contact-icon-hero ci3"><i className="fab fa-whatsapp"></i><span className="pulse-c"></span></div>
            <div className="contact-icon-hero ci4"><i className="fas fa-envelope"></i><span className="pulse-c"></span></div>
            <div className="contact-icon-hero ci5"><i className="fas fa-map-marker-alt"></i><span className="pulse-c"></span></div>
            <div className="contact-icon-hero ci6"><i className="fas fa-clock"></i><span className="pulse-c"></span></div>
          </div>
          <h1 className="contact-title">Bog'lanish</h1>
          <div className="title-decoration-c">
            <span className="deco-line-c"></span>
            <i className="fas fa-phone-alt"></i>
            <span className="deco-line-c"></span>
          </div>
          <p className="contact-subtitle">Hoziroq ro'yxatdan o'ting — biz siz bilan tezda bog'lanamiz</p>
        </div>
      </section>

      <section className="contact-section-premium">
        <div className="container">
          <div className="contact-grid-premium">
            {/* Contact Info - FON O'ZGARTIRILDI */}
            <div className="contact-info-premium">
              <div className="info-header">
                <span className="info-badge">📞 24/7 Qo'llab-quvvatlash</span>
                <h2>Ishonchli aloqa</h2>
                <p>Savollaringiz bo'lsa, telegram, whatsapp yoki email orqali bog'laning.</p>
              </div>
              
              <div className="info-items">
                <div className="info-item" onMouseEnter={() => setHoveredCard(0)} onMouseLeave={() => setHoveredCard(null)}>
                  <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                  <div><strong>Telefon</strong><p>+998 91 685 16 85</p></div>
                </div>
                <div className="info-item" onMouseEnter={() => setHoveredCard(1)} onMouseLeave={() => setHoveredCard(null)}>
                  <div className="info-icon"><i className="fab fa-telegram-plane"></i></div>
                  <div><strong>Telegram</strong><p>@Muhammadjon_85</p></div>
                </div>
                <div className="info-item" onMouseEnter={() => setHoveredCard(2)} onMouseLeave={() => setHoveredCard(null)}>
                  <div className="info-icon"><i className="fab fa-whatsapp"></i></div>
                  <div><strong>WhatsApp</strong><p>+998 91 685 16 85</p></div>
                </div>
                <div className="info-item" onMouseEnter={() => setHoveredCard(3)} onMouseLeave={() => setHoveredCard(null)}>
                  <div className="info-icon"><i className="fas fa-envelope"></i></div>
                  <div><strong>Email</strong><p>muhammadjondoltaboyev@gmail.com</p></div>
                </div>
                <div className="info-item" onMouseEnter={() => setHoveredCard(4)} onMouseLeave={() => setHoveredCard(null)}>
                  <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div><strong>Manzil</strong><p>Farg'ona viloyati, Dang'ara tumani</p></div>
                </div>
                <div className="info-item" onMouseEnter={() => setHoveredCard(5)} onMouseLeave={() => setHoveredCard(null)}>
                  <div className="info-icon"><i className="fas fa-clock"></i></div>
                  <div><strong>Ish vaqti</strong><p>Dushanba–Juma, 08:00–18:00</p></div>
                </div>
              </div>
            </div>

            {/* Contact Form - FON O'ZGARTIRILDI */}
            <div className="contact-form-premium">
              <div className="form-header">
                <span className="form-badge">✨ Ro'yxatdan o'tish ✨</span>
                <h2><i className="fas fa-pencil-alt"></i> Ariza yuborish</h2>
                <p>Ma'lumotlaringiz administrator emailiga yuboriladi va tasdiqlanadi.</p>
              </div>

              <div className="progress-container">
                <div className="progress-steps">
                  <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                    <div className="step-circle">1</div>
                    <span>Ota-ona</span>
                  </div>
                  <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
                  <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                    <div className="step-circle">2</div>
                    <span>Farzand</span>
                  </div>
                  <div className={`progress-line ${step >= 3 ? 'active' : ''}`}></div>
                  <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
                    <div className="step-circle">3</div>
                    <span>Tasdiqlash</span>
                  </div>
                </div>
              </div>

              {submitted ? (
                <div className="success-card">
                  <div className="success-icon"><i className="fas fa-check-circle"></i></div>
                  <h3>Arizangiz qabul qilindi!</h3>
                  <p>Tez orada siz bilan bog'lanamiz.</p>
                </div>
              ) : (
                <div className="form-container">
                  <div className={`form-step ${step === 1 ? 'active' : ''}`}>
                    <h3>Ota-ona ma'lumotlari</h3>
                    <div className="form-group">
                      <label><i className="fas fa-user"></i> Ism-familiya *</label>
                      <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Masalan: Aziz Karimov" />
                    </div>
                    <div className="form-group">
                      <label><i className="fas fa-phone"></i> Telefon *</label>
                      <input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} placeholder="+998 90 000 00 00" />
                    </div>
                    <div className="form-group">
                      <label><i className="fas fa-envelope"></i> Email</label>
                      <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} placeholder="email@example.com" />
                    </div>
                    <div className="form-group">
                      <label><i className="fas fa-map-marker-alt"></i> Manzil</label>
                      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Qaysi tumanda yashaysiz?" />
                    </div>
                  </div>

                  <div className={`form-step ${step === 2 ? 'active' : ''}`}>
                    <h3>Farzand ma'lumotlari</h3>
                    <div className="form-group">
                      <label><i className="fas fa-child"></i> Farzand ismi *</label>
                      <input type="text" name="childName" value={formData.childName} onChange={handleChange} placeholder="Masalan: Aziza" />
                    </div>
                    <div className="form-group">
                      <label><i className="fas fa-calendar"></i> Farzand yoshi *</label>
                      <select name="childAge" value={formData.childAge} onChange={handleChange}>
                        <option value="">Tanlang...</option>
                        {[2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} yosh</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label><i className="fas fa-school"></i> Guruh tanlovi *</label>
                      <select name="preferredGroup" value={formData.preferredGroup} onChange={handleChange}>
                        <option value="">Tanlang...</option>
                        <option value="Kichkintoylar (2-3 yosh)">Kichkintoylar (2-3 yosh)</option>
                        <option value="O'rta guruh (4-5 yosh)">O'rta guruh (4-5 yosh)</option>
                        <option value="Katta guruh (6-7 yosh)">Katta guruh (6-7 yosh)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label><i className="fas fa-comment"></i> Izoh</label>
                      <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Boshqa savollaringiz..."></textarea>
                    </div>
                  </div>

                  <div className={`form-step ${step === 3 ? 'active' : ''}`}>
                    <h3>Ma'lumotlarni tekshirish</h3>
                    <div className="review-card">
                      <div className="review-row"><span>Ism-familiya</span><strong>{formData.parentName || '-'}</strong></div>
                      <div className="review-row"><span>Telefon</span><strong>{formData.parentPhone || '-'}</strong></div>
                      <div className="review-row"><span>Email</span><strong>{formData.parentEmail || '-'}</strong></div>
                      <div className="review-row"><span>Manzil</span><strong>{formData.address || '-'}</strong></div>
                      <div className="review-row"><span>Farzand ismi</span><strong>{formData.childName || '-'}</strong></div>
                      <div className="review-row"><span>Farzand yoshi</span><strong>{formData.childAge || '-'}</strong></div>
                      <div className="review-row"><span>Guruh</span><strong>{formData.preferredGroup || '-'}</strong></div>
                      <div className="review-row"><span>Izoh</span><strong>{formData.message || '-'}</strong></div>
                    </div>
                  </div>

                  {error && <div className="error-msg">{error}</div>}

                  <div className="form-buttons">
                    {step > 1 && (
                      <button type="button" className="btn-prev" onClick={prevStep} disabled={isLoading}>
                        <i className="fas fa-arrow-left"></i> Orqaga
                      </button>
                    )}
                    {step < 3 ? (
                      <button type="button" className="btn-next" onClick={nextStep} disabled={isLoading}>
                        Keyingi qadam <i className="fas fa-arrow-right"></i>
                      </button>
                    ) : (
                      <button type="button" className="btn-submit" onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? <span className="spinner"></span> : <><i className="fas fa-paper-plane"></i> Yuborish</>}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner-contact">
        <div className="container">
          <div className="cta-content">
            <div className="cta-floating-icons">
              <i className="fas fa-calendar-alt"></i>
              <i className="fas fa-smile"></i>
              <i className="fas fa-heart"></i>
            </div>
            <h2>Bog'chamizga tashrif buyuring!</h2>
            <p>Imkoniyatlar bilan yaqindan tanishish uchun bizga murojaat qiling</p>
            <Link to="/" className="cta-btn">Bosh sahifa <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Section */
        .contact-hero-premium {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 120px 24px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-particles-contact .particle-c {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
          animation: floatParticleC 10s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes floatParticleC {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-60px) translateX(40px); }
        }
        
        .contact-shapes .contact-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          filter: blur(40px);
        }
        .cs1 { width: 400px; height: 400px; background: #FF6B35; top: -100px; left: -100px; }
        .cs2 { width: 350px; height: 350px; background: #4ECDC4; bottom: -80px; right: -80px; }
        .cs3 { width: 300px; height: 300px; background: #A855F7; top: 50%; left: 20%; }
        .cs4 { width: 250px; height: 250px; background: #22C55E; bottom: 20%; right: 15%; }
        
        .floating-contact-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .contact-icon-hero {
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
          animation: floatIconC 3s ease-in-out infinite;
        }
        .ci1 { animation-delay: 0s; }
        .ci2 { animation-delay: 0.15s; }
        .ci3 { animation-delay: 0.3s; }
        .ci4 { animation-delay: 0.45s; }
        .ci5 { animation-delay: 0.6s; }
        .ci6 { animation-delay: 0.75s; }
        
        @keyframes floatIconC {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .pulse-c {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 22px;
          animation: pulseRingC 2s infinite;
          pointer-events: none;
        }
        
        @keyframes pulseRingC {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          70% { box-shadow: 0 0 0 15px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        
        .contact-title {
          font-size: 52px;
          font-weight: 900;
          color: white;
          margin-bottom: 20px;
        }
        .title-decoration-c {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        .deco-line-c {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FF6B35, #4ECDC4, transparent);
        }
        .title-decoration-c i {
          color: #FF6B35;
          font-size: 16px;
        }
        .contact-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Contact Section - FON O'ZGARTIRILDI */
        .contact-section-premium {
          padding: 80px 0;
          background: #FFFBF5;
        }
        
        .contact-grid-premium {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 45px;
        }
        
        /* Contact Info - YANGI FON (Soft Peach Gradient) */
        .contact-info-premium {
          background: linear-gradient(135deg, #FFF9F0, #FFF5E6);
          border-radius: 32px;
          padding: 35px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,107,53,0.1);
        }
        
        /* Contact Form - YANGI FON (Soft Peach Gradient) */
        .contact-form-premium {
          background: linear-gradient(135deg, #FFF9F0, #FFF5E6);
          border-radius: 32px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,107,53,0.1);
        }
        
        .info-header {
          margin-bottom: 25px;
        }
        .info-badge {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
          padding: 5px 15px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 15px;
        }
        .info-header h2 {
          font-size: 28px;
          margin-bottom: 10px;
        }
        .info-header p {
          color: #6B7280;
        }
        
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px;
          border-radius: 20px;
          transition: all 0.3s;
          background: rgba(255,255,255,0.7);
          cursor: pointer;
        }
        .info-item:hover {
          transform: translateX(5px);
          background: white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .info-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #FFE8D6, #FFD6B0);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info-icon i {
          font-size: 22px;
          color: #FF6B35;
        }
        .info-item strong {
          display: block;
          font-size: 13px;
          color: #FF6B35;
        }
        .info-item p {
          margin: 0;
          font-weight: 600;
        }
        
        .form-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .form-badge {
          display: inline-block;
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
          padding: 5px 18px;
          border-radius: 50px;
          font-size: 12px;
          margin-bottom: 15px;
        }
        .form-header h2 {
          font-size: 28px;
          margin-bottom: 8px;
        }
        .form-header p {
          color: #6B7280;
        }
        
        .progress-container {
          margin-bottom: 35px;
        }
        .progress-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .step-circle {
          width: 45px;
          height: 45px;
          background: #F0F0F0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          transition: all 0.3s;
        }
        .progress-step.active .step-circle {
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
          box-shadow: 0 0 0 5px rgba(255,107,53,0.2);
        }
        .progress-line {
          flex: 1;
          height: 3px;
          background: #F0F0F0;
          transition: background 0.3s;
        }
        .progress-line.active {
          background: linear-gradient(90deg, #FF6B35, #FF8C5A);
        }
        
        .form-step {
          display: none;
          animation: fadeIn 0.4s ease;
        }
        .form-step.active {
          display: block;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .form-step h3 {
          font-size: 22px;
          margin-bottom: 20px;
          color: #FF6B35;
        }
        .form-group {
          margin-bottom: 18px;
        }
        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 8px;
        }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          font-size: 15px;
          transition: all 0.3s;
          background: white;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: #FF6B35;
          outline: none;
          box-shadow: 0 0 0 3px rgba(255,107,53,0.1);
        }
        
        .review-card {
          background: white;
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .review-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #F0E6D3;
        }
        .review-row:last-child {
          border-bottom: none;
        }
        .review-row span { color: #6B7280; }
        .review-row strong { color: #2D2D2D; }
        
        .error-msg {
          background: #FEE2E2;
          color: #EF4444;
          padding: 12px 18px;
          border-radius: 16px;
          margin: 15px 0;
          font-size: 14px;
        }
        
        .form-buttons {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-top: 25px;
        }
        .btn-prev, .btn-next, .btn-submit {
          flex: 1;
          padding: 14px 20px;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }
        .btn-prev {
          background: #F0F0F0;
          color: #555;
        }
        .btn-prev:hover {
          background: #E5E5E5;
        }
        .btn-next, .btn-submit {
          background: linear-gradient(135deg, #FF6B35, #FF8C5A);
          color: white;
        }
        .btn-next:hover, .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255,107,53,0.3);
        }
        .spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid white;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        
        .success-card {
          text-align: center;
          padding: 40px;
          background: linear-gradient(135deg, #D1FAE5, #A7F3D0);
          border-radius: 28px;
          animation: successAnim 0.6s ease;
        }
        @keyframes successAnim {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .success-icon i {
          font-size: 60px;
          color: #10B981;
          margin-bottom: 15px;
        }
        .success-card h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        
        /* CTA Section */
        .cta-banner-contact {
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 70px 0;
          text-align: center;
        }
        .cta-floating-icons {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-bottom: 25px;
        }
        .cta-floating-icons i {
          font-size: 35px;
          color: white;
          animation: floatCta 3s infinite;
        }
        .cta-floating-icons i:nth-child(1) { animation-delay: 0s; }
        .cta-floating-icons i:nth-child(2) { animation-delay: 0.5s; }
        .cta-floating-icons i:nth-child(3) { animation-delay: 1s; }
        @keyframes floatCta {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cta-content h2 {
          font-size: 36px;
          color: white;
          margin-bottom: 15px;
        }
        .cta-content p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
        }
        .cta-btn {
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
        .cta-btn:hover {
          gap: 15px;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 900px) {
          .contact-grid-premium {
            grid-template-columns: 1fr;
          }
          .contact-title {
            font-size: 38px;
          }
          .contact-icon-hero {
            width: 55px;
            height: 55px;
            font-size: 24px;
          }
          .floating-contact-icons {
            gap: 12px;
          }
          .contact-info-premium, .contact-form-premium {
            padding: 25px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-title {
            font-size: 32px;
          }
          .contact-icon-hero {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }
          .form-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}