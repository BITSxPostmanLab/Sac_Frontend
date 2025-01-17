import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ImageCarousel from "@/components/home/crousel";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1669352311123-085520652a65?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1737044280473-06976eb5fda5?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1735436094299-ac250a63b379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1732721750556-f5aef2460dfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

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
          <ImageCarousel images={images} autoPlayInterval={5000} />
          <ImageCarousel images={images} autoPlayInterval={5000} />
          <ImageCarousel images={images} autoPlayInterval={5000} />
        </div>
      </div>
    </div>
  );
};

export default Home;
