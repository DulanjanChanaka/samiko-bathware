"use client"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from 'react';
import { Navigation } from "swiper/modules";




const ProductBlock = ({ title= [] }) => {
    const productlist = [
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Commode-Leo-in-Sri-Lanka.jpg",
          alt: "product title 1",
          price: 23.44,
          discount: 20,
          rating: 3.7,
        },
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Commode-Spenta-in-Sri-Lanka.jpeg",
          alt: "product title 1",
          price: 23.44,
          discount: 30.2,
          rating: 3.7,
        },
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
          alt: "product title 1",
          price: 23.44,
          discount: 10.2,
          rating: 3.7,
        },
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
          alt: "product title 1",
          price: 23.44,
          discount: 10.2,
          rating: 3.7,
        },
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
          alt: "product title 1",
          price: 23.44,
          discount: 10.2,
          rating: 3.7,
        },
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
          alt: "product title 1",
          price: 23.44,
          discount: 10.2,
          rating: 3.7,
        },
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
          alt: "product title 1",
          price: 23.44,
          discount: 10.2,
          rating: 3.7,
        },
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
          alt: "product title 1",
          price: 23.44,
          discount: 10.2,
          rating: 3.7,
        },
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
          alt: "product title 1",
          price: 23.44,
          discount: 10.2,
          rating: 3.7,
        },
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
          alt: "product title 1",
          price: 23.44,
          discount: 10.2,
          rating: 3.7,
        },
        {
          title: "product title 1",
          src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
          alt: "product title 1",
          price: 23.44,
          discount: 10.2,
          rating: 3.7,
        },
      ];
      

      const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    // Update the slidesPerView based on window width on the client-side
    function handleResize() {
      setSlidesPerView(window.innerWidth < 600 ? 2 : 4);
    }

    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially to set the initial slidesPerView
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);}


  }, []);

  return (
    <div className="w-full mb-8">
      <h2>{title}</h2>
      {/* Render the Swiper directly without checking typeof window */}
      <Swiper slidesPerView={slidesPerView} spaceBetween={10} navigation modules={[Navigation]}>
        {productlist?.map(({ title, src, alt, price }, index) => (
          <SwiperSlide key={index}>
            <Product title={title} src={src} alt={alt} price={price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductBlock;

const Product = ({ src, alt, price, discount }) => {
  return (
    <div className="top-0 left-0 pb-3 bg-black p-[3px 7px] font-medium text-white rounded-md hover:scale-105 ease-in duration-300">
      <img className="w-full object-contain" src={src} alt={alt} />
      <div className="p-1">
        <h4>LKR {price}</h4>
      </div>
      {discount && <div>{discount} % Off</div>}
    </div>
  );
};

