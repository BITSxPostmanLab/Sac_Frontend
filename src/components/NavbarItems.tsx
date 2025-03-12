"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const NavbarItems = ({ navbarList }: { navbarList: string[] }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

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
  return (
    <div className="hidden lg:block">
      <NavigationMenuList className="flex gap-6 xl:gap-10 ml-auto my-auto w-full ">
        <NavigationMenuItem className="bg-transparent text-lg  ">
          <Link href="/home" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(isActive("/home") && "font-bold")}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-transparent">
          <div className={cn("relative ")}>
            <NavigationMenuTrigger className="bg-transparent text-lg p-0 font-normal hover:bg-none">
              <Link href={"/events"} legacyBehavior passHref>
                <span className={cn(isActive("/events") && "font-bold")}>
                  Events
                </span>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute -left-1/2 top-14 flex justify-center">
              <div className="w-[300px] bg-[#edd299] relative">
                {eventList.map((ele, key) => {
                  const path = ele.toLowerCase().replace(/ /g, '-');
                  return (
                    <Link href={`/events/${path}`} key={key}>
                      <div className="p-2 cursor-pointer hover:bg-[#e6c27c] transition-colors">
                        {ele}
                      </div>
                    </Link>
                  );
                })}
                <div className="bg-[#edd299] clip-path-triangle w-7 h-5 absolute left-[20%] -top-5"></div>
              </div>
            </NavigationMenuContent>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-transparent relative">
          <NavigationMenuTrigger className="bg-transparent text-lg p-0 font-normal">
            <Link href={"/resources"} legacyBehavior passHref>
              <span className={cn(isActive("/resources") && "font-bold")}>
                Resources
              </span>
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute -left-1/2 top-[64px] flex justify-center">
            <div className="w-[300px] bg-[#edd299] relative">
              {resourceList.map((ele, key) => {
                const path = ele.toLowerCase().replace(/ /g, '-');
                return (
                  <Link href={`/resources/${path}`} key={key}>
                    <div className="p-2 cursor-pointer hover:bg-[#e6c27c] transition-colors">
                      {ele}
                    </div>
                  </Link>
                );
              })}
              <div className="bg-[#edd299] clip-path-triangle w-7 h-5 absolute left-[32%] -top-5"></div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {navbarList.slice(3).map((ele, key) => {
          return (
            <div key={key}>
              <NavigationMenuItem className="bg-transparent text-lg cursor-pointer">
                <Link href={`/${ele.toLowerCase()}`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      isActive(`/${ele.toLowerCase()}`) && "font-bold"
                    )}
                  >
                    {ele.charAt(0).toUpperCase() + ele.slice(1)}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          );
        })}
      </NavigationMenuList>
    </div>
  );
};
export default NavbarItems;
