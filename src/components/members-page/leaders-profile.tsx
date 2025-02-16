"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";

const LeardersProfile = ({
  className,
  imageUrl,
  name,
  designation,
  description,
}: {
  className?: string;
  imageUrl: string;
  name: string;
  designation: string;
  description: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={className}>
      <Image
        src={imageUrl}
        alt="member_pfp"
        height={1000}
        width={1000}
        className="w-[250px] h-[250px] mx-auto rounded-xl object-contain"
      />
      <div className="text-center mt-4 font-semibold">{name}</div>
      <div className="text-center mb-2">{designation}</div>
      <Separator className="w-[70px] bg-black h-[1px] mx-auto mb-5" />
      <div className="text-center sm:text-left">
        <div className={`${isExpanded ? "" : "line-clamp-4"}`}>
          {description}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800 mt-2 font-medium"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default LeardersProfile;
