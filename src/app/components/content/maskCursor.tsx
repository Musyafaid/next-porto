"use client";
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../ui/mouse';

export default function MaskCursor() {
  const [screenWidth,setScreenWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const updateScrollPosition =() =>{
      setScrollY(window.scrollY);
  };
  

    const handleResize= () =>{
        setScreenWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("scroll",updateScrollPosition)
        setScreenWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);

        return () =>{
            window.addEventListener("scroll",updateScrollPosition)
            window.removeEventListener('resize',handleResize)
        }
    },[])
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 100 : 40;

  const mouseX = x ?? 0; 
  const mouseY = y ?? 0; 

  const getMaskPosition = () => {
    if (screenWidth < 800) {
      return `${mouseX - 100}px ${mouseY - 550}px`;
    } else {
      const scaleHeight = (scrollY >= 1) ? mouseY - 360 : mouseY - 547 ;
      return `${mouseX - 274}px ${scaleHeight}px`;
    }
  };

  return (
    <main className="main ">
      <motion.div
        className="mask py-0"
        animate={{
          WebkitMaskPosition: getMaskPosition(),
          WebkitMaskSize: `${size}px`,
     
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5, }}
      >
        <p
              
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='text-lg my-10'
        >
        A junior web developer - with skills that haven't been replaced by A.I (yet) - making good stuff only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className="body">
        {/* <h1>{screenWidth},{mouseX},{mouseY},Scroll Y : {scrollY}</h1> */}
      <p className='text-lg pt-10'>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>
    </main>
  );
}