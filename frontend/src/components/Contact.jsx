import React, { useState } from 'react';
import { Mail, Phone, Instagram, Linkedin, Send } from 'lucide-react';
import { artioData } from '../mock';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            {artioData.contactSection.title}
          </h2>
          <p className="text-lg md:text-xl font-lato text-white/70 max-w-3xl mx-auto">
            {artioData.contactSection.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <a
              href={`mailto:${artioData.contactInfo.email}`}
              className="flex items-center space-x-4 text-white/80 hover:text-[#C9A86A] transition-colors group"
            >
              <div className="w-14 h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center group-hover:bg-[#C9A86A]/20 transition-colors border border-[#C9A86A]/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-lato text-white/50 mb-1">Email</div>
                <div className="font-lato font-medium text-lg">{artioData.contactInfo.email}</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${artioData.contactInfo.phone}`}
              className="flex items-center space-x-4 text-white/80 hover:text-[#C9A86A] transition-colors group"
            >
              <div className="w-14 h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center group-hover:bg-[#C9A86A]/20 transition-colors border border-[#C9A86A]/20">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-lato text-white/50 mb-1">Phone</div>
                <div className="font-lato font-medium text-lg">{artioData.contactInfo.phone}</div>
              </div>
            </a>

            {/* Social Media */}
            <div className="pt-8">
              <div className="text-sm font-lato text-white/50 mb-4">Follow Us</div>
              <div className="flex space-x-4">
                <a
                  href={artioData.contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#C9A86A]/20 transition-colors border border-[#C9A86A]/20 group"
                >
                  <Instagram className="w-6 h-6 text-white/70 group-hover:text-[#C9A86A]" />
                </a>
                <a
                  href={artioData.contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#C9A86A]/20 transition-colors border border-[#C9A86A]/20 group"
                >
                  <Linkedin className="w-6 h-6 text-white/70 group-hover:text-[#C9A86A]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C9A86A]/10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-lato font-medium text-white/90 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#0a0a0a] border-[#C9A86A]/20 focus:border-[#C9A86A] text-white placeholder:text-white/30"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-lato font-medium text-white/90 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#0a0a0a] border-[#C9A86A]/20 focus:border-[#C9A86A] text-white placeholder:text-white/30"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-lato font-medium text-white/90 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-[#0a0a0a] border-[#C9A86A]/20 focus:border-[#C9A86A] text-white placeholder:text-white/30 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#C9A86A] hover:bg-[#B8956A] text-black font-lato font-semibold py-6 transition-all duration-300 shadow-lg shadow-[#C9A86A]/20 hover:shadow-[#C9A86A]/40"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;