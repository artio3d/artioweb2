import React from 'react';
import { artioData } from '../mock';

const ProjectDemo = () => {
  return (
    <section id="project" className="py-24 bg-[#0a0a0a] relative">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            {artioData.projectSection.title}
          </h2>
          <p className="text-lg md:text-xl font-lato text-white/70 max-w-4xl mx-auto leading-relaxed">
            {artioData.projectSection.description}
          </p>
        </div>

        {/* Matterport Embed */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#C9A86A]/10">
          <div className="aspect-video w-full">
            <iframe
              src={artioData.matterportUrl}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              allow="xr-spatial-tracking"
              title="3D Interior Tour"
            />
          </div>
          {/* Glow border */}
          <div className="absolute inset-0 rounded-2xl border border-[#C9A86A]/20 pointer-events-none" />
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-white/60 font-lato text-sm md:text-base">
            Use your mouse or touch to navigate • Explore every angle • Experience true immersion
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDemo;