"use client";

import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase/firebase";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const Category = ({ params }) => {
    const [categoryPost, setCategoryPost] = useState([]);

    useEffect(() => {
        const fetchCategoryPosts = async () => {
            const category = params?.category;

            if (!category) {
                // Handle the case where category is undefined or falsy, for example, show an error message or return early.
                console.error('Category is missing or invalid');
                return;
            }

            try {
                const categoryQuery = query(collection(db, 'products'), where('category', '==', category));
                const categoryPostCollection = await getDocs(categoryQuery);

                const categoryPostData = categoryPostCollection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setCategoryPost(categoryPostData);
            } catch (error) {
                console.error('Error fetching category posts:', error);
            }
        };
        fetchCategoryPosts();
    }, [params]);
    useEffect(() => {
        console.log("params", params);
    }, [params?.productKey]);
    const data = params.category
    console.log("params data", data);
    return (
        <div>
            <div className="top-0 left-0">
                <Navbar />
            </div>

            <div className="pt-20">
                <div className="hidden md:block">
                <Link href={'/#category'} className=" hover:bg-neutral-400 text-sm mb-4 block bg-sky-600 w-[80px] text-white ml-10 text-center py-2 px-2 rounded-xl">
                    Go Back
                </Link>
                </div>
             
                <div  className='flex flex-row p-3 gap-10'>
                    {categoryPost.map((post) => (
               
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-xl mx-auto  w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
                            <div className="flex flex-col ">
              <figure>
                <Image src={post.imagelink} alt={post.alt} height={200} width={200}  className="rounded-lg pb-2" />
                {/* <img src={data.imagelink}alt={data.alt}/> */}
              </figure>

              <h2 className="card-title">{data.title}</h2>
              <p>{data.description}</p>
              <p>{data.price}</p>

              <p className=" text-neutral-50 py-2 rounded-xl text-center  px-2    bg-teal-400 " >{post.available}</p>
              </div>



            </div>
                    ))}
                </div>

            </div>

            


        </div>

    );
}

export default Category;




