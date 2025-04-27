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
        <div className="container py-12 md:py-20 px-10 max-w-[1440px] flex justify-center  text-md">
          <div className="md:w-3/4">
            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Question.</h2>
              <p className="text-gray-700">
                Were there any particular courses, professors, or projects at BITS that played a key role in shaping
                your career path? I would say the theoretical courses in general gave me a hint of what I enjoy.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg my-6 border-l-4 border-amber-500">
              <p className="italic text-gray-700">
                I developed a liking for courses like LICS, DSA, TOC, DAA; which led to me taking electives like
                Cryptography and Algebra - I, as I liked Mathy subjects. These helped me get clarity when I started
                looking for thesis professors and profiles; and I ended up in a project where I got to use these
                skills firsthand.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Question.</h2>
              <p className="text-gray-700">
                Given your exceptional academic record, how did you balance maintaining a high CGPA with skill
                development, and how would you advise students to navigate the trade-off between investing time in
                academics versus building practical skills?
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg my-6 border-l-4 border-amber-500">
              <p className="italic text-gray-700">
                The unavoidable fact is a good CGPA becomes very hard to ignore on a profile; be it for a corporate
                job application or for an MS. Especially if you are planning to make a career in your core field,
                having a good CGPA can often make your path much clearer.
                <p className="mb-4">Here&apos;s how I balanced both:</p>

                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Prioritizing coursework while reserving dedicated time for practical projects</li>
                  <li>Focusing on skill-building internships and research opportunities during semester breaks</li>
                  <li>Leveraging online resources to supplement academic learning</li>
                </ul>

                <p className="text-gray-700 font-medium">
                  At the end of the day, it&apos;s about finding a balance that works best for your goals.
                </p>
              </p>
            </div>

          </div>
        </div>

      </div>
      <div className="mt-8 px-10 pb-40">
        {currentBlogPost.comments_enabled && currentBlogPost.comments && (
          <CommentsSection postId={Number(blogId)} />
        )}
      </div>

    </div>
  );

};

export default SingleResourcePage;

