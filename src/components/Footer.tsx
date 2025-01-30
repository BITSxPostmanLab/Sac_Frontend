import React from "react";
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="h-64 w-full bg-[#ebdcbc] mt-10 flex">
      <div className=" justify-center w-full footer:ml-auto  footer:w-1/2 h-full flex items-center md:px-3">
        <Image
          src={"/bitspilanilogo.png"}
          alt="bits-logo"
          height={1000}
          width={1000}
          className="w-28 h-28 footer:h-52 footer:w-52 mx-10"
        ></Image>
        <div className="flex flex-col text-slate-100 ">
          <div className=" md:pr-4 font-semibold text-2xl  footer:text-5xl -mt-10">
            <span className="font-extrabold">BITS</span> Pilani
          </div>
          <div className=" pr-4  mt-1">
            Pilani | Goa | Hyderabad | Dubai
          </div>
          <div className="flex gap-5 mt-10 justify-start md:justify-center">
            <FaInstagramSquare className="w-9 h-9 footer:w-12 footer:h-12 text-white" />
            <GrLinkedin className="w-8 h-8 mt-[2px] footer:w-11 footer:h-11 rounded-sm text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

