import React, { useState } from 'react';
import { Mail, Phone, Instagram, Linkedin, Send } from 'lucide-react';
import { contactInfo } from '../mock';
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
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#E8E3DD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-[#6B6660] font-lato mb-8 leading-relaxed">
              Ready to bring your interior vision to life? Get in touch to discuss your project and receive a personalized quote.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-4 text-[#6B6660] hover:text-[#C9A86A] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#FAF8F6] rounded-full flex items-center justify-center group-hover:bg-[#C9A86A] transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm font-lato text-[#6B6660] mb-1">Email</div>
                  <div className="font-lato font-medium">{contactInfo.email}</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-4 text-[#6B6660] hover:text-[#C9A86A] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#FAF8F6] rounded-full flex items-center justify-center group-hover:bg-[#C9A86A] transition-colors">
                  <Phone className="w-5 h-5 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm font-lato text-[#6B6660] mb-1">Phone</div>
                  <div className="font-lato font-medium">{contactInfo.phone}</div>
                </div>
              </a>

              {/* Social Media */}
              <div className="pt-4">
                <div className="text-sm font-lato text-[#6B6660] mb-4">Follow Us</div>
                <div className="flex space-x-4">
                  <a
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#FAF8F6] rounded-full flex items-center justify-center hover:bg-[#C9A86A] transition-colors group"
                  >
                    <Instagram className="w-5 h-5 text-[#6B6660] group-hover:text-white" />
                  </a>
                  <a
                    href={contactInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#FAF8F6] rounded-full flex items-center justify-center hover:bg-[#C9A86A] transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-[#6B6660] group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-lato font-medium text-[#2C2C2C] mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-[#E8E3DD] focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-lato font-medium text-[#2C2C2C] mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-[#E8E3DD] focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-lato font-medium text-[#2C2C2C] mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-[#E8E3DD] focus:border-[#C9A86A] focus:ring-[#C9A86A] resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#C9A86A] hover:bg-[#B8956A] text-white font-lato py-6 transition-colors duration-200"
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