import React from 'react'
import { Kanit } from 'next/font/google'

const kanit = Kanit({
  subsets: ['latin'],
  weight: '500'
  
})

const Navbar = () => {
  return (
    <>
      <div className="bg-white py-3 border-b">
        <div className="text-red-500 text-2xl text-center font-bold md:text-3xl lg:text-3xl">
          <span className={kanit.className}>Target Hunters</span>
        </div>
        <div>
          
        </div>
      </div>
    </>
  )
}

export default Navbar