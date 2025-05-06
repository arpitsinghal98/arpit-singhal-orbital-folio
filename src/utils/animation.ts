
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
export const calculateOrbitPosition = (index: number, total: number, radius: number) => {
  const angle = (index / total) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius * 0.3; // Flatten the orbit a bit
  const z = Math.sin(angle) * radius;

  return { x, y, z };
};
