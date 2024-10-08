"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CurrentTask() {

  const dataIcon = [
    {src : 'Tailwind.png'},
    {src : 'pngegg.png'},
    {src : 'pngegg2.png'},
    {src : 'nextjs.svg'},
    {src : 'react.svg'},
    {src: 'javascript.svg'},
    {src : 'pngwing.png'},
    {src: 'php.svg'},
    {src: 'html.svg'},
    {src: 'css.svg'}
  ]
  return (
    <div className='mt-12 mb-10 '>
      <h3 className='font-medium text-base text-stone-200 my-2'>Current Learning Task</h3>
      <motion.div
       initial={{clipPath: 'inset(0 100% 0 0)'}}
       animate={{clipPath: 'inset(0 0% 0 0)'}}
       transition={{duration:1}}
        className='w-1/3  flex flex-wrap gap-2 gap-y-2'>
          {dataIcon.map((icon,index) => (
            <Image
            className='grayscale hover:grayscale-0 transition-all' key={index} src={ `/images/${icon.src}`} alt="" width={40} height={40} />
          ))}
      </motion.div>
    </div>
  )
}
