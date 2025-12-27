"use client";
import React from "react";
import LeadersProfile from "@/components/members-page/leaders-profile";
import MemberProfileComponent from "@/components/members-page/member-profile-component";
import { LEADERS, MEMBERS } from "./member-data";

const MembersPage = () => {
  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6 lg:p-10">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        <div className="flex flex-col h-full bg-[#f4f4f5] rounded-3xl p-6 sm:p-8 xl:p-10">
            <div className="mb-8 border-b-2 border-gray-200 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Leadership
              </h2>
              <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm mt-2 sm:mt-0">
                Session : 2024-25
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
              {LEADERS.map((leader, index) => (
                <LeadersProfile
                  key={index}
                  imageUrl={leader.imageUrl}
                  name={leader.name}
                  designation={leader.designation}
                  description={leader.description}
                  className={index === LEADERS.length - 1 && LEADERS.length % 2 !== 0 ? "sm:col-span-2 sm:w-2/3 sm:mx-auto" : ""}
                />
              ))}
            </div>
        </div>

        <div className="flex flex-col h-full bg-[#f4f4f5] rounded-3xl p-6 sm:p-8 xl:p-10">
            <div className="mb-8 border-b-2 border-gray-200 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Members
              </h2>
              <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm mt-2 sm:mt-0">
                Session : 2024-25
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-4 content-start">
              {MEMBERS.map((member, index) => (
                <MemberProfileComponent
                  key={index}
                  name={member.name}
                  designation={member.designation}
                  imageUrl={member.imageUrl}
                />
              ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default MembersPage;