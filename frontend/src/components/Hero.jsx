import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { portfolioProjects, studioInfo } from '../mock';

const Hero = () => {
  const featuredProjects = portfolioProjects.filter(p => p.featured);

  return (
    <section id="home" className="min-h-screen bg-[#FAF8F6] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#2C2C2C] mb-6 leading-tight">
            {studioInfo.tagline}
          </h1>
          <p className="text-lg md:text-xl text-[#6B6660] font-lato max-w-3xl mx-auto">
            Transforming architectural visions into photorealistic 3D experiences
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className="relative mt-16">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id}>
                  <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <div className="text-[#C9A86A] text-sm font-lato mb-2 tracking-widest uppercase">
                        {project.category}
                      </div>
                      <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-3">
                        {project.title}
                      </h2>
                      <p className="text-white/90 text-lg font-lato max-w-2xl">
                        {project.description}
                      </p>
                      <div className="mt-4 text-white/70 text-sm font-lato">
                        Area: {project.area}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white text-[#2C2C2C] border-none" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white text-[#2C2C2C] border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;