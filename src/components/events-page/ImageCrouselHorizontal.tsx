'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
const imageList = [
    "/eventsTestImage.webp",
    "/eventsTestImage.webp",
    "/eventsTestImage.webp",
]
import { MoveUpRight } from 'lucide-react';
export default function ImageCarouselHorizontal() {
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
    const resources = ["resource1", "resource2",]
    return (
        <div className='flex gap-4 h-[220px] w-full relative '>
            <div className='bg-[#f2f2f2] p-4 h-[240px] rounded-xl relative border-2 w-[60%]'>
                <Carousel className='space-y-4  ' setApi={setApi}>
                    {/* <div className='text-center text-xl border-b-2 border-black pb-5 w-fit mx-auto px-10'>
                            Gallery
                        </div> */}
                    <CarouselContent>
                        {imageList.map((src, index) => (
                            <CarouselItem key={index} className='mx-auto'>
                                <Image src={src} alt={`Gallery image ${index + 1}`}
                                    width={1000}
                                    height={0}
                                    className="h-[170px] w-auto mx-auto" />
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
            <div className=' w-[60%] space-y-3'>
                <div className='text-2xl font-semibold whitespace-nowrap flex'>
                    <div>
                        {title}
                    </div>
                    <div className='ml-auto'>
                        <MoveUpRight />
                    </div>
                </div>
                <p className=' line-clamp-5'>{description}</p>
                <div className='flex justify-between px-3 mt-auto'>
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

