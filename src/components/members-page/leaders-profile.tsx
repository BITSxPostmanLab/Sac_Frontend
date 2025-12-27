"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react"; 

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
        "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full",
        "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className="relative w-full h-72 sm:h-80 overflow-hidden group">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">{name}</h3>
          <p className="text-sm font-medium text-blue-700 uppercase tracking-wider mt-1">
            {designation}
          </p>
        </div>

        <Separator className="w-12 bg-gray-300 h-[2px] mx-auto mb-4" />

        <div className="text-sm text-gray-600 leading-relaxed text-justify relative">
            <p className={cn(
                "transition-all duration-300 ease-in-out",
                isExpanded ? "" : "line-clamp-4"
            )}>
                {description}
            </p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 mt-2 text-xs font-semibold uppercase tracking-wide ml-auto transition-colors"
          >
            {isExpanded ? "Read Less" : "Read More"}
            {isExpanded ? <ChevronUp className="w-3 h-3"/> : <ChevronDown className="w-3 h-3"/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadersProfile;