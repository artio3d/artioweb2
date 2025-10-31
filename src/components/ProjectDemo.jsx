import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { artioData } from '../mock';
import { useRef } from 'react';

const ProjectDemo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="project" ref={ref} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header with slide-in animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            {artioData.projectSection.title}
          </h2>
          <motion.p
            className="text-lg md:text-xl font-lato text-white/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {artioData.projectSection.description}
          </motion.p>
        </motion.div>

        {/* Matterport Embed with zoom effect */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0D9488]/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="aspect-video w-full"
            animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src={artioData.matterportUrl}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              allow="xr-spatial-tracking"
              title="3D Interior Tour"
            />
          </motion.div>
          {/* Animated glow border */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              border: '2px solid',
              borderImage: 'linear-gradient(45deg, #0D9488, #14B8A6, #5EEAD4) 1'
            }}
            animate={{
              opacity: isHovered ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating highlights on hover */}
          {isHovered && (
            <>
              <motion.div
                className="absolute top-4 left-4 w-3 h-3 bg-[#14B8A6] rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-[#5EEAD4] rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-4 left-1/2 w-3 h-3 bg-[#0D9488] rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </>
          )}
        </motion.div>

        {/* Additional info with fade-in */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/60 font-lato text-sm md:text-base">
            Use your mouse or touch to navigate • Explore every angle • Experience true immersion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDemo;