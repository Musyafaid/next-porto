"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../ui/mouse';

export default function MaskCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 100 : 40;

  const mouseX = x ?? 0; // Default to 0 if x is null
  const mouseY = y ?? 0; // Default to 0 if y is null


  return (
    <main className={'main'}>
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${mouseX - 270}px ${mouseY - 360}px`,
          WebkitMaskSize: `${size}px`,
     
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5, }}
      >
        <p
              
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='text-lg py-10'
        >
        A junior web developer - with skills that haven't been replaced by A.I (yet) - making good stuff only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className="body">
      <p className='text-lg py-10'>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>
    </main>
  );
}