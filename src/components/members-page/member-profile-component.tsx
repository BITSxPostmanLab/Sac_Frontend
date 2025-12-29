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
    <div className="group flex flex-col items-center p-4 transition-transform duration-300">
      <div className="relative mb-4">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-gray-200 group-hover:ring-blue-400 transition-all duration-300">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 150px, 200px"
          />
        </div>
      </div>

      <div className="text-center">
        <div className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-700 transition-colors duration-300">
          {name}
        </div>
        <div className="text-sm text-gray-500 font-medium mt-1">
          {designation}
        </div>
      </div>
    </div>
  );
};

export default MemberProfileComponent;