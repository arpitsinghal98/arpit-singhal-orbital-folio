
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Download, 
  ChevronRight 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="text-xl font-bold text-primary flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mr-2 relative overflow-hidden">
            <span className="inline-block bg-primary text-background px-2 py-1 rounded">AS</span>
          </div>
          <span className="hidden md:inline-block">Arpit Singhal</span>
        </motion.div>

        <nav className="flex items-center space-x-1 md:space-x-4">
          {["Projects", "Skills", "Resume", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hidden md:inline-block text-sm px-3 py-2 hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}

          <motion.div
            className="flex space-x-2 ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-card/50 transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-card/50 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <Button variant="outline" size="sm" className="hidden md:flex items-center text-xs">
              <Download size={14} className="mr-1" /> Resume
            </Button>
            <Button size="sm" className="hidden md:flex items-center text-xs">
              Let's Talk <ChevronRight size={14} className="ml-1" />
            </Button>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
