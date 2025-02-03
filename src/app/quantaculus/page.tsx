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
} from "@/components/ui/card";

const Page = () => {
  const [, setActiveTab] = useState("2022");

  const images = [
    "https://images.unsplash.com/photo-1669352311123-085520652a65?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1737044280473-06976eb5fda5?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1735436094299-ac250a63b379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1732721750556-f5aef2460dfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const yearData = {
    2025: {
      title: "2025 and Beyond",
      description: "Shaping the future",
    },
    2024: {
      title: "2024 Goals",
      description: "Ambitious targets for a new era",
    },
    2023: {
      title: "2023 Vision",
      description: "Looking towards the future",
    },

    2022: {
      title: "2022 Achievements",
      description: "Breaking new ground",
    },

    2021: {
      title: "2021 Highlights",
      description: "A year of innovation and growth",
    },
  };

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="2025" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          {[2025, 2024, 2023, 2022, 2021].map((year) => (
            <TabsTrigger
              key={year}
              value={year.toString()}
              className="text-sm md:text-base"
            >
              {year}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(yearData).map(([year, data]) => (
          <TabsContent key={year} value={year}>
            <Card>
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ImageCarousel images={images} autoPlayInterval={5000} />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Page;
