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

export default function ImageCarouselMain() {
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


    const title = "Summer Intership Talk - 2024"
    const description = "On April 26, 1986, the Number Four RBMK reactor at the Chernobyl Nuclear Power Plant exploded and released radioactive material into the environment. The accident was caused by a flawed reactor design, inadequately trained personnel, and an attempt to shut down the reactor during a power surge. "
    const resources = ["resource1", "resource2", "resource3"]
    return (
        <div className=''>
            <div className='relative bg-[#f2f2f2] p-10 pb-16 h-auto rounded-xl border-2'>
                <div>
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

            </div>
            <div className='pt-5 flex flex-col gap-5'>
                <div className='text-4xl font-semibold whitespace-nowrap flex'>
                    <div>
                        {title}
                    </div>
                    <div className='ml-auto'>
                        <MoveUpRight />
                    </div>
                </div>
                <p>{description}</p>
                <div className='flex justify-between px-3'>
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