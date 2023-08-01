"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
      >
        <SwiperSlide>
<img className="swiper-image  w-full  object-cover"  src='https://bathroomvillage.com/cdn/shop/files/Bristol_Store_1.jpg?v=1666279152&width=1600' />
</SwiperSlide>
<SwiperSlide >
<img className="swiper-image  w-full  object-cover"  src='https://img.freepik.com/free-photo/beautiful-modern-bathroom-interior_181624-58029.jpg?w=1380&t=st=1689951233~exp=1689951833~hmac=8a4f002ca664a721cb45cdf53cc88c48ad7d6f04e62f14ea8bba29be3a5375cb' />
</SwiperSlide>

      </Swiper>
    </>
  );
}
