
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { socialLinks, contactInfo } from '@/config';
import { fadeInUpVariant } from '@/utils/animation';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">&lt;/&gt;</span> Let's Connect <span className="text-primary">&lt;/&gt;</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Reach out and let's create something amazing together.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-card/50 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-card/50 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-card/50 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <div className="glass-card rounded-xl p-6 md:p-8 mb-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-primary mt-1 mr-3" size={20} />
                    <div>
                      <h4 className="text-sm font-medium">Email</h4>
                      <a href={`mailto:${contactInfo.email}`} className="text-foreground/70 hover:text-primary transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <a 
                    href={socialLinks.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-card/50 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Github size={20} className="text-primary mr-4" />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href={socialLinks.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-card/50 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin size={20} className="text-primary mr-4" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href={socialLinks.trailhead}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-card/50 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-primary mr-4 text-xl">⛰️</span>
                    <span>Salesforce Trailhead</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
