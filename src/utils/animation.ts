
import { animationSettings } from '@/config';

// Common animation variants for framer-motion
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: animationSettings.defaultDuration }
  }
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: animationSettings.defaultDuration }
  }
};

export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: animationSettings.defaultDuration }
  }
};

// Function to calculate orbit position
export function calculateOrbitPosition(index: number, total: number, radius: number) {
  const angle = (index / total) * 2 * Math.PI;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  const z = 0; // optional: can be used for 3D effect
  return { x, y, z };
}

// Scroll animation utilities
export const getScrollAnimation = (direction: 'left' | 'right' | 'up' | 'down', distance = 100) => {
  const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
  const y = direction === 'up' ? -distance : direction === 'down' ? distance : 0;
  
  return {
    hidden: { opacity: 0, x, y },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        duration: animationSettings.defaultDuration,
        ease: "easeOut" 
      }
    }
  };
};

// Animation props for custom framer motion components
import { MotionValue, useTransform } from 'framer-motion';

export const useScrollBasedAnimation = (scrollYProgress: MotionValue<number>, inRange: [number, number], outRange: [number, number]) => {
  const transform = useTransform(scrollYProgress, inRange, outRange);
  return { transform };
};
