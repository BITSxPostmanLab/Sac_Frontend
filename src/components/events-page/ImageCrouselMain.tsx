'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { MoveUpRight } from 'lucide-react';
const imageList = [
    "/eventsTestImage.webp",
    "/eventsTestImage.webp",
    "/eventsTestImage.webp"
]
import { EventType } from '@/types';
import Link from 'next/link';

export default function ImageCarouselMain({ event }: { event: EventType }) {
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const title = event.title
    const description = event.description
    const resources = ["resource1", "resource2", "resource3"]
    return (
        <div>
            <div className='relative bg-[#f2f2f2] p-10 pb-16 h-auto rounded-xl border-2'>

                <Carousel className='space-y-10 static' setApi={setApi}>
                    <div className='text-center text-5xl border-b-2 border-black pb-5 w-fit mx-auto px-14'>
                        Gallery
                    </div>
                    <CarouselContent>
                        {imageList.map((src, index) => (
                            <CarouselItem key={index} className='mx-auto'>
                                <Image src={src} alt={`Gallery image ${index + 1}`} width={300} height={6} className='mx-auto' />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center space-x-4'>
                        <CarouselPrevious />
                        <div className=''>
                            {current}/{count}
                        </div>
                        <CarouselNext />
                    </div>
                </Carousel>

            </div>
            <div className='pt-5 flex flex-col gap-3 line-clamp-4 overflow-y-hidden '>
                <div className='text-4xl font-semibold whitespace-nowrap flex'>
                    <Link href={`/events/${event.id}`}>
                        <div className='line-clamp-1 '>
                            {title}
                        </div>
                    </Link>
                    <div className='ml-auto'>
                        <MoveUpRight />
                    </div>
                </div>
                <p className='line-clamp-4'>{description}</p>
                <div className='flex justify-between px-3 '>
                    {resources.map((ele, index) => {
                        return (
                            <div key={index} className='bg-[#d9d9d9] rounded-3xl py-2 px-10'>
                                {ele}
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

