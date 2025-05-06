
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectsOrbit from '@/components/ProjectsOrbit';
import TechStack from '@/components/TechStack';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundParticles from '@/components/BackgroundParticles';
import { siteMetadata } from '@/config';

const Index = () => {
  useEffect(() => {
    document.title = siteMetadata.title;

    // Re-trigger animations when scrolling up and down
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate when section is in view
        if (sectionTop < windowHeight * 0.75 && sectionTop > -sectionHeight * 0.5) {
          section.classList.add('in-view');
        } else {
          section.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background elements */}
      <BackgroundParticles />
      
      {/* Content */}
      <Header />
      <main>
        <Hero />
        <ProjectsOrbit />
        <TechStack />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
