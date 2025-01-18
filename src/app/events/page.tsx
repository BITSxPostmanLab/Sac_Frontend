"use client"
import FilterParams from '@/components/events-page/FilterParams'
import ImageCarouselHorizontal from '@/components/events-page/ImageCrouselHorizontal'
import ImageCarouselMain from '@/components/events-page/ImageCrouselMain'
import ImageCrouselVertical from '@/components/events-page/ImageCrouselVertical'
import SearchBar from '@/components/SearchBar'
import React from 'react'
import { useState, useEffect } from 'react'

const EventsPage = () => {
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

                            <div className=''>
                                <ImageCarouselMain />
                            </div>
                            <div className='space-y-8'>
                                <ImageCarouselHorizontal />
                                <ImageCarouselHorizontal />
                                <ImageCarouselHorizontal />

                            </div>
                        </div>

                    ) : (
                        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10'>
                            <ImageCrouselVertical /><ImageCrouselVertical /><ImageCrouselVertical />
                            <ImageCrouselVertical /><ImageCrouselVertical /><ImageCrouselVertical />
                        </div>
                    )
                }

                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10'>
                    <ImageCrouselVertical /><ImageCrouselVertical /><ImageCrouselVertical />
                    <ImageCrouselVertical /><ImageCrouselVertical /><ImageCrouselVertical />
                </div>
            </div >
        </div >
    )
}

export default EventsPage

