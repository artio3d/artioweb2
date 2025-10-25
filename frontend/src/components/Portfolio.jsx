import React, { useState } from 'react';
import { X } from 'lucide-react';
import { portfolioProjects } from '../mock';
import { Card } from './ui/card';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-[#6B6660] font-lato max-w-2xl mx-auto">
            Explore our collection of immersive 3D interior visualizations
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="text-[#C9A86A] text-xs font-lato mb-2 tracking-widest uppercase">
                  {project.category}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#C9A86A] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#6B6660] font-lato text-sm mb-3">
                  {project.description}
                </p>
                <div className="text-[#6B6660] text-xs font-lato">
                  Area: {project.area}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#1A1A1A]/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-[#2C2C2C]" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-[70vh] object-cover"
            />
            <div className="p-8">
              <div className="text-[#C9A86A] text-sm font-lato mb-2 tracking-widest uppercase">
                {selectedProject.category}
              </div>
              <h3 className="text-3xl font-playfair font-bold text-[#2C2C2C] mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-[#6B6660] font-lato text-lg mb-4">
                {selectedProject.description}
              </p>
              <div className="text-[#6B6660] font-lato">
                Area: {selectedProject.area}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;