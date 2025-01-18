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
        "w-full h-20 bg-[#ebdcbc]  flex px-10 justify-between",
        pathname === "/home" ? "bg-opacity-60" : ""
      )}
    >
      <Link href="/" className="my-auto flex gap-4 cursor-pointer">
        <div>
          <Image src={"/sac-logo.jpeg"} alt="Sac-logo" width={65} height={65} />
        </div>
        <div className="">
          <div className=" text-xl sm:text-2xl">Student &apos;s Academic Cell</div>
          <div className="text-lg sm:text-xl italic">BITS Pilani</div>
        </div>
      </Link>
      <NavbarItems navbarList={navbarList} />

    </NavigationMenu>
  );
};
export default Navbar;

