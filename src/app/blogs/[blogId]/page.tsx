"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BlogPostType } from "@/types";
import { CommentsSection } from "@/components/blogs/comments/comment-section";

interface PageProps {
    params: Promise<{
        blogId: string
    }>
}

const SingleResourcePage = ({ params }: PageProps) => {
    // Unwrap the params Promise using React.use()
    const resolvedParams = React.use(params);
    const { blogId } = resolvedParams;

    const [currentBlogPost, setCurrentBlogPost] = useState<BlogPostType | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("/api/getsingleblogpost", {
                    params: { blogId }
                });
                console.log("here is the reponse", response.data)
                setCurrentBlogPost(response.data as BlogPostType);
            } catch (e) {
                console.log("There was some error", e);
            }
        };

        getData();
    }, [blogId]);

    if (!currentBlogPost) {
        return (
            <div className="w-full flex justify-center min-h-screen">
                <div className="min-h-full mt-10 max-w-[1000px] px-3">
                    Loading...
                </div>
            </div>
        );
    }
    console.log(currentBlogPost)

    return (
        <div className="w-full justify-center min-h-full">
            <div className="bg-blue-50 h-1/2 w-full flex justify-center">
                <div className="container py-12 md:py-20 px-10 max-w-[1440px] flex justify-center">
                    <div className="grid gap-8 md:grid-cols-2 items-center">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{currentBlogPost.title}</h1>
                            <p className="text-gray-500">

                            </p>
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                            {/* <Image src={'/resources/chronicles1.jpg'} alt="chronicles" height={1000} width={500} className='h-[400px] w-auto ml-auto' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="container py-12 md:py-20 px-10 max-w-[1440px] flex justify-center text-center text-md">
                    {
                        currentBlogPost.content
                    }
                </div>

            </div>
            <div className="mt-8 px-10">
                {currentBlogPost.comments_enabled && currentBlogPost.comments && (
                    <CommentsSection postId={Number(blogId)} />
                )}
            </div>
        </div>
    );
};

export default SingleResourcePage;

