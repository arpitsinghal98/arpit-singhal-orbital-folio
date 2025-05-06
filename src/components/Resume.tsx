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

          <div className="p-6 md:p-8 space-y-8">
            {/* Summary */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Summary</h4>
              <p className="text-foreground/80">
                Software engineer with strong experience building full-stack systems and using cloud platforms
                to create scalable, high-performing applications. Skilled in designing systems that serve
                millions of users and writing maintainable code. Proficient with React, Node.js, Docker, and
                AWS, focused on solving problems through efficient software solutions.
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Work Experience</h4>

              <div className="space-y-6">
                {/* ONEBIT INC */}
                <div className="border-l-2 border-primary/30 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h5 className="text-md font-medium">Software Engineer</h5>
                  <div className="flex justify-between text-sm text-foreground/70 mb-2">
                    <span>ONEBIT INC.</span>
                    <span>Jan 2025 – Present</span>
                  </div>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1 text-sm">
                    <li>Built fintech dashboard integrating accounting, inventory, and sales data</li>
                    <li>Developed full-stack features using React.js, Node.js, and PostgreSQL</li>
                    <li>Automated financial data ingestion via third-party APIs</li>
                    <li>Collaborated across teams to improve delivery velocity and UX</li>
                    <li>Set up CI/CD pipelines ensuring faster, stable deployments</li>
                  </ul>
                </div>

                {/* Accenture */}
                <div className="border-l-2 border-primary/30 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h5 className="text-md font-medium">Software Engineer</h5>
                  <div className="flex justify-between text-sm text-foreground/70 mb-2">
                    <span>Accenture (Client: VMware)</span>
                    <span>Jan 2022 – Dec 2022</span>
                  </div>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1 text-sm">
                    <li>Delivered scalable cloud infrastructure software used by 8M+ users</li>
                    <li>Built REST APIs improving data integration and service communication</li>
                    <li>Automated monitoring systems using Python, improving uptime</li>
                    <li>Optimized database performance, reducing query time by 30%</li>
                  </ul>
                </div>

                {/* TCS */}
                <div className="border-l-2 border-primary/30 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h5 className="text-md font-medium">Software Engineer</h5>
                  <div className="flex justify-between text-sm text-foreground/70 mb-2">
                    <span>Tata Consultancy Services (Client: AbbVie)</span>
                    <span>Jul 2019 – Jan 2022</span>
                  </div>
                  <ul className="list-disc list-inside text-foreground/80 space-y-1 text-sm">
                    <li>Integrated enterprise systems to reduce sync latency by 20%</li>
                    <li>Created SQL tools to auto-detect and fix data issues</li>
                    <li>Automated user provisioning saving 1000+ hours/year</li>
                    <li>Trained 200+ users and improved onboarding experience</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Education</h4>

              <div className="border-l-2 border-primary/30 pl-5 relative space-y-6">
                <div>
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h5 className="text-md font-medium">MS in Computer Science</h5>
                  <div className="flex justify-between text-sm text-foreground/70 mb-2">
                    <span>Illinois Institute of Technology</span>
                    <span>2023 – 2024</span>
                  </div>
                  <p className="text-foreground/80 text-sm">
                    GPA: 4.0 · Graduate TA for Full-stack Development (React, Node.js, AWS)
                  </p>
                </div>

                <div>
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-[7.5rem]"></div>
                  <h5 className="text-md font-medium">Bachelor’s in ECE</h5>
                  <div className="flex justify-between text-sm text-foreground/70 mb-2">
                    <span>JECRC, Jaipur</span>
                    <span>2015 – 2019</span>
                  </div>
                  <p className="text-foreground/80 text-sm">GPA: 3.4</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Skills</h4>

              <ul className="list-disc list-inside text-foreground/80 space-y-1 text-sm">
                <li><strong>Languages:</strong> Python, Java, C/C++, JavaScript, Node.js, TypeScript, HTML/CSS, Swift</li>
                <li><strong>Frameworks/Tools:</strong> React, Flask, Next.js, Docker, Elasticsearch, Git, Postman, Redux, Tailwind CSS, Jest</li>
                <li><strong>Databases:</strong> Postgres, MongoDB, SQL, NoSQL, MySQL, Oracle, Cassandra, Firebase, Redis</li>
                <li><strong>Cloud:</strong> AWS (EC2, S3, Lambda), Azure, GCP, Netlify, Heroku, Nginx, Vercel</li>
                <li><strong>Other:</strong> REST APIs, GraphQL, WebSockets, Microservices, CI/CD Pipelines, Kafka, Supabase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;