"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BlogPostType } from "@/types";
import Link from "next/link";
import BlogCard from "@/components/blogs/blog-card";
import { convertGoogleDriveUrl } from "@/lib/utils";
import BlogSkeleton from "@/components/blogs/blog-skeleton";


const CATEGORIES = ["Summer Internship", "Placement", "Campus Life", "Alumni", "Miscellaneous"];

const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[] | null>(null);
  const [activeCategory, setActiveCategory] = useState("Summer Internship");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/getblogposts");

        console.log("RAW BACKEND RESPONSE:", response.data);

        const transformedPosts = response.data.map((post: BlogPostType) => {
          console.log(
            "CATEGORY RAW:",
            `"${post.category_name}"`,
            "length:",
            post.category_name?.length
          );

          return {
            ...post,
            image: convertGoogleDriveUrl(post.image),
          };
        });

        setBlogPosts(transformedPosts);
      } catch (e) {
        console.log("Error fetching blogs", e);
      }
    };
    getData();
  }, []);



  const filteredPosts = blogPosts
    ? blogPosts.filter((post) => {
      const category = post.category_name || "";

      console.log("---- FILTER CHECK ----");
      console.log("Post ID:", post.id);
      console.log("Post category:", `"${category}"`, "length:", category.length);
      console.log("Active category:", `"${activeCategory}"`, "length:", activeCategory.length);
      console.log("EQUAL?:", category === activeCategory);

      const mainCategories = ["Summer Internship", "Placement", "Campus Life", "Alumni"];

      if (activeCategory === "Miscellaneous") {
        const result = !mainCategories.includes(category);
        console.log("Misc result:", result);
        return result;
      }

      return category === activeCategory;
    })
    : [];



  return (
    <div className="w-full flex min-h-screen justify-center bg-gray-50 pb-20">
      <div className="w-full max-w-[1200px] flex flex-col items-center px-4 md:px-6">

        <div className="pt-12 pb-8 text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">BITS Chronicles</h1>
          <p className="text-gray-600 text-lg">Stories from Campus, Placements, and Beyond</p>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                console.log("ACTIVE CATEGORY CLICKED:", `"${cat}"`, "length:", cat.length);
                setActiveCategory(cat);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                ? "bg-gray-900 text-white shadow-lg shadow-gray-200 transform -translate-y-0.5"
                : "bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-900 border border-gray-100 shadow-sm hover:shadow-md"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

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
              </div>
            )
          ) : (
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