import Link from 'next/link'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
  return (
    <div className='m-0 bottom-0 bg-black w-full text-white pt-5 pb-6 '>
       <div className='text-center pb-3'>
        <h2>SAMIKO</h2>
      </div>
      <div className=' text-base text-center '>
                    <p>40/162, Piliyandala Road, Gemunupura, Kottawa.</p>
                    <p className='mt-3 font-semibold'>+94-77 734 8289</p>
                </div>
                
                    

                <div className=' text-center my-5 '>
                    <a href="https://www.facebook.com/profile.php?id=100088974648556" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon className='text-4xl mr-8' />
                    </a>
                    <a href="https://goo.gl/maps/LvCV18kDLtJsFcYH7" target="_blank" rel="noopener noreferrer">
                        <PlaceIcon className='text-4xl' />
                    </a>
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