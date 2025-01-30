"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import NavbarItems from "./NavbarItems";
import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname();
  const navbarList = [
    "Home",
    "Events",
    "Resources",
    "Gallery",
    "Members",
    "Blogs",
    "Contact",
  ];
  return (
    <NavigationMenu
      className={cn(
        "w-full h-20 bg-[#ebdcbc]  flex px-3 md:px-10 justify-between",
        pathname === "/home" ? "bg-opacity-60" : ""
      )}
    >
      <Link href="/" className="my-auto flex gap-3 sm:gap-4 cursor-pointer">
        <div>
          <Image src={"/sac-logo.jpeg"} alt="Sac-logo" width={1000} height={1000} className="h-12 w-12" />
        </div>
        <div className="">
          <div className=" text-lg sm:text-2xl -mb-1 sm:mb-0">Student &apos;s Academic Cell</div>
          <div className="text-sm sm:text-xl italic">BITS Pilani</div>
        </div>
      </Link>
      <NavbarItems navbarList={navbarList} />

    </NavigationMenu>
  );
};
export default Navbar;

