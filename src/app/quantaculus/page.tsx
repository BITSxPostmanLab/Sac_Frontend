"use client";

import { useState } from "react";
import ImageCarousel from "@/components/home/crousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

const Page = () => {
  const [, setActiveTab] = useState("2022");

  // Convert Google Drive URLs to viewable format
  const convertGoogleDriveUrl = (url: string) => {
    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("/file/d/")[1].split("/")[0];
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    return url;
  };

  // Specific images for each year
  const images2025 = [
    convertGoogleDriveUrl("https://drive.google.com/file/d/1zHTD3hzoDp-Ffe42xpa2kR0btQ2GpjMH/view?usp=sharing"),
  ];

  const images2024 = [
    convertGoogleDriveUrl("https://drive.google.com/file/d/1mYer61t8Lpdg7800Tl9PSunITXZTPI35/view?usp=sharing"),
    convertGoogleDriveUrl("https://drive.google.com/file/d/1R9daI1Ns2_T3jY8SITF0397ZuQpXtpOu/view?usp=sharing"),
    convertGoogleDriveUrl("https://drive.google.com/file/d/1_wEpcI_bzIqpHtfnnFDHvBQzDR7jVvX_/view?usp=sharing"),
    convertGoogleDriveUrl("https://drive.google.com/file/d/1TeXzZQgOE2w-CKK_qpyYcBDEP-n2iJjF/view?usp=sharing"),
    convertGoogleDriveUrl("https://drive.google.com/file/d/1_2Vu7lsjoWikdyBdVtRCDdrz9WDjcz42/view?usp=sharing"),
  ];

  const images2023 = [
    convertGoogleDriveUrl("https://drive.google.com/file/d/15eFUoH7s8g0m4F32lmnRR-VCi9YWwpaN/view?usp=sharing"),
    convertGoogleDriveUrl("https://drive.google.com/file/d/19pDYBI0tQutjNQiKwXxzXpeMLCfhZoVG/view?usp=sharing"),
    convertGoogleDriveUrl("https://drive.google.com/file/d/1iKM9461X0UC0ulGIq-JcSw1uwxQuud-h/view?usp=sharing"),
  ];

  // Convert to format needed by ImageCarousel
  const imageItems2025 = images2025.map(src => ({ src, link: "#" }));
  const imageItems2024 = images2024.map(src => ({ src, link: "#" }));
  const imageItems2023 = images2023.map(src => ({ src, link: "#" }));

  const yearData = {
    2025: {
      title: "2025",
      description: "Shaping",
      images: imageItems2025
    },
    2024: {
      title: "2024",
      description: "",
      images: imageItems2024
    },
    2023: {
      title: "2023",
      description: "",
      images: imageItems2023
    },
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
      <Tabs defaultValue="2025" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-3 gap-1 sm:gap-2">
          {[2025, 2024, 2023].map((year) => (
            <TabsTrigger
              key={year}
              value={year.toString()}
              className="text-xs sm:text-sm md:text-base px-1 py-1 sm:px-2 sm:py-2"
            >
              {year}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(yearData).map(([year, data]) => (
          <TabsContent key={year} value={year}>
            <Card className="mt-2 sm:mt-4">
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-lg sm:text-xl md:text-2xl">
                  {data.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {data.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 sm:p-4">
                <ImageCarousel images={data.images} autoPlayInterval={5000} />
              </CardContent>
              <CardFooter className="flex justify-center p-4 pt-2">
                <Link 
                  href="https://drive.google.com/drive/folders/1R00D5t8wEX4FxveNITVfvib7zyvDP2GK?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-center font-medium"
                >
                  View Quantaculus 2024 Questions & Solutions
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Page;
