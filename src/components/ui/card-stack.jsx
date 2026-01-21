"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
  duration = 5000,
  onCardChange,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHovered && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, duration);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, items.length, duration]);

  const handleCardClick = () => {
    if (items.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
      if (onCardChange) {
        onCardChange((currentIndex + 1) % items.length);
      }
    }
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const isActive = index === currentIndex;
    
    if (isActive) {
      return {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)",
        opacity: 1,
        zIndex: items.length,
      };
    }

    // Calculate distance from current card
    let distance;
    if (index < currentIndex) {
      distance = currentIndex - index;
    } else {
      distance = items.length - index + currentIndex;
    }

    const translateX = distance * offset;
    const translateY = distance * offset;
    const scale = Math.max(0.8, 1 - distance * scaleFactor);
    const rotate = distance % 2 === 0 ? distance * 2 : -distance * 2;

    return {
      transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      opacity: Math.max(0.6, 1 - distance * 0.1),
      zIndex: items.length - distance,
    };
  };

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative" 
        onClick={handleCardClick} 
        style={{ cursor: items.length > 1 ? "pointer" : "default", minHeight: "400px" }}
      >
        {items.map((item, index) => {
          const style = getCardStyle(index);
          
          return (
            <motion.div
              key={item.id !== undefined ? item.id : `card-${index}`}
              className="absolute inset-0"
              initial={false}
              animate={style}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 32,
                mass: 1,
              }}
              style={{
                transformOrigin: "center center",
              }}
            >
              {item.content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

