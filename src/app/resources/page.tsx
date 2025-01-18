import React from "react";
import Link from "next/link";
// import Image from "next/image";
// import ProjectCourses from "@/components/resources/project-courses";
// import StudyAbroad from "@/components/resources/study-abroad";
// import CompetitiveProgramming from "@/components/resources/competitive-programming";
// import MinorCourseDocument from "@/components/resources/minor-course";
// import Notion from "@/components/resources/notion";

// import ProjectType from "@/components/resources/project-type";
import ResourceNavbar from "@/components/resources/r-nav";
import SocialShare from "@/components/resources/share";

import { resources } from "@/resources_list";
import SingularPost from "@/components/resources/singular-post";

const ResourcesPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className=" w-full max-w-[1000px] flex items-center flex-col justify-center">
        <ResourceNavbar />
        <div className="text-4xl">Resources</div>
        <div className="w-full mt-10">
          {resources.map((ele, index) => {
            return (
              <div className="w-full" key={index}>
                <div className="text-center text-3xl py-10">{ele.title}</div>
                {ele.posts.map((ele, key) => {
                  return (
                    <div key={key}>
                      <Link href={`/resources/${ele.postId}`}>
                        <SingularPost
                          imageUrl={ele.imageUrl}
                          resourceLink={ele.resourceLink}
                          paragraphs={ele.paragraphs}
                          linkText={ele.linkText}
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* <ProjectCourses />
        <ProjectType />
        <StudyAbroad />
        <CompetitiveProgramming />
        <Notion />
        <MinorCourseDocument />
        <div className="">
          <div className="text-3xl text-center mt-10">
            Google Summer of Code, Q&A
          </div>
          <div>
            <Image
              src={"/resources/gsoc.png"}
              alt="gsoc-image"
              height={500}
              width={500}
              className="h-[250px] w-[250px] mx-auto mt-5"
            />
          </div>
          <div className="text-xl text-center mt-8 mb-8 text-[#6a6e6c]">
            <Link
              href={
                "https://sacbitspilani.wordpress.com/wp-content/uploads/2021/03/gsoc_qna_sac.pdf"
              }
            >
              <span className="text-blue-500 underline ">GSoC QnA SAC</span>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="text-3xl text-center mt-10">Electives Reviews</div>
          <div className="text-xl text-center mt-8 mb-8 text-[#6a6e6c]">
            Click{" "}
            <Link
              href={"https://sacbitspilani.wordpress.com/elective-reviews/"}
            >
              <span className="text-blue-500 underline">here</span>
            </Link>{" "}
            to know about electives.
          </div>
        </div> */}

        <SocialShare />
      </div>
    </div>
  );
};

export default ResourcesPage;
