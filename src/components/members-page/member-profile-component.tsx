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
    <div className="p-5 px-10">
      <Image
        src={imageUrl}
        alt="member_pfp"
        height={400}
        width={400}
        className="mx-auto rounded-full bg-slate-600 h-24 w-24 object-cover"
      />
      <div className="text-center mt-4 font-semibold">{name}</div>
      <div className="text-center">{designation}</div>
    </div>
  );
};

export default MemberProfileComponent;
