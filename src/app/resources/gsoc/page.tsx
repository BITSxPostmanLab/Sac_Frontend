import React from 'react';

const GSoCGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Google Summer of Code (GSoC) Guide</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Welcome to our comprehensive GSoC resource page! This guide will help you understand 
          the Google Summer of Code program and prepare you for a successful application and participation.
        </p>

        <div className="bg-yellow-50 p-4 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-2">Quick Start Guide</h2>
          <p>Learn about GSoC, its timeline, and how to get started with your application process.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Preparation Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Organization Selection</h3>
            <p>Tips for choosing the right organization and project.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Proposal Writing</h3>
            <p>Guide to writing a strong project proposal.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <p>Required technical skills and how to develop them.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Success Stories</h2>
        <div className="bg-green-50 p-4 rounded-lg mb-8">
          <p>Read about successful GSoC experiences from BITS Pilani students and learn from their journeys.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Important Resources</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Official GSoC website and documentation</li>
          <li>Past year projects and organizations</li>
          <li>Community forums and discussion groups</li>
          <li>Mentorship opportunities</li>
          <li>Timeline and important dates</li>
        </ul>
      </div>
    </div>
  );
};

export default GSoCGuide; 