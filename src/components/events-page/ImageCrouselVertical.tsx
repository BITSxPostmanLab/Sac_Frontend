'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { MoveUpRight } from 'lucide-react';
import { EventType } from '@/types';
import Link from 'next/link';
const imageList = [
    "/eventsTestImage.webp",
    "/eventsTestImage.webp",
    "/eventsTestImage.webp"
]

export default function ImageCarouselVertical({ event }: { event: EventType }) {
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
    //

    const title = event.title
    const description = event.description
    const resources = ["resource1", "resource2", "resource3"]

    return (
        <div className=''>
            <div className='relative bg-[#f2f2f2] p-5 pb-16 h-auto rounded-xl border-2'>
                <div>
                    <Carousel className='space-y-10 static' setApi={setApi}>
                        <div className='text-center text-3xl border-b-2 border-black pb-5 w-fit mx-auto px-14'>
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
                            <div>
                                {current}/{count}
                            </div>
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='pt-5 space-y-4'>
                <div className=' text-xl md:text-3xl font-semibold whitespace-nowrap flex'>
                    <Link href={`/events/${event.id}`}>
                        <div className='line-clamp-1 '>
                            {title}
                        </div>
                    </Link>
                    <div className='ml-auto'>
                        <MoveUpRight />
                    </div>
                </div>
                <p className='text-sm sm:text-base line-clamp-4'>{description}</p>
                <div className='flex justify-around lg:justify-between sm:px-3 '>
                    {resources.map((ele, index) => {
                        return (
                            <div key={index} className='bg-[#d9d9d9] rounded-3xl py-2 px-4 text-sm sm:text-base sm:px-5 md:px-10'>
                                {ele}
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

