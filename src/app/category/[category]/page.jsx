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
            <div className="top-0 left-0 sticky">
                <Navbar />
            </div>

            <div className="lg:pt-[150px] ">
                <div className="hidden md:block">
                <Link href={'/#category'} className=" hover:bg-neutral-400 text-sm mb-4 block bg-sky-600 w-[80px] text-white ml-10 text-center py-2 px-2 rounded-xl">
                    Go Back
                </Link>
                </div>
             
                <div className="  gap-10 px-10  grid grid-cols-2 lg:grid-cols-6 ">
                    {categoryPost.map((post) => (
                        <div key={post.id} className="card lg:mt-[50px] mt-[110px] shadow-xl rounded-xl  bg-white flex flex-col p-2 ">
                            <div className="top-0 align-middle justify-center p-1">
                            
                                
                                <Image src={post.imagelink} width={200} height={200} alt="product" className="" />
                               
                            

                            </div>
                            
                            <div className="card-body   overflow-hidden  flex flex-col justify-center text-center">
                                <p className="card-title text-lg font-bold">{post.title}</p>
                                <p>{post.description} </p>
                                <p>{post.price}</p>
                                
                                    {/* <button className="btn btn-primary ">{post.available}</button> */}
                                    {/* <p className="px-2 bg-sky-500 py-2  text-white rounded-xl">{post.available}</p> */}
                                
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            


        </div>

    );
}

export default Category;




