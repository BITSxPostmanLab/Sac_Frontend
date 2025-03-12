import React from 'react';

const PSTalks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Practice School (PS) Talks</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Get insights about Practice School experiences from students and coordinators. Learn about 
          different PS stations, project opportunities, and how to make the most of your PS term.
        </p>

        <div className="bg-orange-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">PS Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">PS-1</h3>
              <ul className="list-disc pl-6">
                <li>Second-year summer program</li>
                <li>Industry exposure</li>
                <li>Basic project experience</li>
                <li>Professional environment</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">PS-2</h3>
              <ul className="list-disc pl-6">
                <li>Final year semester program</li>
                <li>Advanced projects</li>
                <li>Industry-specific skills</li>
                <li>Career opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Station Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">IT & Software</h3>
            <ul className="list-disc pl-6">
              <li>Software development</li>
              <li>Data analytics</li>
              <li>Cloud computing</li>
              <li>Web technologies</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Core Engineering</h3>
            <ul className="list-disc pl-6">
              <li>Manufacturing</li>
              <li>Design engineering</li>
              <li>Process optimization</li>
              <li>Quality control</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Research & Development</h3>
            <ul className="list-disc pl-6">
              <li>Research labs</li>
              <li>Innovation centers</li>
              <li>Product development</li>
              <li>Technology research</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Application Process</h3>
            <p>Learn about station preferences, selection criteria, and important deadlines for PS applications.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
            <p>Hear from students about their PS experiences and how they converted them into full-time opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSTalks; 