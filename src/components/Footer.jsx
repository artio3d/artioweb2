import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { artioData } from '../mock';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="bg-[#0a0a0a] border-t border-[#14B8A6]/10 py-12 relative overflow-hidden">
      {/* Animated floating cubes/geometric elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-[#14B8A6]/30"
            style={{
              left: `${20 + i * 30}%`,
              bottom: `${10 + i * 20}%`,
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-6">
          {/* Brand Name */}
          <motion.div
            className="text-3xl font-playfair font-bold text-white tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {artioData.brandName}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: Instagram, href: artioData.contactInfo.social.instagram },
              { icon: Linkedin, href: artioData.contactInfo.social.linkedin }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#0D9488]/20 transition-colors border border-[#14B8A6]/20 group"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <social.icon className="w-5 h-5 text-white/70 group-hover:text-[#14B8A6]" />
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Divider */}
          <motion.div
            className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-[#14B8A6]/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Copyright */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-white/70 font-lato text-sm">
              {artioData.footer.copyright}
            </p>
            <p className="text-white/40 font-lato text-xs">
              {artioData.footer.poweredBy}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;