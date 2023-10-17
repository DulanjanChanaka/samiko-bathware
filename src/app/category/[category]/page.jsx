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
             
                <div className="flex flex-row mt-20 gap-10 px-10">
                    {categoryPost.map((post) => (
                        <div className="card w-96 bg-base-100 shadow-xl rounded-xl ">
                            <div className="top-0  md:h-4/5 sm:h-2/3 w-full overflow-hidden ">
                            <figure ><img src={post.imagelink} alt="product"  className="object-contain w-full "/></figure>

                            </div>
                            
                            <div className="card-body md:h-1/5 sm:h-1/3 overflow-hidden  flex flex-col justify-center text-center">
                                <p className="card-title text-lg font-bold">{post.title}</p>
                                <p>{post.description}</p>
                                <div className="card-actions justify-end pb-5">
                                    {/* <button className="btn btn-primary ">{post.available}</button> */}
                                    <p className="px-2 text-sky-500">{post.available}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            


        </div>

    );
}

export default Category;




