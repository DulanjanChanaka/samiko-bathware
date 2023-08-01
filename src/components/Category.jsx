import React from 'react'
import Image from 'next/image'
import Headline from './Headline'

const Category = () => {

    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <Headline title="Category"/>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'></p>
                <h2 className='py-4'></h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
    
    
                {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/skills/html.png' width='64' height='64' alt='/'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Fixtures</h3>
                    </div>
                </div>
                </div>   */}
    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/faucets.jpg' width='94' height='94' alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Faucets</h3>
                    </div>
                </div>
                </div> 
    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/cabinets.jpg' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Cabinets and Vanitiest</h3>
                    </div>
                </div>
                </div> 
    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/mirror.jpg' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Mirrors</h3>
                    </div>
                </div>
                </div> 
    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/lighting.jpg' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Lighting</h3>
                    </div>
                </div>
                </div> 
    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/tiles.jpg' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Tiles and Flooring</h3>
                    </div>
                </div>
                </div> 
    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/towelbar.jpg' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Shelving and Towel Bars</h3>
                    </div>
                </div>
                </div> 
    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/accessories.jpg'width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Accessories</h3>
                    </div>
                </div>
                </div> 
    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/curtains.jpg' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Shower Curtains and Rods</h3>
                    </div>
                </div>
                </div> 
    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/hardware.jpg' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Hardware</h3>
                    </div>
                </div>
                </div> 

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/plumbing.png' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Plumbing Supplies</h3>
                    </div>
                </div>
                </div> 

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/cleaning.jpg' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Cleaning and Maintenance Products</h3>
                    </div>
                </div>
                </div> 

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/ventilate.jpg' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bathroom Ventilation</h3>
                    </div>
                </div>
                </div> 
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/assets/heater.jpg' width={94} height={94} alt='/' className='rounded-lg'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Water Heaters</h3>
                    </div>
                </div>
                </div> 
    
                </div>
            </div>
        </div>
      )
  
}

export default Category