import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { artioData } from '../mock';

const Hero = () => {
  const scrollToProject = () => {
    const element = document.getElementById('project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      {/* Subtle glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A86A]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B8956A]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-playfair font-bold text-white tracking-wider mb-4">
            {artioData.brandName}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent mx-auto" />
        </div>

        {/* Tagline */}
        <p className="text-2xl md:text-4xl font-playfair text-white/90 mb-4 leading-relaxed">
          {artioData.tagline}
        </p>
        <p className="text-lg md:text-xl font-lato text-white/70 mb-12 max-w-3xl mx-auto">
          {artioData.subTagline}
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToProject}
          className="bg-[#C9A86A] hover:bg-[#B8956A] text-black font-lato font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg shadow-[#C9A86A]/20 hover:shadow-[#C9A86A]/40 hover:scale-105"
        >
          Explore the 3D View
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#C9A86A]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;