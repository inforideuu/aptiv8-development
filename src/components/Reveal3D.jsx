import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal3D wraps children with an elegant 3D perspective fold-in/slide-up
 * effect that triggers automatically as the user scrolls them into the viewport.
 */
export default function Reveal3D({ 
  children, 
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'zoom' | 'flip'
  delay = 0,
  duration = 0.8,
  className = "w-full",
  once = true,
  amount = 0.15
}) {
  const getVariants = () => {
    switch (direction) {
      case 'left':
        return {
          hidden: { opacity: 0, x: -60, rotateY: 10, scale: 0.96, filter: 'blur(4px)' },
          visible: { opacity: 1, x: 0, rotateY: 0, scale: 1, filter: 'blur(0px)' }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 60, rotateY: -10, scale: 0.96, filter: 'blur(4px)' },
          visible: { opacity: 1, x: 0, rotateY: 0, scale: 1, filter: 'blur(0px)' }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -50, rotateX: -10, scale: 0.96, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.88, y: 30, filter: 'blur(6px)' },
          visible: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }
        };
      case 'flip':
        return {
          hidden: { opacity: 0, rotateX: 25, y: 50, scale: 0.94, filter: 'blur(4px)' },
          visible: { opacity: 1, rotateX: 0, y: 0, scale: 1, filter: 'blur(0px)' }
        };
      case 'up':
      default:
        return {
          hidden: { opacity: 0, y: 50, rotateX: 8, scale: 0.97, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      variants={variants}
      style={{ 
        transformOrigin: "top center", 
        perspective: "1000px",
        willChange: "transform, opacity, filter" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

