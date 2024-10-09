"use client"
import React from 'react'
import Hero from './components/content/hero'
import CurrentTask from './components/content/currentTask'
import AboutText from './components/content/aboutText'
import { motion } from 'framer-motion'


export default function page() {
  return (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
       
            className='w-2/3 flex items-center h-screen mx-auto max-md:w-11/12 max-md:px-2' >
            <div className='h-full w-full'>
              <div className='w-full  h-1/3 pt-20 flex'>
                <Hero />
              </div>
              <CurrentTask />
              <AboutText />
            </div>
        </motion.div>

    
  )
}
