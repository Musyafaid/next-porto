"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const pathname= usePathname();

    const dataMenu = [
        {
            title:'Home',
            link :'/'
        },
        {
            title:'About',
            link :'/about'
        },
        {
            title:'Experience',
            link :'/experience'
        },
        {
            title:'Contact',
            link :'/contact'
        }
        
    ]
  return (
    <div className='w-full h-20 bg-neutral-900 bg-opacity-60 z-20 flex justify-around  items-center fixed top-0 hover:border-b hover:border-stone-900 '>
        <div >
            <h3 className='font-medium text-2xl max-md:text-xs'>Musyafa Achmad();</h3>
        </div>
        <div className=''>
            <ul className='flex justify-evenly gap-7 max-md:gap-2'>
                {dataMenu.map((item,index) => (
                 <li key={index} className='text-sm '>
                    <Link href={item.link}>
                    <span  className={`hover:text-slate-200 px-3 py-3 max-md:text-xs rounded ${pathname === item.link ?  'bg-black bg-opacity-20 text-white': ''}`} > 
                        {item.title}
                    </span>
                    </Link>
                </li>
                ))}
               
            </ul>
        </div>
       
    </div>
  )
}
