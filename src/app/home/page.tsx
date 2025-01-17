import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Crousel from "@/components/home/crousel";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-screen w-full bg-slate-200 -mt-24 relative">
        {" "}
        {/* negative margin to negate the effect of shifted navbar, value should be same as height of navbar */}
        <Image
          src={"/landing_image.png"}
          alt="landing image"
          objectFit="fill"
          layout="fill"
        />
        <div className="z-10 absolute top-[40%] left-[10%]">
          <div className="font-bold text-5xl pb-5">
            Students&apos; <br />
            Academic Cell
          </div>
          <Separator className="h-2 w-[140%] -ml-[20%] bg-black mb-5" />
          <div className="text-center font-bold text-3xl">BITS Pilani</div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] ">
        <div className="text-4xl font-bold text-center py-10">
          About SAC, BITS Pilani
        </div>
        <div className="space-y-20">
          <Crousel />
          <Crousel />
          <Crousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
