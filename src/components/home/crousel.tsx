"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const Crousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  //   const handleSelect = (index: number) => {
  //     api?.scrollTo(index);
  //   };
  return (
    <div className="py-10 relative w-full">
      <Carousel setApi={setApi} className="w-full max-h-[90vh]">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-[90vh] w-full">
                  <CardContent className="flex items-center justify-center h-full w-full">
                    <Image
                      src="/landing_image.png"
                      alt="carousel-image"
                      layout="fill"
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div
        onClick={() => api?.scrollTo(current - 1)}
        className="absolute top-1/2 w-auto h-auto "
      >
        <ChevronLeft className="h-16 w-16" />
      </div>
      <div
        onClick={() => api?.scrollTo(current + 1)}
        className="absolute top-1/2 right-0"
      >
        <ChevronRight className="h-16 w-16" />
      </div>
    </div>
  );
};

export default Crousel;
