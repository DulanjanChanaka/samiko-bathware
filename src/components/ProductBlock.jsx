"use client"
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";




const ProductBlock = ({ title, products = [] }) => {
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
      
      
  return (
    <div className="w-[100%] mb-8 ">
      <h2>{title}</h2>
      <Swiper
        slidesPerView={
          window.innerWidth < 600 ? 2 :  4
        }
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {productlist?.map(
          ({ title, src, alt, price, discount, }, index) => (
            <SwiperSlide key={index}>
              <Product
                title={title}
                src={src}
                alt={alt}
                price={price}
                // discount={discount}
               
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default ProductBlock;

/**
 *
 */

const Product = ({ title, src, alt, price, discount,  }) => {
  return (
    <div className="  top-0 left-0 pb-3 bg-black p-[3px 7px] font-medium text-white rounded-md hover:scale-105 ease-in duration-300">
      <img className="w-[100%] object-contain" src={src} alt={alt} />
      <div className="p-1">
        
        <h4>LKR {price}</h4>
        
      </div>
      {discount && <div>{discount} % Off</div>}
    </div>
  );
};

/**
 *
 */

const HProductBlockContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  
  
`;
const ProductsTitle = styled.h2``;

const ProductContainer = styled.div`
  width: 100%;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24)  ;
  margin: 12px 0;
  border-radius:20px;
  

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const ProductDiscout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
  padding: 3px 7px;
  font-size: 10px;
  font-weight: 600;
`;

const ProductDetails = styled.div`
  padding: 5px;

  p {
    font-size: 13px;
  }
`;