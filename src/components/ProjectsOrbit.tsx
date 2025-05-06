
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects, Project } from '@/data/projects';
import { calculateOrbitPosition, fadeInUpVariant } from '@/utils/animation';

const ProjectsOrbit = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [orbitPaused, setOrbitPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setOrbitPaused(true);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    setOrbitPaused(false);
  };

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbitPaused || !containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / 50;
      const y = (clientY - top - height / 2) / 50;
      
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [orbitPaused]);

  // Animation for section when scrolling into view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      id="projects" 
      className="relative min-h-screen flex items-center justify-center py-20"
      ref={sectionRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] hero-gradient opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Projects <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore my interactive project showcase. Each project represents a unique challenge and solution in modern software engineering.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ scale, opacity }}
          className="orbit-container relative mx-auto" 
          ref={containerRef} 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Central core */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center z-10"
            animate={{ scale: [1, 1.1, 1], boxShadow: ['0 0 20px rgba(0, 191, 255, 0.3)', '0 0 30px rgba(0, 191, 255, 0.5)', '0 0 20px rgba(0, 191, 255, 0.3)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-xl font-bold text-primary">AS</div>
          </motion.div>
          
          {/* Orbit elements */}
          <div className="relative w-[300px] h-[300px] mx-auto" style={{ transformStyle: 'preserve-3d' }}>
            {projects.map((project, index) => {
              const { x, y, z } = calculateOrbitPosition(index, projects.length, 150);
              const initialX = x;
              const initialY = y;
              const initialZ = z;
              
              return (
                <motion.div
                  key={project.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-card/80 rounded-lg cursor-pointer backdrop-blur-sm hover:scale-110 transition-transform duration-300 flex items-center justify-center glass-card border-primary/30"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `translate3d(${initialX}px, ${initialY}px, ${initialZ}px)`,
                    zIndex: initialZ < 0 ? 0 : 1,
                  }}
                  initial={false}
                  animate={
                    orbitPaused 
                      ? {} 
                      : { 
                          transform: [
                            `translate3d(${initialX}px, ${initialY}px, ${initialZ}px)`,
                            `translate3d(${-initialY}px, ${initialX}px, ${initialZ}px)`,
                            `translate3d(${-initialX}px, ${-initialY}px, ${initialZ}px)`,
                            `translate3d(${initialY}px, ${-initialX}px, ${initialZ}px)`,
                            `translate3d(${initialX}px, ${initialY}px, ${initialZ}px)`,
                          ],
                          transition: { 
                            duration: 20, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }
                        }
                  }
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="text-primary font-bold">{project.id}</div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Selected project detail */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative max-w-4xl w-full glass-card rounded-xl overflow-hidden"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <button 
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
                    onClick={closeProjectDetail}
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                      <div className="h-64 md:h-full relative overflow-hidden">
                        <img 
                          src={selectedProject.image} 
                          alt={selectedProject.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 p-6 md:p-8">
                      <h3 className="text-2xl font-bold mb-3 text-primary">{selectedProject.title}</h3>
                      <p className="text-foreground/80 mb-4">{selectedProject.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm uppercase tracking-wider text-foreground/60 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <Button
                          variant="default" 
                          className="flex items-center gap-2"
                          onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                        >
                          <ExternalLink size={16} /> Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          className="flex items-center gap-2"
                          onClick={() => window.open(selectedProject.codeUrl, '_blank')}
                        >
                          <Github size={16} /> Source Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsOrbit;
