import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
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
      {/* Animated geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border border-[#0D9488]/20 rounded-lg"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-32 w-48 h-48 border border-[#14B8A6]/20 rounded-full"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-32 h-32 border border-[#5EEAD4]/20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated Logo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, rotateX: -20 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-9xl font-playfair font-bold text-white tracking-wider mb-4">
            {artioData.brandName}
          </h1>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Typed Animation Tagline */}
        <div className="text-2xl md:text-4xl font-playfair text-white/90 mb-4 leading-relaxed min-h-[120px] flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'Step into your space… before it exists.',
              2000,
              'Interactive 3D interiors that sell, not just show.',
              2000,
              'Immersive 3D interior experiences.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* CTA Button with 3D hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Button
            onClick={scrollToProject}
            className="relative bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#14B8A6] hover:to-[#5EEAD4] text-white font-lato font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg shadow-[#0D9488]/30 hover:shadow-[#14B8A6]/50 hover:scale-105 group overflow-hidden"
          >
            <motion.span
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Explore the 3D View
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#14B8A6] to-[#5EEAD4]"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0.3 }}
              transition={{ duration: 0.6 }}
            />
          </Button>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-[#14B8A6]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;