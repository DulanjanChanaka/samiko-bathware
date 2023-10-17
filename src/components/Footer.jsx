import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='m-0 bottom-0 bg-black w-full text-white pt-5 pb-6'>
       <div className='text-center pb-3'>
        <h2>SAMIKO</h2>
      </div>
    <div className='flex flex-col justify-center items-center md:flex-row gap-6 sm:flex-col'>
     
      <div>
        <Link href='/'>Home</Link>
      </div>
      <div>
        <Link href='/'>About</Link>
      </div>
      <div>
        <Link href='/'>Product</Link>
      </div>
      <div>
        <Link href='/'>Contact</Link>
      </div>
      <p className='text-center md:text-left'>
        Copyright 2023. All rights reserved.
      </p>
    </div>
  </div>
  
  )
}

export default Footer