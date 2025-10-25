import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, Send } from 'lucide-react';
import { artioData } from '../mock';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

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

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: artioData.contactInfo.email,
      href: `mailto:${artioData.contactInfo.email}`,
      delay: 0.2
    },
    {
      icon: Phone,
      label: 'Phone',
      value: artioData.contactInfo.phone,
      href: `tel:${artioData.contactInfo.phone}`,
      delay: 0.4
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects with particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl"
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
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#14B8A6]/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
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
            {artioData.contactSection.title}
          </h2>
          <p className="text-lg md:text-xl font-lato text-white/70 max-w-3xl mx-auto">
            Turn your space into a 3D experience your clients won't forget. Let's make it happen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info - slides in from left */}
          <div className="space-y-8">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center space-x-4 text-white/80 hover:text-[#14B8A6] transition-colors group"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-14 h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center group-hover:bg-[#0D9488]/20 transition-colors border border-[#14B8A6]/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-6 h-6" />
                </motion.div>
                <div>
                  <div className="text-sm font-lato text-white/50 mb-1">{item.label}</div>
                  <div className="font-lato font-medium text-lg">{item.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social Media - slides in from left */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-sm font-lato text-white/50 mb-4">Follow Us</div>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: artioData.contactInfo.social.instagram },
                  { icon: Linkedin, href: artioData.contactInfo.social.linkedin }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#0D9488]/20 transition-colors border border-[#14B8A6]/20 group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <social.icon className="w-6 h-6 text-white/70 group-hover:text-[#14B8A6]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Form - slides in from right */}
          <motion.div
            className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#14B8A6]/10 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/5 to-[#14B8A6]/5 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`block text-sm font-lato font-medium mb-2 transition-colors duration-200 ${
                    focusedField === 'name' ? 'text-[#14B8A6]' : 'text-white/90'
                  }`}
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="bg-[#0a0a0a] border-[#14B8A6]/20 focus:border-[#14B8A6] text-white placeholder:text-white/30 transition-all duration-300"
                  placeholder="John Doe"
                />
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0D9488] to-[#14B8A6]"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`block text-sm font-lato font-medium mb-2 transition-colors duration-200 ${
                    focusedField === 'email' ? 'text-[#14B8A6]' : 'text-white/90'
                  }`}
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="bg-[#0a0a0a] border-[#14B8A6]/20 focus:border-[#14B8A6] text-white placeholder:text-white/30 transition-all duration-300"
                  placeholder="john@example.com"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0D9488] to-[#14B8A6]"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`block text-sm font-lato font-medium mb-2 transition-colors duration-200 ${
                    focusedField === 'message' ? 'text-[#14B8A6]' : 'text-white/90'
                  }`}
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className="bg-[#0a0a0a] border-[#14B8A6]/20 focus:border-[#14B8A6] text-white placeholder:text-white/30 resize-none transition-all duration-300"
                  placeholder="Tell us about your project..."
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0D9488] to-[#14B8A6]"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Submit Button with particle effect */}
              <motion.div className="relative">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#14B8A6] hover:to-[#5EEAD4] text-white font-lato font-semibold py-6 transition-all duration-300 shadow-lg shadow-[#0D9488]/30 hover:shadow-[#14B8A6]/50 relative overflow-hidden group"
                >
                  <motion.span
                    className="relative z-10 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </motion.span>
                  {/* Glow particles on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#14B8A6] to-[#5EEAD4]"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;