"use client"
import React from 'react'
import { useRef } from 'react'
import { motion,useInView } from 'framer-motion'
import Image from 'next/image'


export default function CurrentProject() {
    const ref = useRef(null);
    const isView = useInView(ref,{once:true})

    const dataProject = [
        {
            title: "CRUD WITH CI 3",
            img :"pngegg.png"
        },
        {
            title: "CRUD WITH NEXT JS",
            img :"pngegg.png"
        },
        {
            title: "CRUD WITH LARAVEL",
            img :"pngegg.png"
        }
    ]
  return (
    <div className='pb-5'>
        <h1 className='mb-2 font-semibold text-left text-3xl  pb-2 w-44'>Project</h1>
        <motion.div
        ref={ref}
        initial={{opacity: 0}}
        animate={{opacity: isView ? 1: 0}}
        transition={{duration: 2}}
        className='w-full gap-y-4 flex flex-wrap justify-between'>
            {dataProject.map((project,index) =>(


                <div key={index} className='relative ' style={{width:'49%'}}>
                <h1 className='z-10 font-extrabold top-4 text-center m-auto absolute text-2xl w-full'>{project.title}</h1>
                <Image
                className=' max-md:px-5 max-md:h-52 px-28 bg-slate-700 bg h-60 grayscale rounded-md bg-opacity-30 p-5' 
                src={`/images/${project.img}`} alt=""
                width={450}
                height={60}
                />

                {/* <img src="/images/github.svg" alt="" width="50"/> */}

            </div>
            ))}
         
        </motion.div>
        
    </div>
  )
}
