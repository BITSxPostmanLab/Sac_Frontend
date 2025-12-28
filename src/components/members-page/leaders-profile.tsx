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
      {/* Image Container - Slightly reduced height to keep card compact in 2-col layout */}
      <div className="relative w-full h-64 overflow-hidden group">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="text-center mb-3">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">{name}</h3>
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-1">
            {designation}
          </p>
        </div>

        <Separator className="w-10 bg-gray-300 h-[2px] mx-auto mb-3" />

        <div className="text-sm text-gray-600 leading-relaxed text-justify relative flex flex-col flex-grow">
            <p className={cn(
                "transition-all duration-300 ease-in-out",
                isExpanded ? "" : "line-clamp-3" // Reduced clamp to 3 lines for compactness
            )}>
                {description}
            </p>
          
          <div className="mt-auto pt-2 flex justify-end">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs font-bold uppercase tracking-wide transition-colors"
            >
                {isExpanded ? "Less" : "More"}
                {isExpanded ? <ChevronUp className="w-3 h-3"/> : <ChevronDown className="w-3 h-3"/>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadersProfile;