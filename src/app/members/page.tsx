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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-10 pb-10 pr-3 mx-auto">
            <LeardersProfile

              imageUrl={"/production/members/PORS/mehul_srivastava.jpg"}
              name="Mehul Srivastava"
              designation="Member Secretary"
              description="Students’ Academic Cell has always aimed to enhance the academic and research culture of BITS Pilani. Being one of the reputed institutions of the country its our responsibility to uphold this rich culture of scholastic excellence. As the Member Secretary of this Cell, my aim is to remove all potential academic or career oriented doubts that a student may confront during their engineering life. Our Core team has always been instrumental in providing innovative ideas and impactful initiatives which can help in the all round development of the students. I have always valued perfection over anything and will try to build an organization which will act as a guiding body for all the students aiding them to excel in academics as well as in their career. Leading such a prestigious organization is a matter of great honor for me and I believe that eventually we will be able to create a positive impact on our students so that they have a successful and prosperous life ahead."
            />
            <LeardersProfile
              imageUrl={"/production/members/PORS/shreyas.jpg"}
              name="Shreyas Mishra"
              designation="Events and Outreach Head"
              description="As the Outreach Head of the Students’ Academic Cell, it is both a privilege and a responsibility to spread awareness about our organization and the myriad benefits it offers to the BITSian community. My role revolves around bridging the gap between students and the wealth of resources available within the Cell, from career guidance to course selection assistance and major events like ‘Quantaculus’. Through proactive outreach efforts, I strive to ensure that every student is aware of the opportunities at their disposal and can make informed decisions about their academic and career paths. At the heart of our mission lies a commitment to enhancing the academic and research culture of BITS Pilani. With a focus on holistic development, we aim to equip students with the knowledge, skills, and guidance necessary to excel not only academically but also in their future careers. Together, we strive to create a tangible impact on the BITSian education system, providing future generations with the tools and resources they need to thrive."
            />

            <LeardersProfile
              className="mx-auto"
              imageUrl={"/production/members/PORS/arnav_dham.jpg"}
              name="Arnav Dham"
              designation="Member Secretary"
              description="Amongst all organisations and student-led clubs on campus, the Students’ Academic Cell emerges at a unique position, aiding students and researchers in ways no other organization does. With the direct support and supervision of the Director, BITS Pilani, the ever-enthusiastic and hardworking Core-Committee always comes up with new ideas, initiatives and events on a consistent basis to aid the upcoming and current batches. Being the leader of such a Core Committee, as a Member Secretary of the cell is a matter of high honor, prestige, and responsibility. Assuming this position, I intend to lead the Cell towards creating higher value for students seeking information and guidance for any and all academic, research and career-related prospects. More importantly, the major objective would be to create an actual impact in the BITSian education system through our work for the future BITSians to leverage, and build themselves even better."
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
            name="Sanghmitra Maheshwari"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/sangh.jpg"}
          />
          <MemberProfileComponent
            name="Prakriti Manocha"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/Prakriti_Manocha.jpg"}

          />
          <MemberProfileComponent
            name="Mridul Harsh"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/mridulharsh.jpg"}
          />
          <MemberProfileComponent
            name="Kushi Arun"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/Kushi_AK.jpeg"}
          /><MemberProfileComponent
            name="Krish Bhatnagar"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/krish-B.jpg"}
          /><MemberProfileComponent
            name="Jairam Ayyar"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/jairam.jpg"}
          />

          <MemberProfileComponent
            name="Garvit Budhania"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/garvit_b.jpg"}
          />
          <MemberProfileComponent
            name="Christo Alex"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/christo_ale.jpeg"}
          />
          <MemberProfileComponent
            name="Avichal Dwivedi"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/avichal.jpg"}
          />
          <MemberProfileComponent
            name="Arnav Bhardwaj"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/arnav_bhard.jpg"}
          />
          <MemberProfileComponent
            name="Anoushka Singhi"
            designation="Core Committee Member"
            imageUrl={"/production/members/normal/anoushka_s.jpg"}
          />

        </div>
      </div>
    </div>
  );
};

export default MembersPage;

