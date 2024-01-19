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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        id='/'
      >
        <SwiperSlide>
{/* <img className="swiper-image  w-full  object-cover"  src='https://bathroomvillage.com/cdn/shop/files/Bristol_Store_1.jpg?v=1666279152&width=1600' /> */}
<Image src='/bath1.jpg'
alt="Image description" 
 width={2100}
  height={1350}
  className="swiper-image  w-full  object-cover"
  />
</SwiperSlide>
<SwiperSlide >

<Image src='/bath2.jpg'
alt="Image description" 
 width={2500}
  height={1312}
  className="swiper-image bg-cover bg-center  w-full  object-cover"
  />
</SwiperSlide>



<SwiperSlide >

<Image src='/bath4.jpg'
alt="Image description" 
 width={2500}
  height={1312}
  className="swiper-image  bg-center  w-full  object-cover"
  style={{objectFit: 'cover'}}
  />
</SwiperSlide>

      </Swiper>
    </>
  );
}
