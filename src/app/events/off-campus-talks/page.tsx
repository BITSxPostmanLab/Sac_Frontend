import React from 'react';

const OffCampusTalks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Off-Campus Opportunities</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Discover opportunities beyond campus placements. Learn about off-campus recruitment, 
          networking strategies, and how to secure positions at your dream companies independently.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Job Search Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Online Platforms</h3>
              <ul className="list-disc pl-6">
                <li>LinkedIn optimization</li>
                <li>Job portals</li>
                <li>Company websites</li>
                <li>Professional networks</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Direct Applications</h3>
              <ul className="list-disc pl-6">
                <li>Company research</li>
                <li>Application tracking</li>
                <li>Follow-up strategies</li>
                <li>Email templates</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <ul className="list-disc pl-6">
                <li>Alumni connections</li>
                <li>Industry events</li>
                <li>Professional meetups</li>
                <li>Social media</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Resume Building</h3>
            <ul className="list-disc pl-6">
              <li>ATS optimization</li>
              <li>Industry-specific formats</li>
              <li>Project highlights</li>
              <li>Keywords optimization</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Interview Preparation</h3>
            <ul className="list-disc pl-6">
              <li>Company-specific prep</li>
              <li>Technical interviews</li>
              <li>HR rounds</li>
              <li>Salary negotiation</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
            <p>Learn from students who successfully secured off-campus opportunities at top companies.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Resources</h3>
            <p>Access curated resources, guides, and tools for off-campus job search and applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCampusTalks; 