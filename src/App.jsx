import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Facilities from './pages/Facilities';
import Groups from './pages/Groups';
import Teachers from './pages/Teachers';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleNavLinkClick = () => {
    setMobileNavOpen(false);
  };

  return (
    <BrowserRouter>
      <Header mobileNavOpen={mobileNavOpen} onToggleMobile={toggleMobileNav} onLinkClick={handleNavLinkClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;