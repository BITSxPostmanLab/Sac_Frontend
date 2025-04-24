"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCarousel from "./crousel";
import { BlogPostType } from "@/types";
import { convertGoogleDriveUrl } from "@/lib/utils";
import { getSafeImageUrl } from "@/lib/utils"

interface ImageItem {
    src: string;
    link?: string | { pathname: string; query?: Record<string, string> };
}

const BlogCarousel = () => {
    const [blogData, setBlogData] = useState<ImageItem[]>([]);
    console.log(blogData)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/getblogposts");
                const blogs: BlogPostType[] = response.data || [];

                const selectedBlogs = blogs.slice(0, 3).map((data) => {
                    const rawImageUrl = convertGoogleDriveUrl(data.image);
                    const imageUrl = getSafeImageUrl(rawImageUrl);

                    return {
                        src: imageUrl,
                        link: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blogs/${data.id}`,
                    };
                });

                setBlogData(selectedBlogs);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            }
        };

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

export default BlogCarousel;

