import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ImageCarousel from "@/components/home/crousel";
import BlogCrousel from "@/components/home/blog-crousel";
import EventsCrousel from "@/components/home/events-crousel";

const Home = () => {
  const ResourceImage = [
    { src: "/production/resources/r1.jpg", link: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/resources/101` },
    { src: "/production/resources/r2.png", link: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/resources/102` },
    { src: "/production/resources/r3.png", link: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/resources/103` }
  ]

  return (

    <div className="flex flex-col justify-center items-center mb-40">
      <div className="h-screen w-full bg-slate-200 -mt-24 relative">
        {" "}
        {/* negative margin to negate the effect of shifted navbar, value should be same as height of navbar */}
        <Image
          src={"/landing_image.png"}
          alt="landing image"
          fill
          className="object-fill"
        />
        <div className=" absolute bottom-10 left-0 md:top-[40%] md:left-[10%] px-10">
          <div className="font-bold text-3xl  md:text-5xl pb-5">
            Students'
            Academic Cell
          </div>
          <Separator className="h-1 md:h-2 w-[100%]  bg-black mb-5" />
          <div className="text-center font-bold text-2xl md:text-3xl">BITS Pilani</div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] md:px-10 px-5  ">
        <div className="text-4xl font-bold text-center py-10 underline">
          Resources
        </div>
        <div className="space-y-20">
          <ImageCarousel images={ResourceImage} autoPlayInterval={5000} />
          <EventsCrousel />
          <BlogCrousel />
        </div>
      </div>
    </div>
  );
};

export default Home;

