import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export function ScrollSection({ children, className = '' }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollFade({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [currentDelay, setCurrentDelay] = useState(delay);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // After delay is applied once, set it to 0 for future animations
            setTimeout(() => {
              setCurrentDelay(0);
            }, delay * 1000 + 100);
          }
        });
      },
      { threshold: 0.1, margin: '-50px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.8, delay: currentDelay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollScale({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollSlide({ children, direction = 'left', delay = 0, className = '' }) {
  const ref = useRef(null);
  
  const variants = {
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 }
  };

  const finalVariants = {
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants[direction]}
      whileInView={finalVariants[direction]}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

