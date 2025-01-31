"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import NavbarItems from "./NavbarItems";
import Link from "next/link";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from "react";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleClick = () => {
    setNavOpen((prev) => !prev)
  }
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
        "w-full h-20 bg-[#ebdcbc]  flex px-3 md:px-10 justify-between relative",
        pathname === "/home" ? "bg-opacity-60" : ""
      )}
    >
      <Link href="/" className="my-auto flex gap-3 sm:gap-4 cursor-pointer">
        <div>
          <Image src={"/sac-logo.jpeg"} alt="Sac-logo" width={1000} height={1000} className="h-12 w-12" />
        </div>
        <div className="">
          <div className=" navbartext:text-base text-lg sm:text-2xl -mb-1 sm:mb-0">Student &apos;s Academic Cell</div>
          <div className="text-sm navbartext:text-base sm:text-xl italic">BITS Pilani</div>
        </div>
      </Link>
      <NavbarItems navbarList={navbarList} />
      <div onClick={handleClick} className="block lg:hidden">
        {navOpen ? <X /> : <Menu />}
      </div>
      {
        navOpen ? (
          <MobileNavbar setNavbarState={setNavOpen} />
        ) : ""
      }

    </NavigationMenu>
  );
};
export default Navbar;

