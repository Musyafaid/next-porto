"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'


export default function Hero() {
  return (
    <div className='w-full h-full flex justify-around mt-5 mb-2'>

        <motion.div
        initial={{clipPath: 'inset(0 100% 0 0)'}}
        animate={{clipPath: 'inset(0 0% 0 0)'}}
        transition={{duration:1}}
        className='w-1/2 flex flex-col justify-start '>

            <h1 className='text-5xl font-bold '>Hello I'am</h1>
            <TypeAnimation 
            sequence=
            {[
                'Musyafa Achmad Saputra',1000,
                'Junior Web Programing',1000

            ]} 
            speed={50}
            style={{fontSize : '3em', fontWeight : 'bolder',textAlign : 'left',lineHeight : 1}}
            repeat={Infinity}
            />
        </motion.div>

        <div className='w-1/2 relative '>
            
            <img
                src="/images/profile2.jpg"
                className="grayscale hover:grayscale-0 transition-all  absolute right-0 rounded-md"
                alt="Next.js logo"
                width="215"
       
                
             />

        </div>

    </div>
  )
}
