"use client"
import React from 'react'
import AboutText from '../components/content/aboutText'
import { motion } from 'framer-motion'

export default function page() {
  return (
    
        
        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
        
        className='w-2/3 flex pt-24 items-baseline h-screen mx-auto max-md:w-full max-md:px-6'>
           <AboutText />
        </motion.div>
    
  )
}
