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
    <div className="flex flex-col items-center p-6">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-md">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="144px"
        />
      </div>

      <div className="text-center mt-4">
        <div className="font-semibold leading-tight">{name}</div>
        <div className="text-sm text-gray-600">{designation}</div>
      </div>
    </div>
  );
};

export default MemberProfileComponent;