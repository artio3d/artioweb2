import React from 'react';
import { QrCode, Smartphone, Share2 } from 'lucide-react';
import { artioData } from '../mock';
import { Button } from './ui/button';

const QRSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            {artioData.qrSection.title}
          </h2>
        </div>

        {/* QR Demo Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: QR Code Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <img
                src={artioData.qrCodeImage}
                alt="QR Code for 3D Tour"
                className="w-full max-w-md rounded-2xl shadow-2xl shadow-[#C9A86A]/20 transition-transform duration-300 group-hover:scale-105"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#C9A86A]/30 group-hover:border-[#C9A86A]/50 transition-colors" />
            </div>
          </div>

          {/* Right: Explanation */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl font-lato text-white/80 leading-relaxed">
              {artioData.qrSection.description}
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C9A86A]/20 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-[#C9A86A]" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                    Instant Access
                  </h3>
                  <p className="text-white/70 font-lato">
                    Scan with any smartphone camera — no app required
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C9A86A]/20 rounded-full flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-[#C9A86A]" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                    Multi-Platform
                  </h3>
                  <p className="text-white/70 font-lato">
                    Perfect for Airbnb, Booking.com, business cards, or brochures
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C9A86A]/20 rounded-full flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-[#C9A86A]" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                    Custom Branding
                  </h3>
                  <p className="text-white/70 font-lato">
                    Personalized QR codes that match your brand identity
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#C9A86A] hover:bg-[#B8956A] text-black font-lato font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg shadow-[#C9A86A]/20 hover:shadow-[#C9A86A]/40"
            >
              Get Your Custom QR
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;