"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"; 
import { cn } from "@/lib/utils";

const LeadersProfile = ({
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
    <div
      className={cn(
        "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full",
        "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden group">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="text-center mb-3">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{name}</h3>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">
            {designation}
          </p>
        </div>

        <Separator className="w-10 bg-gray-200 h-[2px] mx-auto mb-3" />

        <div className="text-sm text-gray-600 leading-relaxed text-justify relative flex-grow">
          <p className={cn(
             // Show fewer lines initially to keep cards compact
            "transition-all duration-300 ease-in-out",
            isExpanded ? "" : "line-clamp-3" 
          )}>
            {description}
          </p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-center text-blue-600 hover:text-blue-800 mt-2 text-xs font-bold uppercase tracking-wide hover:bg-blue-50 py-1 rounded transition-colors"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadersProfile;