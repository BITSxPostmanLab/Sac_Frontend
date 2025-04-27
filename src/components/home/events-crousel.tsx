"use client";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import ImageCarousel from "./crousel";
// import { EventType } from "@/types";
import { convertGoogleDriveUrl, getSafeImageUrl } from "@/lib/utils";
// import { link } from "fs";

interface ImageItem {
    src: string;
    link?: string | { pathname: string; query?: Record<string, string> };
}

const EventsCrousel = () => {
    const [eventImages, setEventImages] = useState<ImageItem[]>([]);

    useEffect(() => {
        setEventImages([{ //ps2 2025
            src: getSafeImageUrl(convertGoogleDriveUrl("https://drive.google.com/file/d/1eG9PmKUogjtjrMreMmenGdMa0ciuEZCH/view?usp=sharing")),
            link: "https://discoverwithsac-bitspilani.in/events/25"
        }, {
            src: getSafeImageUrl(convertGoogleDriveUrl("https://drive.google.com/file/d/1VNETZa1PA7zC6IjbQivfvw8Fv98nIyYL/view?usp=drive_link")),
            link: "https://discoverwithsac-bitspilani.in/events/3" // off campus
        }, {
            src: getSafeImageUrl(convertGoogleDriveUrl("https://drive.google.com/file/d/1twW8TNZmSu2ZX5TR55-RGKZ8lWnHxJ3c/view?usp=sharing")),
            link: "https://discoverwithsac-bitspilani.in/events/16" // RI talk 2025
        },
        ])
    }, [])

    // useEffect(() => {
    //     const getEvents = async () => {
    //         try {
    //             const { data } = await axios.get("/api/events");
    //             const sortedEvents: EventType[] = data
    //                 .sort(
    //                     (a: EventType, b: EventType) =>
    //                         new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    //                 )
    //                 .slice(0, 3); // Get only first 3 events

    //             const images = sortedEvents.map((event) => {
    //                 const firstImage = event.image.split(",")[0].trim(); // Extract first image
    //                 const rawImageUrl = convertGoogleDriveUrl(firstImage);
    //                 const safeImage = getSafeImageUrl(rawImageUrl); // Optional cleaner
    //                 return {
    //                     src: safeImage,
    //                     link: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/events/${event.id}`, // You can update this to navigate to event-specific pages later
    //                 };
    //             });

    //             setEventImages(images);
    //         } catch (error) {
    //             console.error("Error fetching events:", error);
    //         }
    //     };

    //     getEvents();
    // }, []);

    return (
        <div>
            <div className="text-4xl font-bold text-center py-5 underline">
                Events
            </div>
            <ImageCarousel images={eventImages} autoPlayInterval={5000} />
        </div>
    );
};

export default EventsCrousel;

