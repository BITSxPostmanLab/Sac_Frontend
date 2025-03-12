import React from 'react';

const PlacementTalks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Placement Talks</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Get comprehensive insights about the placement process, company profiles, and preparation 
          strategies from successful alumni and placement coordinators.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Placement Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Core Engineering</h3>
              <ul className="list-disc pl-6">
                <li>Manufacturing</li>
                <li>R&D</li>
                <li>Design</li>
                <li>Process Engineering</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">IT & Software</h3>
              <ul className="list-disc pl-6">
                <li>Software Development</li>
                <li>Data Analytics</li>
                <li>Cloud Services</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Non-Tech Roles</h3>
              <ul className="list-disc pl-6">
                <li>Consulting</li>
                <li>Analytics</li>
                <li>Investment Banking</li>
                <li>Product Management</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Preparation Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Technical Preparation</h3>
            <ul className="list-disc pl-6">
              <li>Core subject revision</li>
              <li>Coding practice</li>
              <li>Project portfolio</li>
              <li>Technical interview tips</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            <ul className="list-disc pl-6">
              <li>Resume building</li>
              <li>Group discussion</li>
              <li>HR interview preparation</li>
              <li>Communication skills</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Company Profiles</h3>
            <p>Detailed insights about companies visiting campus, their work culture, and selection process.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
            <p>Learn from the experiences of successfully placed students and their preparation strategies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementTalks; 