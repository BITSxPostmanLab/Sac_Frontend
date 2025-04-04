"use client"
import FilterParams from '@/components/events-page/FilterParams'
import ImageCarouselHorizontal from '@/components/events-page/ImageCrouselHorizontal'
import ImageCarouselMain from '@/components/events-page/ImageCrouselMain'
import ImageCrouselVertical from '@/components/events-page/ImageCrouselVertical'
import SearchBar from '@/components/SearchBar'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { EventType } from '@/types'
import EventsSkeleton from '@/components/events-page/events-skeleton'

const EventsPage = () => {
    const [events, setEvents] = useState<EventType[]>()
    // State to track if the screen is wide enough
    const [LargeScreen, setLargeScreen] = useState(2000);

    // Function to check the screen size
    const checkScreenSize = () => {
        setLargeScreen(window.innerWidth);
    };

    // Run this check on mount and on window resize
    useEffect(() => {
        checkScreenSize(); // Initial check
        window.addEventListener('resize', checkScreenSize); // Listen for window resize
        return () => window.removeEventListener('resize', checkScreenSize); // Cleanup on unmount
    }, []);

    useEffect(() => {
        const getEvents = async () => {
            const data = await axios.get("/api/events")
            const res: EventType[] = await data.data
            setEvents(res)
        }
        getEvents()
        // setEvents(undefined)
    }, [])
    console.log(events)

    return (
        <div className='max-w-[1660px] mx-auto py-7 space-y-10'>
            <div className='mx-auto text-4xl md:text-5xl font-bold text-center'>
                EVENTS
            </div>
            <SearchBar />

            <div className='hidden lg:block'>
                <FilterParams />
            </div>

            <div className='space-y-14 p-5'>

                {
                    LargeScreen > 1280 ? (
                        <div className='grid w-full grid-cols-2 h-[750px] overflow-hidden gap-10'>
                            {
                                events ? (
                                    <>
                                        <div className=''>
                                            <ImageCarouselMain event={events[0]} />
                                        </div>
                                        <div className='space-y-8'>
                                            <ImageCarouselHorizontal event={events[1]} />
                                            <ImageCarouselHorizontal event={events[2]} />
                                            <ImageCarouselHorizontal event={events[3]} />

                                        </div></>

                                ) : <EventsSkeleton count={8} />
                            }

                        </div>

                    ) : (
                        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10'>
                            {events ? (
                                events.slice(0, 4).map((event) => (
                                    <div key={event.id}>
                                        <ImageCrouselVertical event={event} />
                                    </div>
                                ))
                            ) : <EventsSkeleton count={8} />}
                        </div>
                    )
                }

                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10'>
                    {events ? (
                        events.slice(4,).map((event) => (
                            <div key={event.id}>
                                <ImageCrouselVertical event={event} />
                            </div>
                        ))
                    ) : <EventsSkeleton count={8} />}

                    {/* <ImageCrouselVertical /><ImageCrouselVertical /><ImageCrouselVertical />
                    <ImageCrouselVertical /><ImageCrouselVertical /><ImageCrouselVertical /> */}
                </div>
            </div >
        </div >
    )
}

export default EventsPage

