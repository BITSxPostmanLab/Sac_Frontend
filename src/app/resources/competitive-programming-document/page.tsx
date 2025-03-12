import React from 'react';

const CompetitiveProgramming = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Competitive Programming Guide</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Master competitive programming with our comprehensive guide. Learn algorithms, data structures, 
          and problem-solving strategies to excel in coding competitions and technical interviews.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Basics</h3>
              <ul className="list-disc pl-6">
                <li>Time complexity</li>
                <li>Space complexity</li>
                <li>Basic data structures</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Algorithms</h3>
              <ul className="list-disc pl-6">
                <li>Sorting and searching</li>
                <li>Graph algorithms</li>
                <li>Dynamic programming</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Practice</h3>
              <ul className="list-disc pl-6">
                <li>Online judges</li>
                <li>Contest platforms</li>
                <li>Problem sets</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Advanced Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Advanced Algorithms</h3>
            <ul className="list-disc pl-6">
              <li>String algorithms</li>
              <li>Network flow</li>
              <li>Segment trees</li>
              <li>Advanced DP techniques</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Contest Strategy</h3>
            <ul className="list-disc pl-6">
              <li>Time management</li>
              <li>Problem selection</li>
              <li>Team coordination</li>
              <li>Common pitfalls</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Resources</h3>
            <p>Curated list of books, websites, and practice platforms for competitive programming.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">BITS CP Community</h3>
            <p>Join the competitive programming community at BITS Pilani for mentorship and practice.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveProgramming; 