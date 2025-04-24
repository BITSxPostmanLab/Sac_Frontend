"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BlogPostType } from "@/types";
import ResourceNavbar from "@/components/resources/r-nav";
import Link from "next/link";
import SingularBlogPost from "@/components/blogs/singular-blog";

import { convertGoogleDriveUrl } from "@/lib/utils";

import { convertUrlsToLinks } from "@/hooks/convert-url-to-links";
import BlogSkeleton from "@/components/blogs/blog-skeleton";

const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/getblogposts");
        // Transform the image URLs before setting the state
        const transformedPosts = response.data.map((post: BlogPostType) => ({
          ...post,
          image: convertGoogleDriveUrl(post.image),
        }));
        setBlogPosts(transformedPosts);

      } catch (e) {
        console.log("There was some error", e);
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
                  content={convertUrlsToLinks(ele.content)}
                  title={ele.title}
                />
              </Link>
            ))
            : <BlogSkeleton cards={8} />}

        </div>
      </div>

    </div>
  );
};

export default BlogsPage;

