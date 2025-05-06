
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { siteMetadata } from '@/config';
import { fadeInVariants } from '@/utils/animation';

// Define signature path points outside component for better organization
const signaturePath = [
  // A
  [0.2, 0.8], [0.225, 0.35], [0.25, 0.8],
  [0.215, 0.6], [0.245, 0.6],
  // r
  [0.27, 0.6], [0.27, 0.5], [0.29, 0.5], [0.29, 0.6],
  // p
  [0.31, 0.4], [0.31, 0.8], [0.335, 0.6], [0.355, 0.7], [0.335, 0.8],
  // i
  [0.37, 0.5], [0.37, 0.6],
  [0.37, 0.4], [0.37, 0.42],
  // t
  [0.39, 0.4], [0.39, 0.6],
  [0.36, 0.5], [0.42, 0.5],
  // S
  [0.45, 0.5], [0.44, 0.55], [0.45, 0.6], [0.44, 0.65],
  // i
  [0.47, 0.6], [0.47, 0.5],
  [0.47, 0.4], [0.47, 0.42],
  // n
  [0.49, 0.6], [0.49, 0.5], [0.51, 0.5], [0.51, 0.6],
  // g
  [0.53, 0.5], [0.53, 0.65], [0.51, 0.65], [0.51, 0.55],
  [0.53, 0.65], [0.53, 0.75], [0.535, 0.78],
  // h
  [0.545, 0.6], [0.545, 0.4], [0.56, 0.4], [0.56, 0.5], [0.545, 0.5],
  // a
  [0.565, 0.6], [0.58, 0.5], [0.565, 0.5], [0.565, 0.6],
  // l
  [0.59, 0.4], [0.59, 0.6]
];


const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated signature effect
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw animated signature
    ctx.strokeStyle = '#00BFFF';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    let currentPoint = 0;
    let progress = 0;

    const drawSignature = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.beginPath();
      
      // Only attempt to draw if we have points to work with
      if (signaturePath.length > 0) {
        for (let i = 0; i < currentPoint && i < signaturePath.length; i++) {
          const [x, y] = signaturePath[i];
          if (i === 0) {
            ctx.moveTo(x * canvas.width, y * canvas.height);
          } else {
            ctx.lineTo(x * canvas.width, y * canvas.height);
          }
        }
        
        if (currentPoint < signaturePath.length) {
          const [prevX, prevY] = signaturePath[currentPoint > 0 ? currentPoint - 1 : 0];
          const [nextX, nextY] = signaturePath[currentPoint];
          
          const x = prevX + (nextX - prevX) * progress;
          const y = prevY + (nextY - prevY) * progress;
          
          ctx.lineTo(x * canvas.width, y * canvas.height);
        }
      }
      
      ctx.stroke();
      
      progress += 0.05;
      if (progress >= 1) {
        progress = 0;
        currentPoint++;
        
        if (currentPoint >= signaturePath.length) {
          // Add glitch effect when signature is complete
          setTimeout(() => {
            const glitchInterval = setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              
              // Draw with random offset for glitch effect
              ctx.beginPath();
              for (let i = 0; i < signaturePath.length; i++) {
                const [x, y] = signaturePath[i];
                const offsetX = x + (Math.random() * 0.01 - 0.005);
                const offsetY = y + (Math.random() * 0.01 - 0.005);
                
                if (i === 0) {
                  ctx.moveTo(offsetX * canvas.width, offsetY * canvas.height);
                } else {
                  ctx.lineTo(offsetX * canvas.width, offsetY * canvas.height);
                }
              }
              ctx.stroke();
            }, 50);
            
            // Stop glitch effect after a short time
            setTimeout(() => {
              clearInterval(glitchInterval);
              currentPoint = 0;
              progress = 0;
            }, 500);
          }, 1000);
        }
      }
      
      requestAnimationFrame(drawSignature);
    };

    drawSignature();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Arpit Singhal
            </h1>
            
            {/* Signature canvas */}
            <div className="relative h-32 mb-6">
              <canvas 
                ref={canvasRef} 
                className="absolute inset-0 w-full h-full"
              ></canvas>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-foreground/80 mb-8"
            >
              Powering Organizational Growth with <br className="hidden md:block" />
              <span className="text-primary font-medium">Cloud Native</span> and <span className="text-primary font-medium">AI Software</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col md:flex-row justify-center gap-4 md:gap-6"
            >
              <Button size="lg" className="rounded-full px-8">
                Explore Projects
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#projects">
          <ChevronDown className="text-primary/70" size={30} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
