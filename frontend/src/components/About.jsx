import React from 'react';
import { Lightbulb, Eye, Award } from 'lucide-react';
import { studioInfo } from '../mock';

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Creative Vision',
      description: 'Innovative approaches to spatial design and visualization'
    },
    {
      icon: Eye,
      title: 'Attention to Detail',
      description: 'Meticulous focus on lighting, materials, and atmosphere'
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'Industry-leading photorealistic rendering standards'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#E8E3DD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] mb-6">
              About Our Studio
            </h2>
            <p className="text-lg text-[#6B6660] font-lato leading-relaxed mb-8">
              {studioInfo.about}
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A86A] rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-[#2C2C2C] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B6660] font-lato">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Studio workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#C9A86A]/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;