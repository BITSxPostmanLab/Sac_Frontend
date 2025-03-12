import React from 'react';

const ResearchTalks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Research Talks</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Explore cutting-edge research and academic discussions through our Research Talks series. 
          Join faculty members, researchers, and industry experts as they share their latest findings and insights.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Research Talks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Latest Research Areas</h3>
              <ul className="list-disc pl-6">
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Quantum Computing</li>
                <li>Renewable Energy</li>
                <li>Biotechnology</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Featured Speakers</h3>
              <ul className="list-disc pl-6">
                <li>Distinguished Faculty Members</li>
                <li>Industry Researchers</li>
                <li>Visiting Scholars</li>
                <li>PhD Candidates</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Benefits of Attending</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Knowledge Sharing</h3>
            <p>Learn about the latest research developments and methodologies</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Networking</h3>
            <p>Connect with researchers and experts in your field of interest</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Research Opportunities</h3>
            <p>Discover potential research collaborations and projects</p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-2">Get Involved</h3>
          <p>Learn how you can participate in or present at future research talks.</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchTalks; 