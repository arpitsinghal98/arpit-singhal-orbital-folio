
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="absolute inset-0 bg-card/30 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Resume</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            View, download or explore my professional experience and skills.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto glass-card rounded-xl overflow-hidden shadow-xl">
          <div className="flex justify-between items-center p-6 border-b border-primary/20">
            <h3 className="text-xl font-semibold">Arpit Singhal - Software Engineer</h3>
            <div className="flex space-x-3">
              <Button size="sm" variant="default" className="flex items-center gap-2">
                <Download size={16} /> Download Resume
              </Button>
              <Button size="sm" variant="outline" className="flex items-center gap-2">
                <ExternalLink size={16} /> View Full Resume
              </Button>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            {/* Resume content */}
            <div className="space-y-8">
              {/* Professional Summary */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Professional Summary</h4>
                <p className="text-foreground/80">
                  Senior Software Engineer with a focus on cloud-native applications and AI solutions. 
                  Experienced in building scalable, resilient systems that drive organizational growth. 
                  Combines strong technical expertise with business acumen to deliver transformative solutions.
                </p>
              </div>
              
              {/* Work Experience */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Work Experience</h4>
                
                <div className="space-y-6">
                  {/* Job 1 */}
                  <div className="border-l-2 border-primary/30 pl-5 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h5 className="text-md font-medium">Senior Software Engineer</h5>
                    <div className="flex justify-between text-sm text-foreground/70 mb-2">
                      <span>TechCorp Inc.</span>
                      <span>2020 - Present</span>
                    </div>
                    <ul className="list-disc list-inside text-foreground/80 space-y-1 text-sm">
                      <li>Led development of cloud-native microservices architecture</li>
                      <li>Implemented MLOps pipelines for automated model training and deployment</li>
                      <li>Architected real-time data processing system handling 10M+ daily events</li>
                    </ul>
                  </div>
                  
                  {/* Job 2 */}
                  <div className="border-l-2 border-primary/30 pl-5 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h5 className="text-md font-medium">Software Engineer</h5>
                    <div className="flex justify-between text-sm text-foreground/70 mb-2">
                      <span>InnovateSoft</span>
                      <span>2018 - 2020</span>
                    </div>
                    <ul className="list-disc list-inside text-foreground/80 space-y-1 text-sm">
                      <li>Developed full-stack applications using React and Node.js</li>
                      <li>Optimized database performance for high-traffic web applications</li>
                      <li>Implemented CI/CD pipelines for automated testing and deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Education</h4>
                
                <div className="border-l-2 border-primary/30 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h5 className="text-md font-medium">MS in Computer Science</h5>
                  <div className="flex justify-between text-sm text-foreground/70 mb-2">
                    <span>University of Technology</span>
                    <span>2016 - 2018</span>
                  </div>
                  <p className="text-foreground/80 text-sm">
                    Specialization in Artificial Intelligence and Distributed Systems
                  </p>
                </div>
              </div>
              
              {/* Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Certifications</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass-card p-3 rounded-lg border border-primary/10">
                    <span className="text-sm font-medium">AWS Solutions Architect Professional</span>
                  </div>
                  <div className="glass-card p-3 rounded-lg border border-primary/10">
                    <span className="text-sm font-medium">Google Cloud Professional Data Engineer</span>
                  </div>
                  <div className="glass-card p-3 rounded-lg border border-primary/10">
                    <span className="text-sm font-medium">Kubernetes Administrator (CKA)</span>
                  </div>
                  <div className="glass-card p-3 rounded-lg border border-primary/10">
                    <span className="text-sm font-medium">Salesforce Platform Developer II</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
