"use client";
import React from "react";
import LeadersProfile from "@/components/members-page/leaders-profile"; 
import MemberProfileComponent from "@/components/members-page/member-profile-component";
import { LEADERS, MEMBERS } from "./member-data"; // Ensure this matches your data file location

const MembersPage = () => {
  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-8 lg:p-10">
      {/* Changed main grid to split 6-6 instead of 5-7. 
         This gives the Leaders section enough room to show 2 cards per row.
      */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* --- LEFT COLUMN: LEADERSHIP --- */}
        <div className="xl:col-span-6 flex flex-col gap-6">
          <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 h-full border border-gray-100 shadow-sm">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b-2 border-black/5 pb-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Leadership</h2>
                <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                  Session : 2024-25
                </span>
              </div>
            </div>

            {/* Leaders Grid - CHANGED to 2 columns on medium+ screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LEADERS.map((leader, index) => (
                <LeadersProfile
                  key={index}
                  imageUrl={leader.imageUrl}
                  name={leader.name}
                  designation={leader.designation}
                  description={leader.description}
                  // Optional: Span full width if it's the last item in an odd numbered list to look balanced
                  className={index === LEADERS.length - 1 && LEADERS.length % 2 !== 0 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: MEMBERS --- */}
        <div className="xl:col-span-6 flex flex-col gap-6">
          <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 h-full border border-gray-100 shadow-sm">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b-2 border-black/5 pb-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Members</h2>
                <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                  Session : 2024-25
                </span>
              </div>
            </div>

            {/* Members Grid - 2 cols on mobile, 3 on tablet, 3 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-4">
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