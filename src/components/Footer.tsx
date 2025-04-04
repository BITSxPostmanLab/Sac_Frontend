import React from "react";
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="h-80 w-full bg-[#ebdcbc]  flex flex-col">
      <div className="justify-center w-full footer:ml-auto footer:w-1/2 h-3/4 flex items-center md:px-3">
        <Image
          src={"/bitspilanilogo.png"}
          alt="bits-logo"
          height={1000}
          width={1000}
          className="w-28 h-28 footer:h-52 footer:w-52 mx-10"
        />
        <div className="flex flex-col text-slate-100">
          <div className="md:pr-4 font-semibold text-2xl footer:text-5xl -mt-10">
            <span className="font-extrabold">BITS</span> Pilani
          </div>
          <div className="pr-4 mt-1">Pilani | Goa | Hyderabad | Dubai</div>
          <div className="flex gap-5 mt-10 justify-start md:justify-center">
            <FaInstagramSquare className="w-9 h-9 footer:w-12 footer:h-12 text-white" />
            <GrLinkedin className="w-8 h-8 mt-[2px] footer:w-11 footer:h-11 rounded-sm text-white" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-1/4">
        <div className="flex  items-center text-slate-100 sm:space-x-5 flex-col gap-3 sm:flex-row">
          <p className="font-medium text-xl ">Made in collaboration with</p>
          <p className="font-bold text-2xl animate-bounce text-[#5E988A]">
            BITSxPostman Innovation Lab
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

