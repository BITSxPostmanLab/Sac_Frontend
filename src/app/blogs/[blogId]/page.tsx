"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BlogPostType } from "@/types";
import { CommentsSection } from "@/components/blogs/comments/comment-section";
import DOMPurify from 'dompurify';

interface PageProps {
  params: Promise<{
    blogId: string
  }>
}

const SingleResourcePage = ({ params }: PageProps) => {
  const resolvedParams = React.use(params);
  const { blogId } = resolvedParams;

  const [currentBlogPost, setCurrentBlogPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/getsingleblogpost", {
          params: { blogId }
        });
        setCurrentBlogPost(response.data as BlogPostType);
      } catch (e) {
        console.log("There was some error", e);
      }
    };
    getData();
  }, [blogId]);

  if (!currentBlogPost) {
    return (
      <div className="w-full flex justify-center items-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-64"></div>
        </div>
      </div>
    );
  }

  return (
    <article className="w-full min-h-full bg-white">
      <div className="w-full bg-slate-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-5 py-16 md:py-24 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {currentBlogPost.categories && currentBlogPost.categories.length > 0 ? (
              currentBlogPost.categories.map((cat, idx) => (
                <span key={idx} className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full uppercase tracking-wide font-bold">
                  {cat}
                </span>
              ))
            ) : currentBlogPost.category ? (
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full uppercase tracking-wide font-bold">
                {currentBlogPost.category}
              </span>
            ) : null}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {currentBlogPost.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-12">
        <div
          className="prose prose-lg prose-blue max-w-none 
                     prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(currentBlogPost.content) }}
        />
      </div>

      {/* Comments */}
      <div className="max-w-3xl mx-auto px-5 pb-20 border-t pt-10">
        {currentBlogPost.comments_enabled && currentBlogPost.comments && (
          <CommentsSection postId={Number(blogId)} />
        )}
      </div>
    </article>
  );
};

export default SingleResourcePage;