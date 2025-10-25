import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { studioInfo } from '../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FAF8F6]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-playfair font-semibold text-[#2C2C2C] tracking-wide">
          {studioInfo.name}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-[#6B6660] hover:text-[#C9A86A] transition-colors duration-200 font-lato"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#6B6660] hover:text-[#C9A86A] transition-colors duration-200 font-lato"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-[#6B6660] hover:text-[#C9A86A] transition-colors duration-200 font-lato"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-[#C9A86A] text-white rounded hover:bg-[#B8956A] transition-colors duration-200 font-lato"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2C2C2C]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#FAF8F6] border-t border-[#E8E3DD]">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-[#6B6660] hover:text-[#C9A86A] transition-colors duration-200 font-lato"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-[#6B6660] hover:text-[#C9A86A] transition-colors duration-200 font-lato"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left text-[#6B6660] hover:text-[#C9A86A] transition-colors duration-200 font-lato"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#C9A86A] text-white rounded hover:bg-[#B8956A] transition-colors duration-200 font-lato text-center"
            >
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;