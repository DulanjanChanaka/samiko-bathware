import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='m-0 bg-black w-full text-white pt-5 pb-6'>
        <div className='flex flex-col justify-center items-center'>
            <h2 >SAMIKO</h2>
            <Link href='/'><p>Home</p></Link>
            <Link href='/'>About</Link>
            <Link href='/'>Product</Link>
            <Link href='/'>Contact</Link>
            <p className='pt-3'>copyright 2023.All rights reserved,</p>
            
        </div>
    </div>
  )
}

export default Footer