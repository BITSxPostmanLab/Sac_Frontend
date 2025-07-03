'use client';

import React from "react";
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
      <div className=" w-full max-w-[1000px] flex items-center flex-col justify-center px-3">
        <div className="text-4xl pt-8">Resources</div>
        <div className="w-full mt-10">
          {resources.map((ele, index) => {
            return (
              <div className="w-full" key={index}>
                <div className="text-center text-3xl py-10">{ele.title}</div>
                {ele.posts.map((ele, key) => {
                  return (
                    <div key={key}>
                      <SingularPost
                        imageUrl={ele.imageUrl}
                        resourceLink={ele.resourceLink}
                        paragraphs={ele.paragraphs}
                        linkText={ele.linkText}
                        postId={ele.postId}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>



        <SocialShare />
      </div>
    </div>
  );
};

export default ResourcesPage;

