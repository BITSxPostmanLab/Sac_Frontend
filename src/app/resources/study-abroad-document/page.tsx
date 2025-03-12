import React from 'react';

const StudyAbroadDocument = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Study Abroad Guide</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Your comprehensive guide to studying abroad opportunities for BITS Pilani students. 
          This document contains everything you need to know about exchange programs, application processes, 
          and preparing for your international academic journey.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Key Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Partner Universities</h3>
            <p>Explore our network of partner institutions across the globe.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Application Process</h3>
            <p>Step-by-step guide to applying for study abroad programs.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Essential Resources</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Visa application guidelines</li>
          <li>Scholarship opportunities</li>
          <li>Credit transfer policies</li>
          <li>Pre-departure checklist</li>
          <li>Student experiences and testimonials</li>
        </ul>

        <div className="bg-blue-50 p-4 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
          <p>Keep track of application deadlines and program start dates for various universities.</p>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadDocument; 