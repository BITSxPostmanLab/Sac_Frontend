"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
interface PageProps {
    params: Promise<{
        eventId: string
    }>
}
import { EventType, Resources } from "@/types";
import { getResourceArray } from "@/lib/utils";
import { FaYoutube } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";

import Link from "next/link";

const SingleEventPage = ({ params }: PageProps) => {
    // Unwrap the params Promise using React.use()
    const resolvedParams = React.use(params);
    const { eventId } = resolvedParams;

    const [currentEvent, setCurrentEvent] = useState<EventType | null>(null);
    console.log(currentEvent)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("/api/getsingleevent", {
                    params: { eventId }
                });

                setCurrentEvent(response.data as EventType);
            } catch (e) {
                console.log("There was some error", e);
            }
        };

        getData();
    }, [eventId]);

    if (!currentEvent) {
        return (
            <div className="w-full flex justify-center min-h-screen">
                <div className="min-h-full mt-10 max-w-[1000px] px-3">
                    Loading...
                </div>
            </div>
        );
    }
    const resources: Resources[] = getResourceArray(currentEvent)

    return (
        <div className="w-full justify-center min-h-full">
            <div className="bg-blue-50 h-1/2 w-full flex justify-center">
                <div className="container py-12 md:py-20 px-10 max-w-[1440px] flex justify-center">
                    <div className="grid gap-8 md:grid-cols-2 items-center">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{currentEvent.title}</h1>
                            <p className="text-gray-500">

                            </p>
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                            {/* <Image src={'/resources/chronicles1.jpg'} alt="chronicles" height={1000} width={500} className='h-[400px] w-auto ml-auto' /> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full grid justify-center grid-cols-10 px-20 gap-20">
                <div className="container col-span-8 py-12 md:py-20  max-w-[1440px] flex justify-center text-left text-lg">
                    {
                        currentEvent.description
                    }
                </div>
                <div className="col-span-2 py-10  rounded-xl flex flex-col gap-4 ">
                    <div className="font-bold text-2xl underline">
                        Resource Links
                    </div>
                    {
                        resources.map((ele, index) => {
                            return (
                                <div key={index}>
                                    {ele.name == "Youtube" ? (
                                        <Link href={ele.link} target="/">
                                            <div className="flex text-lg gap-3">
                                                <FaYoutube size={30} />
                                                Youtube
                                            </div>
                                        </Link>
                                    ) : ""}
                                    {
                                        ele.name == "Drive" ? (
                                            <Link href={ele.link} target="/">
                                                <div className="flex text-lg gap-3">
                                                    <FaGoogleDrive size={30} />
                                                    Drive
                                                </div>
                                            </Link>
                                        ) : ""
                                    }
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    );

};

export default SingleEventPage;

