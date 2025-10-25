import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { QrCode, Smartphone, Share2 } from 'lucide-react';
import { artioData } from '../mock';
import { Button } from './ui/button';

const QRSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isFlipped, setIsFlipped] = useState(false);

  const features = [
    {
      icon: Smartphone,
      title: 'Instant Access',
      description: 'Scan with any smartphone camera — no app required'
    },
    {
      icon: Share2,
      title: 'Multi-Platform',
      description: 'Perfect for Airbnb, Booking.com, business cards, or brochures'
    },
    {
      icon: QrCode,
      title: 'Custom Branding',
      description: 'Personalized QR codes that match your brand identity'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            {artioData.qrSection.title}
          </h2>
        </motion.div>

        {/* QR Demo Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Animated Flip QR Code Card */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md h-[500px] perspective-1000">
              <motion.div
                className="relative w-full h-full cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front of card - QR Image */}
                <div
                  className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl shadow-[#0D9488]/30"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={artioData.qrCodeImage}
                    alt="QR Code for 3D Tour"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-2 border-[#14B8A6]/30 rounded-2xl" />
                  <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm font-lato bg-[#0a0a0a]/80 px-4 py-2 rounded-full"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Click to flip
                  </motion.div>
                </div>

                {/* Back of card - Info */}
                <div
                  className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-[#0D9488]/90 to-[#14B8A6]/90 p-8 flex flex-col justify-center items-center text-center shadow-2xl"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <QrCode className="w-16 h-16 text-white mb-6" />
                  <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                    Scan & Share
                  </h3>
                  <p className="text-white/90 font-lato leading-relaxed">
                    This QR code opens your 3D tour instantly. Perfect for property listings, marketing materials, and client presentations.
                  </p>
                  <motion.div
                    className="mt-6 text-white/70 text-sm font-lato"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Click to flip back
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Staggered feature list */}
          <div className="space-y-8">
            <motion.p
              className="text-lg md:text-xl font-lato text-white/80 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {artioData.qrSection.description}
            </motion.p>

            {/* Feature List with staggered animation */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-[#0D9488]/20 rounded-full flex items-center justify-center group-hover:bg-[#0D9488]/40 transition-colors border border-[#14B8A6]/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6 text-[#14B8A6]" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-white mb-2 group-hover:text-[#14B8A6] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 font-lato">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#14B8A6] hover:to-[#5EEAD4] text-white font-lato font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg shadow-[#0D9488]/30 hover:shadow-[#14B8A6]/50 hover:scale-105"
              >
                Get Your Custom QR
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;