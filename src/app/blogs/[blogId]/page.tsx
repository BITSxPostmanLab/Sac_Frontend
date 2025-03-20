"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BlogPostType } from "@/types";
import ResourceNavbar from "@/components/resources/r-nav";
import Link from "next/link";
import SingularBlogPost from "@/components/blogs/singular-blog";

const convertGoogleDriveUrl = (url: string | null | undefined) => {
  // Return a default image if url is null or undefined
  if (!url) {
    return "https://images.unsplash.com/photo-1669352311123-085520652a65?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }

  // Check if it's a Google Drive URL
  if (url.includes("drive.google.com/file/d/")) {
    try {
      // Extract the file ID
      const fileId = url.split("/file/d/")[1].split("/")[0];
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    } catch (error) {
      console.error("Error processing Google Drive URL:", error);
      return "https://images.unsplash.com/photo-1669352311123-085520652a65?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
  }
  return url;
};

const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/getblogposts");
        // Transform the image URLs before setting the state
        const transformedPosts = response.data.map((post: BlogPostType) => ({
          ...post,
          image: post.image ? convertGoogleDriveUrl(post.image) : "https://images.unsplash.com/photo-1669352311123-085520652a65?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }));
        setBlogPosts(transformedPosts);
      } catch (error) {
        console.log("There was some error");
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="w-full flex min-h-full items-center justify-center">
      <div className=" w-full max-w-[1000px] flex items-center flex-col justify-center px-3">
        <ResourceNavbar />
        <div className="text-4xl">Blogs</div>
        <div className="w-full mt-10">
          {blogPosts
            ? blogPosts.map((ele) => (
                <Link href={`/blogs/${ele.id}`} key={ele.id}>
                  <SingularBlogPost
                    imageUrl={ele.image}
                    content={ele.content}
                    title={ele.title}
                  />
                </Link>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;