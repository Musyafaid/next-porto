"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Image from 'next/image'


export default function Hero() {
  return (
    <div className='w-full h-full flex justify-around max-md:justify-center  mt-5 mb-2'>

        <motion.div
        initial={{clipPath: 'inset(0 100% 0 0)'}}
        animate={{clipPath: 'inset(0 0% 0 0)'}}
        transition={{duration:1}}
        className='w-1/2 flex flex-col '>

            <h1 className='text-5xl font-bold '>Hello I'am</h1>
            <TypeAnimation 
            sequence=
            {[
                'Musyafa Achmad Saputra',1000,
                'Junior Web Programing',1000

            ]} 
            speed={50}
            style={{ fontWeight : 'bolder',textAlign : 'left',lineHeight : 1}}
            repeat={Infinity}
            className='max-md:text-2xl text-5xl'
            />
        </motion.div>

        <div className='w-1/2 relative '>
            
            <Image
                src="/images/profile2.jpg"
                className="grayscale hover:grayscale-0 max-md:w-32  transition-all  absolute right-0 rounded-md"
                alt="Next.js logo"
                width={215}
                height={300}
       
                
             />

        </div>

    </div>
  )
}
