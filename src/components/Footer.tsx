
import React from 'react';
import { motion } from 'framer-motion';
import { siteMetadata } from '@/config';
import { fadeInVariants } from '@/utils/animation';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-primary/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <div className="text-xl font-bold text-primary flex items-center">
              <div className="mr-2 relative overflow-hidden">
                <span className="inline-block bg-primary text-background px-2 py-1 rounded">AS</span>
              </div>
              <span>Arpit Singhal</span>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-0 text-foreground/60 text-sm"
          >
            &copy; {year} {siteMetadata.author}. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
