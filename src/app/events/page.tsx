import FilterParams from '@/components/events-page/FilterParams'
import ImageCarouselHorizontal from '@/components/events-page/ImageCrouselHorizontal'
import ImageCarouselMain from '@/components/events-page/ImageCrouselMain'
import ImageCrouselVertical from '@/components/events-page/ImageCrouselVertical'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const EventsPage = () => {

    return (
        <div className='max-w-[1660px] mx-auto py-7 space-y-10'>
            <div className='mx-auto text-5xl font-bold text-center'>
                EVENTS
            </div>
            <SearchBar />
            <FilterParams />

            <div className='space-y-14'>
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
                <div className='grid grid-cols-3 gap-10'>
                    <ImageCrouselVertical /><ImageCrouselVertical /><ImageCrouselVertical />
                    <ImageCrouselVertical /><ImageCrouselVertical /><ImageCrouselVertical />
                </div>
            </div>
        </div>
    )
}

export default EventsPage

