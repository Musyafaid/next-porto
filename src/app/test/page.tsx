import React from 'react'
import TestElement from './testElement'

export default function page() {
  return (
    <div>
        <div className='h-screen '>
        <h1>Test</h1>

        </div>
        <div className='flex justify-center text-center bg-slate-500 bottom-0 mt-24'>
            <TestElement />
        </div>
    </div>
  )
}
