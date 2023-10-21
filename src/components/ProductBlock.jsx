"use client"


// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from 'react';
import { Navigation } from "swiper/modules";
import { collection, getDocs } from "firebase/firestore";
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { db } from "../../firebase/firebase";
import Image from "next/image";


const ProductBlock = () => {
  // const productlist = [
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Commode-Leo-in-Sri-Lanka.jpg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 20,
  //       rating: 3.7,
  //     },
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Commode-Spenta-in-Sri-Lanka.jpeg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 30.2,
  //       rating: 3.7,
  //     },
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 10.2,
  //       rating: 3.7,
  //     },
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 10.2,
  //       rating: 3.7,
  //     },
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 10.2,
  //       rating: 3.7,
  //     },
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 10.2,
  //       rating: 3.7,
  //     },
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 10.2,
  //       rating: 3.7,
  //     },
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 10.2,
  //       rating: 3.7,
  //     },
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 10.2,
  //       rating: 3.7,
  //     },
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 10.2,
  //       rating: 3.7,
  //     },
  //     {
  //       title: "product title 1",
  //       src: "https://www.mascons.com/wp-content/uploads/2021/11/Wash-Basin-Pedestal-Polo-in-Sri-Lanka.jpg",
  //       alt: "product title 1",
  //       price: 23.44,
  //       discount: 10.2,
  //       rating: 3.7,
  //     },
  //   ];

  const [productPost, setProductPost] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    // Check for window object on the client side
    if (typeof window !== 'undefined') {
      setIsMobileView(window.innerWidth <= 768);
    }
  }, []);

  useEffect(() => {
    setSlidesPerView(isMobileView ? 1 : 3);
  }, [isMobileView]);




  useEffect(() => {
    const fetchProductPost = async () => {
      try {
        // Replace `db` with your Firestore database instance
        const productPostCollection = await getDocs(collection(db, 'topitem')); // Replace with the actual collection name
        const productPostData = productPostCollection.docs.map((doc) => {
          const postId = doc.id
          console.log(postId); // Log the document ID
          return {
            id: doc.id,
            ...doc.data(),

          };
        });
        setProductPost(productPostData);
      } catch (error) {
        console.error('Error fetching person posts:', error);
      }
    };
    fetchProductPost();
  }, []);






  return (
    <div className="">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=""

      >
        {productPost.map((data, index) => (
          <SwiperSlide key={index} className="rounded-lg pt-5 pb-10 px-5 flex flex-col ">
            <div className="flex flex-col justify-center align-middle">
              <figure>
                <Image src={data.imagelink} alt={data.alt} height={200} width={200}  className="p-10"/>
                {/* <img src={data.imagelink}alt={data.alt}/> */}
              </figure>

              <h2 className="card-title">{data.title}</h2>
              <p>{data.description}</p>
              <p>{data.price}</p>

              <p className=" text-neutral-50 py-2 rounded-xl text-center  px-2    bg-teal-400 " >{data.available}</p>




            </div>
          </SwiperSlide>
        ))
        }
      </Swiper>
    </div>


  );


};
export default ProductBlock;

