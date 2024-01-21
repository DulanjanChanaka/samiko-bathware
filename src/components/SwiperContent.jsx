"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
        id='/'
      >
        <SwiperSlide>

<Image src='/bath1.jpg'
alt="Image description" 
 width={2100}
  height={1350}
  className="swiper-image  w-full  object-cover"
  />
    <div className="absolute inset-0 flex flex-col  items-center justify-end mb-20 text-white">
          <h2 className="text-2xl font-bold mb-4">Build Your Dream Bathroom</h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Discover</button>
        </div>
</SwiperSlide>
<SwiperSlide >

<Image src='/bath2.jpg'
alt="Image description" 
 width={2500}
  height={1312}
  className="swiper-image bg-cover bg-center  w-full  object-cover"
  />
    <div className="absolute inset-0 flex flex-col  items-center justify-end mb-20 text-white">
          <h2 className="text-2xl font-bold mb-4">High Quality Bathware</h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Discover</button>
        </div>
</SwiperSlide>



<SwiperSlide >

<Image src='/bath4.jpg'
alt="Image description" 
 width={2500}
  height={1312}
  className="swiper-image  bg-center  w-full  object-cover"
  style={{objectFit: 'cover'}}
  />
    <div className="absolute inset-0 flex flex-col items-center justify-end mb-20 text-white">
          <h2 className="text-2xl font-bold mb-4">Build Your Dream Bathroom</h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Discover</button>
        </div>
</SwiperSlide>

      </Swiper>
    </>
  );
}
