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

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Question.</h2>
              <p className="text-gray-700">
                How did you secure the Visiting Scholar position at the Max Planck Institute for Software Systems, and what made you choose this opportunity?
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg my-6 border-l-4 border-amber-500">
              This was by cold mailing. I, like most BITSians, was pretty confused on what I wanted to do, even by the end of my third year. I had my Google SI lined up for the summer, and I just felt I wanted both industry and research experience from my undergrad. I got to know about MPI in general from a few of my seniors who had done their theses there before me, and talking to them as well as going through the profiles of the professors, a few professors caught my eye. I actually had mailed Professor Deepak Garg expressing interest in a completely different topic. I was fortunate enough to get a response from him and had a meeting with him shortly. I realised that my original topic of choice was not practical for the limited duration of a thesis. On discussing his other active projects, Deepak brought up the Multiparty Computation effort that was ongoing in his lab. This really caught my interest, and then he shared a few papers with me. Going through them I found it fascinating, and we agreed upon it.
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Question.</h2>
              <p className="text-gray-700">
                What was the research problem you worked on during your time at MPI-SWS? Could you give us a simplified explanation of your project?

              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg my-6 border-l-4 border-amber-500">
              I worked on building a hybrid framework for Multiparty Computation protocols. I know that&apos;s a mouthful, but in simple words, MPC is a way of performing some operations on encrypted data without revealing the data to the entity that&apos;s performing the operation. There are different ways (protocols) of achieving MPC and we were working on designing a way to write and execute programs that make up of such different protocols simultaneously.
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Question.</h2>
              <p className="text-gray-700">
                Many students struggle with deciding between research and industry, how did you navigate this choice, what factors influenced your decision?  Do you see yourself pursuing research in the future?

              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg my-6 border-l-4 border-amber-500">
              It was mainly keeping my options open, and trying my hands at both (through an industry SI and a research-based thesis). While I enjoyed both stints, I was itching to do some real dev and thought this might be a good idea to start with. I am still not 100% convinced that my decision was the correct one for me, but I do enjoy the work I get to do on a daily basis. I would definitely like to pursue further studies and research in the future.
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Question.</h2>
              <p className="text-gray-700">
                Your journey includes an internship at Google before securing a full time role, what key lessons did you take from that experience that later helped you in landing a full-time position?
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg my-6 border-l-4 border-amber-500">
              So going into the intern, my aim was to learn as much as possible. I was cognizant that irrespective of a return offer and whether or not I accept this, working at a company of this scale is probably going to be a once-in-a-lifetime opportunity. I went in with an open mind without any hard preferences on the kind of work I&apos;d get to do. During the internship a key thing was to document my efforts and unblocking myself by approaching my teammates as soon as possible. You go into an internship with very limited time, and it is on you to get the most out of it. The people assigned to mentor you often have a dozen other things on their plate. You would need to show intiative and make sure that you are able to get the maximum out of the internship. The documentation helps you organise your thoughts during the project and at the end helps you structure your work when you need to present it. Keeping regular progress docs is something that I find extremely useful even in my full time role.
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Question.</h2>
              <p className="text-gray-700">
                How&apos;s a typical day in your life as a Software Engineer at Google? What excites you the most about your work
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg my-6 border-l-4 border-amber-500">
              The typical day has a couple of meetings and attempts to make some progress on the few reasonably long term projects that I am involved in. The most exciting thing here has to be the fact that your work here has the potential to impact billions (with a B) of people. And getting to work with incredibly smart people is another perk. :)
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Question.</h2>
              <p className="text-gray-700">
                Looking back, what would you have done differently during your time at BITS?
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg my-6 border-l-4 border-amber-500">
              Probably might have tried more resolutely to explore some more research avenues while I was a student. The only endeavour that I had actually made before my thesis was a fairly lite SOP which did not lead anywhere. Approaching other profs (either at BITS or otherwise) for working with them even informally/part-time could have been interesting.
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

