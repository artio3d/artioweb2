import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { studioInfo, contactInfo } from '../mock';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Left: Brand */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              {studioInfo.name}
            </h3>
            <p className="text-white/70 font-lato text-sm leading-relaxed">
              Creating immersive 3D interior experiences that transform architectural visions into reality.
            </p>
          </div>

          {/* Middle: Navigation */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-white/70 hover:text-[#C9A86A] transition-colors font-lato text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-white/70 hover:text-[#C9A86A] transition-colors font-lato text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block text-white/70 hover:text-[#C9A86A] transition-colors font-lato text-sm"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-white/70 hover:text-[#C9A86A] transition-colors font-lato text-sm"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Right: Contact & Social */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-white/70 hover:text-[#C9A86A] transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span className="font-lato text-sm">{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A86A] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A86A] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 font-lato text-sm">
            © {new Date().getFullYear()} {studioInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;