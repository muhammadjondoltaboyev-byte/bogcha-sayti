import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <i className="fas fa-star" style={{ fontSize: 28, color: '#FFE66D' }}></i>
          <span>Quvnoq Bolajonlar</span>
        </div>
        <div className="footer-links">
          <Link to="/groups">Guruhlar</Link>
          <Link to="/teachers">Tarbiyachilar</Link>
          <Link to="/services">Narxlar</Link>
          <Link to="/facilities">Imkoniyatlar</Link>
          <Link to="/about">Biz haqimizda</Link>
          <Link to="/contact">Bog'lanish</Link>
        </div>
        <div className="footer-contact">
          <p><i className="fas fa-map-marker-alt"></i> Farg'ona viloyati, Dang'ara tumani, G'umoyli ko'chasi 12-uy</p>
          <p><i className="fas fa-phone-alt"></i> +998 91 685 16 85 | <i className="fas fa-clock"></i> 08:00–18:00</p>
          <p style={{ marginTop: 10 }}>
            <a href="https://t.me/Muhammadjon_85" target="_blank" rel="noreferrer" style={{ color: 'white', margin: '0 8px', fontSize: 20 }}>
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://wa.me/998916851685" target="_blank" rel="noreferrer" style={{ color: 'white', margin: '0 8px', fontSize: 20 }}>
              <i className="fab fa-whatsapp"></i>
            </a>
          </p>
        </div>
        <p className="footer-copy">© 2025 Quvnoq Bolajonlar. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
}