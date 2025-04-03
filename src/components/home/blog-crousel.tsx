"use client";
import React, { useEffect, useState } from "react";
import ImageCarousel from "./crousel";
import axios from "axios";
import { BlogPostType } from "@/types";
import { convertGoogleDriveUrl } from "@/lib/utils";
interface ImageItem {
    src: string;
    link?: string | { pathname: string; query?: Record<string, string> };
}

const BlogCrousel = () => {
    const [blogData, setBlogData] = useState<ImageItem[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("/api/getblogposts");
                const blogs: BlogPostType[] = response.data || [];

                const twoBlogs = blogs.slice(1, 2).map((data) => ({
                    src: convertGoogleDriveUrl(data.image),
                    link: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blogs/${data.id}`,
                }));

                setBlogData(twoBlogs);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="text-4xl font-bold text-center py-5 underline">
                Blogs
            </div>
            <ImageCarousel images={blogData} autoPlayInterval={5000} />
        </>
    );
};

export default BlogCrousel;

