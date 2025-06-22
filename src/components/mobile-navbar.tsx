import React, { useState } from "react";
import { X, Dot, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface MobileNavbarProps {
  setNavbarState: (state: boolean) => void;
}

const eventList = [
  "Research Talks",
  "SI Talks",
  "Placement Talks",
  "Academics Talks",
  "PS Talks",
  "Quantaculus Talks",
  "Off-Campus Talks",
  "Thesis Talks",
  "Cold Mailing and CV Building Talks",
];

const resourceList = [
  "Project Courses Chronicles-Economics-CSIS",
  "Project Type Courses",
  "Study Abroad Document",
  "Notion Dashboard",
  "Minor Course Document",
  "GSoC",
  "Elective Review",
  "Summer Courses",
  "Handout",
  "Competitive Programming Document",
];

const MobileNavbar = ({ setNavbarState }: MobileNavbarProps) => {


  const closeSidebar = () => {
    setNavbarState(false);
  };

  const slugify = (text: string) => text.toLowerCase().replace(/ /g, "-");

  return (
    <div className="w-[100vw] h-[100vh] bg-[#ebdcbc] fixed top-0 right-0 z-50 overflow-scroll">
      <div className="h-20 flex border-b-2 border-solid border-black items-center p-3">
        <div className="text-left text-xl font-medium">Menu</div>
        <div onClick={closeSidebar} className="ml-auto cursor-pointer">
          <X className="h-8 w-8" />
        </div>
      </div>

      <div className="flex flex-col text-lg font-medium">
        <Link href="/" className="h-14 flex items-center p-2" onClick={closeSidebar}>
          <Dot /> Home
        </Link>

        {/* EVENTS DROPDOWN */}
        <div className="p-2">
          <Link href="/events"     onClick={closeSidebar} >
            <div
              className="font-semibold mb-2 flex items-center justify-between cursor-pointer"

            >
              <span className="flex items-center">
                <Dot /> Events
              </span>
            </div>
          </Link>

          <div className="flex flex-col gap-3 pl-6">
            {eventList.map((ele, idx) => (
              <Link
                key={idx}
                href={`/events/${slugify(ele)}`}
                onClick={closeSidebar}
                className="hover:underline flex"
              >
                <Dot className="text-xs" /> {ele}
              </Link>
            ))}
          </div>        </div>

        {/* RESOURCES */}
        <Link href="/resources" className="h-14 flex items-center p-2" onClick={closeSidebar}>
          <Dot /> Resources
        </Link>

        {/* Resources dropdown - commented out for later use
        <div className="p-2">
          <Link href="/resources"     onClick={closeSidebar}>
            <div
              className="font-semibold mb-2 flex items-center justify-between cursor-pointer"

            >
              <span className="flex items-center">
                <Dot /> Resources
              </span>

            </div>
          </Link>

          <div className="flex flex-col gap-3 pl-6">
            {resourceList.map((ele, idx) => (
              <Link
                key={idx}
                href={`/resources/${slugify(ele)}`}
                onClick={closeSidebar}
                className="hover:underline flex"
              >
                <Dot className="text-xs" /> {ele}
              </Link>
            ))}
          </div>

        </div> */}

        {/* Rest of the Links */}
        {[
          { href: "/gallery", label: "Gallery" },
          { href: "/members", label: "Members" },
          { href: "/blogs", label: "Blogs" },
          { href: "/ri", label: "RI" },
          { href: "/database", label: "Competition Database" },
          { href: "/quantaculus", label: "Quantaculus" },
          { href: "/contact", label: "Contact" },
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="h-14 flex items-center p-2"
            onClick={closeSidebar}
          >
            <Dot /> {item.label}
          </Link>
        ))}
      </div>
    </div >
  );
};

export default MobileNavbar;
