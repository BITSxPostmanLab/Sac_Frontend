"use client";
import React from "react";
import LeadersProfile from "@/components/members-page/leaders-profile"; 
import MemberProfileComponent from "@/components/members-page/member-profile-component";
import { LEADERS, MEMBERS } from "./member-data";

const MembersPage = () => {
  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-8 lg:p-12">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12">
        
        <div className="xl:col-span-5 flex flex-col gap-6">
          <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 h-full border border-gray-100 shadow-sm">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b-2 border-black/5 pb-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Leadership</h2>
                <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                  Session : 2024-25
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {LEADERS.map((leader, index) => (
                <LeadersProfile
                  key={index}
                  imageUrl={leader.imageUrl}
                  name={leader.name}
                  designation={leader.designation}
                  description={leader.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="xl:col-span-7 flex flex-col gap-6">
          <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 h-full border border-gray-100 shadow-sm">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b-2 border-black/5 pb-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Members</h2>
                <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                  Session : 2024-25
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-10 gap-x-4">
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
    </div>
  );
};

export default MembersPage;