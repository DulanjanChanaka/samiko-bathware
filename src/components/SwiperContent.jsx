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
          delay: 2500,
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
<Image src='/Assets/swiper/image4.jpeg'
alt="Image description" 
 width={562}
  height={375}
  className="swiper-image  w-full  object-cover"
  />
</SwiperSlide>
<SwiperSlide >

<Image src='/Assets/swiper/image3.jpeg'
alt="Image description" 
 width={562}
  height={375}
  className="swiper-image  w-full  object-cover"
  />
</SwiperSlide>

      </Swiper>
    </>
  );
}
