"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function TimeLine() {
    const dataTitle= [
        {
            Title : "Promoted to Grade 12",
            date : "On Jully 2024",
            description : " Entered Grade 12 and began my internship program (PKL), gaining hands-on experience in a professional environment related to my field of study."
        
        },
        {
            Title : "Promoted to Grade 11",
            date : "On August 2023",
            description : "Successfully advanced to Grade 11, continuing to deepen my knowledge and focus on more specialized subjects related to my vocational training."
            
        },
        {
            Title : "Entered SMKN 1 Bukateja",
            date : "On June 2022",
            description : "Started my high school journey at SMKN 1 Bukateja, beginning to explore new subjects and build foundational skills for the future."

        }
    ]
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 4 }}
    className='mt-20 max-md:px-5'
    >

        <h1 className='my-5 text-3xl font-bold text-center'>My Experience</h1>
        
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            {dataTitle.map((title,index) =>(

            <li className="mb-10 ms-6 " key={index}>
                <div
                className="absolute mt-1 flex items-center justify-center w-6 h-6 bg-slate-400 rounded-full -start-3 ring-8 dark:ring-gray-700  "
                
                >
                    <motion.span
                    initial={{opacity : 0}}
                    animate={{opacity:1}}
                    transition={{duration : 2, repeat : Infinity,repeatType: 'reverse'}}
                    className=' h-4 w-4 rounded-full -start-3 ring-4 dark:ring-gray-700 '
                    >
                    </motion.span>
                </div>
                <h3 className="mb-1 text-lg  p-0 mt-0 font-semibold text-gray-900 dark:text-white">{title.Title}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{title.date}</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">{title.description}</p>
            </li>
            ))}
        
        </ol>


    </motion.div>
  )
}
