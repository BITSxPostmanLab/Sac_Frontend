import React from "react";
import Image from "next/image";

const MemberProfileComponent = ({
  name,
  designation,
  imageUrl,
}: {
  name: string;
  designation: string;
  imageUrl: string;
}) => {
  return (
    <div className="group flex flex-col items-center p-4">
      {/* Image Container - Increased Size */}
      <div className="relative mb-5">
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 xl:w-44 xl:h-44 rounded-full overflow-hidden border-[5px] border-white shadow-lg ring-1 ring-gray-200 group-hover:ring-blue-500 transition-all duration-300 group-hover:scale-105">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 160px, 192px"
          />
        </div>
      </div>

      {/* Text Info */}
      <div className="text-center px-2">
        <div className="font-bold text-gray-900 text-base sm:text-lg leading-tight group-hover:text-blue-700 transition-colors duration-300">
          {name}
        </div>
        <div className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wide mt-1.5">
          {designation}
        </div>
      </div>
    </div>
  );
};

export default MemberProfileComponent;