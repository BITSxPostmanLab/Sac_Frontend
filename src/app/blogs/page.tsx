"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BlogPostType } from "@/types";
import Link from "next/link";
import BlogCard from "@/components/blogs/blog-card";
import { convertGoogleDriveUrl } from "@/lib/utils";
import BlogSkeleton from "@/components/blogs/blog-skeleton";

// 1. Define your categories here
const CATEGORIES = ["All", "SI/Placement", "Campus Life", "Alumni", "Miscellaneous"];

const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/getblogposts");
        const transformedPosts = response.data.map((post: BlogPostType) => ({
          ...post,
          image: convertGoogleDriveUrl(post.image),
        }));
        setBlogPosts(transformedPosts);
      } catch (e) {
        console.log("Error fetching blogs", e);
      }
    };
    getData();
  }, []);

  // Filter logic
  const filteredPosts = blogPosts
    ? activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => {
        // Check if 'categories' array contains the active category
        if (post.categories && post.categories.includes(activeCategory)) {
          return true;
        }
        // Fallback to legacy 'category' field
        return post.category === activeCategory;
      })
    : [];

  return (
    <div className="w-full flex min-h-screen justify-center bg-gray-50 pb-20">
      <div className="w-full max-w-[1200px] flex flex-col items-center px-4 md:px-6">

        {/* Header Section */}
        <div className="pt-12 pb-8 text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">BITS Chronicles</h1>
          <p className="text-gray-600 text-lg">Stories from Campus, Placements, and Beyond</p>
        </div>

        {/* Filter Tabs UI */}
        <div className="w-full flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                  ? "bg-black text-white shadow-md transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout for Blogs */}
        <div className="w-full">
          {blogPosts ? (
            filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((ele) => (
                  <div key={ele.id} className="h-full">
                    <BlogCard post={ele} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No blogs found in this category.</p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="mt-4 text-blue-600 hover:underline font-medium"
                >
                  View all posts
                </button>
              </div>
            )
          ) : (
            // Skeleton Loader Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <BlogSkeleton cards={6} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;