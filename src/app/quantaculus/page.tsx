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
    convertGoogleDriveUrl("https://drive.google.com/file/d/1kfqerU0wiBInHsaFyw5iCvCsNKdH4E3G/view?usp=drive_link"),
    convertGoogleDriveUrl("https://drive.google.com/file/d/11bfLJUzZJx2h3pzQixubg3cteBwd2nsT/view?usp=drive_link"),
    convertGoogleDriveUrl("https://drive.google.com/file/d/1qrKGRXpiDUBvEQaQ5nVf2tMQGW-vKBx2/view?usp=drive_link"),
    convertGoogleDriveUrl("https://drive.google.com/file/d/1QqHnaA1NBWgYrgda8DlbeZFxU9qJPQjh/view?usp=drive_link"),
    convertGoogleDriveUrl("https://drive.google.com/file/d/1svInwilG6h23QgEHp0wrpVyWILzcRyX-/view?usp=drive_link")

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
      description: `This year the Students’ Academic Cell introduced its first ever APOGEE event. Quantaculus is a Problem Solving/Analytical Event which took place in 4 rounds:
  
  • Round 1: QuantQuest – A quantitative aptitude quiz which judged the speed and accuracy of participants
  
  • Round 2: Cadence Of Creation – An intriguing case study-based round that tested their Analytical Skills.
  
  • Round 3: Debugging Duet – A competitive coding round to judge your programming skills
  
  • Round 4: Calculus Bee – After 2 vigorous rounds, the qualifying teams competed against each other in a good old fashioned Calculus quiz.`,
      images: imageItems2025,
      driveLink: "https://drive.google.com/drive/folders/17K_M-1-ZVyoNqfTk4Wn535s3WDKzCAeb?usp=sharing" 
    },
    2024: {
      title: "2024",
      description: `This year Quantaculus returned as a kernel event in APOGEE 2024. The event took place in 3 rounds, and this time a new competitive programming round was added.
  
  • Round 1: QuantQuest – A quantitative aptitude quiz which judged the speed and accuracy of participants
  
  • Round 2: A Lunar Mystery Dystopia – An intriguing case study-based round that tested their Analytical Skills.
  
  • Round 3: Celestial Calulode – After 2 vigorous rounds, the top 8 teams competed against each other in a one-hour long competitive programming contest. The top 4 teams qualified for the Integration Bee round.
  
  Quantitative Finance Talk by Rishant Kumar Singh: Following the second round of the event, a talk on quantitative finance was held by Rishant Kumar Singh, the Vice President of Systematic Trading at Edelweiss. He provided insightful details on the field, sharing his expertise and experience.`,
      images: imageItems2024,
      driveLink: "https://drive.google.com/drive/folders/1R00D5t8wEX4FxveNITVfvib7zyvDP2GK?usp=sharing"
    },
    2023: {
      title: "2023",
      description: `This year the Students’ Academic Cell introduced its first ever APOGEE event.
  Quantaculus is a Problem Solving/Analytical Event which took place in 3 rounds:
  
  • Round 1: QuantQuest – A quantitative aptitude quiz which judged the speed and accuracy of participants
  
  • Round 2: The Unforeseen Dystopia – An intriguing case study-based round that tested their Analytical Skills.
  
  • Round 3: Calculus Bee – After 2 vigorous rounds, the qualifying teams competed against each other in a good old fashioned Calculus quiz.`,
      images: imageItems2023,
      driveLink:null
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
                <CardDescription className="text-sm sm:text-base whitespace-pre-line">
                  {data.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 sm:p-4">
                <ImageCarousel images={data.images} autoPlayInterval={5000} />
              </CardContent>
              {data.driveLink && (
                <CardFooter className="flex justify-center p-4 pt-2">
                  <Link
                    href={data.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline text-center font-medium"
                  >
                    View Quantaculus {data.title} Questions & Solutions
                  </Link>
                </CardFooter>
              )}
            </Card>
          </TabsContent>
        ))}

      </Tabs>
    </div>
  );
};

export default Page;
