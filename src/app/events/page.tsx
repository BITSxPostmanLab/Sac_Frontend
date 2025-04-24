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
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);
    const [events, setEvents] = useState<EventType[]>()
    const [filterParam, setFilterParam] = useState('All');

    useEffect(() => {
        if (!events) return;

        let filtered = events;

        if (filterParam !== 'All') {
            const map: Record<string, keyof EventType> = {
                'Research Talks': 'is_research',
                'SI Talks': 'is_SI',
                'Placement Talks': 'is_placement',
                'Academic Talks': 'is_Academic',
                'PS Talks': 'is_PS',
            };
            const key = map[filterParam];
            filtered = filtered.filter(event => event[key]);
        }

        if (searchTerm !== '') {
            filtered = filtered.filter(event =>
                event.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredEvents(filtered);
    }, [searchTerm, events, filterParam]);
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
            const { data } = await axios.get("/api/events")
            const sortedEvents: EventType[] = data.sort((a: EventType, b: EventType) => {
                return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
            })
            setEvents(sortedEvents)

        }
        getEvents()
        // setEvents(undefined)
    }, [])

    return (
        <div className='max-w-[1660px] mx-auto py-7 space-y-10'>
            <div className='mx-auto text-4xl md:text-5xl font-bold text-center'>
                EVENTS
            </div>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />

            <div className='hidden lg:block'>
                <FilterParams currentParam={filterParam} setCurrentParam={setFilterParam} />
            </div>

            <div className='space-y-14 p-5'>

                {searchTerm === '' && LargeScreen > 1280 && filteredEvents.length >= 4 && filterParam === "All" ? (
                    // 🌟 Main Carousel + Horizontal Carousels (for wide screens + no search)
                    <div className='grid w-full grid-cols-2 h-[750px] overflow-hidden gap-10'>
                        <>
                            <div>
                                <ImageCarouselMain event={filteredEvents[0]} />
                            </div>
                            <div className='space-y-8'>
                                <ImageCarouselHorizontal event={filteredEvents[1]} />
                                <ImageCarouselHorizontal event={filteredEvents[2]} />
                                <ImageCarouselHorizontal event={filteredEvents[3]} />
                            </div>
                        </>
                    </div>
                ) : (
                    // 📱 Vertical Grid (for search results or smaller screens)
                    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10'>
                        {filteredEvents.length ? (
                            filteredEvents.map((event) => (
                                <div key={event.id}>
                                    <ImageCrouselVertical event={event} />
                                </div>
                            ))
                        ) : (
                            <EventsSkeleton count={8} />
                        )}
                    </div>
                )}

                {
                    searchTerm === '' && filterParam === "All" ? (
                        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10'>
                            {events ? (
                                events.slice(4,).map((event) => (
                                    <div key={event.id}>
                                        <ImageCrouselVertical event={event} />
                                    </div>
                                ))
                            ) : <EventsSkeleton count={8} />}

                        </div>
                    ) : (
                        ""
                    )
                }

            </div >
        </div >
    )
}

export default EventsPage

