import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { artioData } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#C9A86A]/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Brand Name */}
          <div className="text-3xl font-playfair font-bold text-white tracking-wider">
            {artioData.brandName}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href={artioData.contactInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#C9A86A]/20 transition-colors border border-[#C9A86A]/20 group"
            >
              <Instagram className="w-5 h-5 text-white/70 group-hover:text-[#C9A86A]" />
            </a>
            <a
              href={artioData.contactInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#C9A86A]/20 transition-colors border border-[#C9A86A]/20 group"
            >
              <Linkedin className="w-5 h-5 text-white/70 group-hover:text-[#C9A86A]" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-white/70 font-lato text-sm">
              {artioData.footer.copyright}
            </p>
            <p className="text-white/40 font-lato text-xs">
              {artioData.footer.poweredBy}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;