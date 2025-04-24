'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"

import { MoveUpRight } from 'lucide-react';
import { EventType, Resources } from '@/types'
import Link from 'next/link'
import { convertGoogleDriveUrl, getResourceArray, getSafeImageUrl } from '@/lib/utils'
export default function ImageCarouselHorizontal({ event }: { event: EventType }) {
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
    const resources: Resources[] = getResourceArray(event)
    const rawImages = event.image?.split(",").map(img => img.trim()).filter(Boolean) || [];
    const imageList = rawImages.map(ele => getSafeImageUrl(convertGoogleDriveUrl(ele)));
    return (
        <div className='flex gap-4 h-[220px] w-full relative '>
            <div className='bg-[#f2f2f2] p-4 h-[240px] rounded-xl relative border-2 w-[45%] flex-shrink-0'>
                <Carousel className='space-y-4  ' setApi={setApi}>
                    {/* <div className='text-center text-xl border-b-2 border-black pb-5 w-fit mx-auto px-10'>
                            Gallery
                        </div> */}
                    <CarouselContent>
                        {imageList.map((src, index) => (
                            <CarouselItem key={index} className='mx-auto'>
                                <div className="w-[290px] h-[170px] mx-auto relative rounded-lg overflow-hidden bg-white">
                                    <Image
                                        src={src}
                                        alt={`Gallery image ${index + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className=''>
                        <div className='absolute left-[45%] -bottom-7'>
                            <CarouselPrevious />
                        </div>
                        <div className='absolute left-1/2 mx-auto'>
                            {current}/{count}
                        </div>
                        <div className='absolute right-[40%] -bottom-7'>
                            <CarouselNext />
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className=' w-[60%] space-y-3 h-full flex flex-col'>
                <div className='text-2xl font-semibold whitespace-nowrap flex'>
                    <Link href={`/events/${event.id}`}>
                        <div className='line-clamp-1 '>
                            {title}
                        </div>
                    </Link>
                    <div className='ml-auto'>
                        <MoveUpRight />
                    </div>
                </div>
                <p className=' line-clamp-5 flex-grow'>{description}</p>
                <div className='flex justify-between px-3 mt-auto'>
                    {resources.map((ele, index) => {
                        return (
                            <Link href={ele.link} key={index}>
                                <div key={index} className='bg-[#d9d9d9] rounded-3xl py-2 px-10'>
                                    {ele.name}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

