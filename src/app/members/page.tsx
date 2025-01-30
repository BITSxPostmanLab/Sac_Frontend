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
            <LeardersProfile className="" />
            <LeardersProfile />

            <LeardersProfile />
            <LeardersProfile />
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
          <MemberProfileComponent />
          <MemberProfileComponent />
          <MemberProfileComponent />
          <MemberProfileComponent />
          <MemberProfileComponent />
          <MemberProfileComponent />
          <MemberProfileComponent />
          <MemberProfileComponent />
        </div>
      </div>
    </div>
  );
};

export default MembersPage;

