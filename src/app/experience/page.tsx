import React from 'react'
import TimeLine from '../components/content/timeLine'
import Navbar from '../components/ui/navbar'
import CurrentProject from '../components/content/currentProject'

export default function page() {
  return (
    <div>
        <Navbar />

        <div className='w-2/3 flex flex-col h-screen mx-auto max-md:w-full max-md:px-6'>
            <TimeLine />
            <CurrentProject />
        </div>
    </div>
  )
}
