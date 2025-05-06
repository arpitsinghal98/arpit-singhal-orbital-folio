
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type TechCategory = {
  name: string;
  technologies: {
    name: string;
    icon: string;
  }[];
};

const techStack: TechCategory[] = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '🌊' },
      { name: 'Three.js', icon: '🎮' }
    ]
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Go', icon: '🐹' },
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'GraphQL', icon: '◼️' }
    ]
  },
  {
    name: 'Cloud',
    technologies: [
      { name: 'AWS', icon: '☁️' },
      { name: 'GCP', icon: '🌥️' },
      { name: 'Kubernetes', icon: '🚢' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Terraform', icon: '🏗️' }
    ]
  },
  {
    name: 'AI & ML',
    technologies: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'OpenAI', icon: '🤖' },
      { name: 'MLOps', icon: '⚙️' },
      { name: 'Hugging Face', icon: '🤗' }
    ]
  },
  {
    name: 'Mobile',
    technologies: [
      { name: 'React Native', icon: '📱' },
      { name: 'Swift', icon: '🍎' },
      { name: 'Kotlin', icon: '🤖' },
      { name: 'Flutter', icon: '💙' },
      { name: 'Capacitor', icon: '⚡' }
    ]
  }
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">{`{`}</span> Tech Stack <span className="text-primary">{`}`}</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My toolbox for building scalable, high-performance applications across the full technology stack.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="glass-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="bg-primary/10 p-4 border-b border-primary/20">
                <h3 className="text-xl font-semibold text-primary">{category.name}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="tech-card"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className="text-2xl mb-2">{tech.icon}</span>
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
