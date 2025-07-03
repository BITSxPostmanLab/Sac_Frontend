"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface ImageItem {
  src: string;
  link?: string | { pathname: string; query?: Record<string, string> };
}

interface CarouselProps {
  images: ImageItem[];
  autoPlayInterval?: number;
  className?: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({
  images,
  autoPlayInterval = 3000,
  className = "",
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  // Track current slide and handle events
  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play functionality
  React.useEffect(() => {
    if (!api || isHovered) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, autoPlayInterval, isHovered]);

  // Preload only the first few images for better performance
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only preload first 3 images to avoid overwhelming the network
      images.slice(0, 3).forEach((image) => {
        const imgSrc = image.src;
        if (imgSrc && typeof imgSrc === 'string') {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = imgSrc;
          document.head.appendChild(link);
        }
      });
    }
  }, [images]);

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
          skipSnaps: false,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-full">
              <Card className="relative w-full h-[70vh] overflow-hidden">
                {typeof image.link === 'string' || typeof image.link === 'object' ? (
                  <Link href={image.link}>
                                      <Image
                    src={image.src || ""}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority={index === 0}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="transition-transform duration-500 hover:scale-105 object-contain cursor-pointer"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    quality={85}
                  />
                  </Link>
                ) : (
                  <Image
                    src={image.src || ""}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority={index === 0}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="transition-transform duration-500 hover:scale-105 object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    quality={85}
                  />
                )}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 bg-white/70 hover:bg-white/90 transition-all duration-200" />
        <CarouselNext className="right-4 bg-white/70 hover:bg-white/90 transition-all duration-200" />
      </Carousel>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-white w-4" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;