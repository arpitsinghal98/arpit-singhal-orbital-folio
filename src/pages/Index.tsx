
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
