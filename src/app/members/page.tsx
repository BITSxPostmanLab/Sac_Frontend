import LeardersProfile from "@/components/members-page/leaders-profile";
import MemberProfileComponent from "@/components/members-page/member-profile-component";
import { Separator } from "@radix-ui/react-separator";

import React from "react";

const MembersPage = () => {
  return (
    <div className="w-full min-h-full bg-white p-5 sm:p-10  grid grid-col-1 xl:grid-cols-5 xl:space-x-10 space-y-10 xl:space-y-0">
      <div className="xl:col-span-2 h-full bg-[#f2f2f2] rounded-xl">
        <div className="w-fit py-5 px-5 sm:px-10">
          <div className="text-2xl mb-[1px]">Leadership</div>
          <div>
            <span className="italic">Session : 2024-25</span>
          </div>
          <div className="mt-5">
            <Separator className="w-[150px] h-[2px] bg-black" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-10 pb-10 pr-3">
            <LeardersProfile
              className=""
              imageUrl={"/members/m1.jpg"}
              name="Mehul Srivastava"
              designation="Member Secretary"
              description="Students’ Academic Cell has always aimed to enhance the academic and research culture of BITS Pilani. Being one of the reputed institutions of the country its our responsibility to uphold this rich culture of scholastic excellence. As the Member Secretary of this Cell, my aim is to remove all potential academic or career oriented doubts that a student may confront during their engineering life. Our Core team has always been instrumental in providing innovative ideas and impactful initiatives which can help in the all round development of the students. I have always valued perfection over anything and will try to build an organization which will act as a guiding body for all the students aiding them to excel in academics as well as in their career. Leading such a prestigious organization is a matter of great honor for me and I believe that eventually we will be able to create a positive impact on our students so that they have a successful and prosperous life ahead."
            />
            <LeardersProfile
              imageUrl={"/members/m2.jpg"}
              name="Shreyas Mishra"
              designation="Events and Outreach Head"
              description="As the Outreach Head of the Students’ Academic Cell, it is both a privilege and a responsibility to spread awareness about our organization and the myriad benefits it offers to the BITSian community. My role revolves around bridging the gap between students and the wealth of resources available within the Cell, from career guidance to course selection assistance and major events like ‘Quantaculus’. Through proactive outreach efforts, I strive to ensure that every student is aware of the opportunities at their disposal and can make informed decisions about their academic and career paths. At the heart of our mission lies a commitment to enhancing the academic and research culture of BITS Pilani. With a focus on holistic development, we aim to equip students with the knowledge, skills, and guidance necessary to excel not only academically but also in their future careers. Together, we strive to create a tangible impact on the BITSian education system, providing future generations with the tools and resources they need to thrive."
            />

            <LeardersProfile
              imageUrl={"/sac-logo.jpeg"}
              name="Random three word"
              designation="Designation"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ex esse recusandae mollitia id tenetur molestias molestiae minus pariatur delectus est accusamus maiores vel facere, doloribus perferendis aut rem deleniti necessitatibus cupiditate! Harum aut provident nihil"
            />
            <LeardersProfile
              imageUrl={"/sac-logo.jpeg"}
              name="Random three word"
              designation="Designation"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ex esse recusandae mollitia id tenetur molestias molestiae minus pariatur delectus est accusamus maiores vel facere, doloribus perferendis aut rem deleniti necessitatibus cupiditate! Harum aut provident nihil"
            />
          </div>
        </div>
      </div>

      <div className="xl:col-span-3 h-full  bg-[#f2f2f2] rounded-xl">
        <div className="w-fit py-5 px-10">
          <div className="text-2xl mb-[1px]">Members</div>
          <div>
            <span className="italic">Session : 2024-25</span>
          </div>
          <div className="mt-5">
            <Separator className="w-[170%] h-[2px] bg-black" />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-3 lg:grid-cols-4 md:grid-cols-3  ">
          <MemberProfileComponent
            name="Random three word"
            designation="Designation"
            imageUrl={"/members/m01.jpg"}
          />
          <MemberProfileComponent
            name="Random three word"
            designation="Designation"
            imageUrl={"/sac-logo.jpeg"}
          />
          <MemberProfileComponent
            name="Random three word"
            designation="Designation"
            imageUrl={"/sac-logo.jpeg"}
          />
          <MemberProfileComponent
            name="Random three word"
            designation="Designation"
            imageUrl={"/sac-logo.jpeg"}
          />
          <MemberProfileComponent
            name="Random three word"
            designation="Designation"
            imageUrl={"/sac-logo.jpeg"}
          />

          <MemberProfileComponent
            name="Random three word"
            designation="Designation"
            imageUrl={"/sac-logo.jpeg"}
          />
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
