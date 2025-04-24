"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EventType } from '@/types';
import ImageCrouselVertical from '@/components/events-page/ImageCrouselVertical';
import EventsSkeleton from '@/components/events-page/events-skeleton';

const ResearchTalks = () => {
  const [academicEvents, setAcademicEvents] = useState<EventType[] | null>(null);

  useEffect(() => {
    const fetchAcademicEvents = async () => {
      try {
        const { data } = await axios.get('/api/events');
        const filtered = data.filter((event: EventType) => event.is_research);
        setAcademicEvents(filtered);
      } catch (error) {
        console.error('Error fetching academic talks:', error);
      }
    };

    fetchAcademicEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-14 text-center">Research Talks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {academicEvents ? (
          academicEvents.length > 0 ? (
            academicEvents.map((event) => (
              <ImageCrouselVertical key={event.id} event={event} />
            ))
          ) : (
            <p className="text-center col-span-full">No  talks found.</p>
          )
        ) : (
          <EventsSkeleton count={6} />
        )}
      </div>
    </div>
  );
};

export default ResearchTalks;

