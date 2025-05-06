
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Analytics Platform',
    description: 'Enterprise dashboard with predictive analytics capabilities, real-time monitoring, and customizable data visualizations.',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'Cloud-Native Microservices Architecture',
    description: 'Scalable microservices platform with containerization, service mesh, and automated deployment pipelines.',
    technologies: ['Kubernetes', 'Docker', 'Go', 'Istio', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Real-Time Collaboration Tool',
    description: 'Interactive workspace allowing teams to collaborate on documents, designs, and code in real-time.',
    technologies: ['WebSockets', 'React', 'Node.js', 'MongoDB', 'Redis'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Serverless E-commerce Backend',
    description: 'Fully serverless backend infrastructure for e-commerce platforms with event-driven architecture.',
    technologies: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'EventBridge', 'CDK'],
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    title: 'Machine Learning Operations Platform',
    description: 'End-to-end MLOps solution for model training, versioning, deployment, and monitoring in production environments.',
    technologies: ['Python', 'Kubernetes', 'TensorFlow', 'Kubeflow', 'GitOps'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
];

const ProjectsOrbit = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [orbitPaused, setOrbitPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const calculatePosition = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2;
    const radius = 150; // Orbit radius
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * 0.3; // Flatten the orbit a bit
    const z = Math.sin(angle) * radius;

    return { x, y, z };
  };

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

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] hero-gradient opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Projects <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore my interactive project showcase. Each project represents a unique challenge and solution in modern software engineering.
          </p>
        </motion.div>
        
        <div className="orbit-container relative mx-auto" ref={containerRef} style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
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
              const { x, y, z } = calculatePosition(index, projects.length);
              
              return (
                <motion.div
                  key={project.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-card/80 rounded-lg cursor-pointer backdrop-blur-sm hover:scale-110 transition-transform duration-300 flex items-center justify-center glass-card border-primary/30"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                    zIndex: z < 0 ? 0 : 1,
                  }}
                  initial={false}
                  animate={
                    orbitPaused 
                      ? {} 
                      : { 
                          transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${index * (360 / projects.length)}deg)`,
                          transition: { 
                            duration: 20, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }
                        }
                  }
                  whileHover={{ scale: 1.2 }}
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsOrbit;
