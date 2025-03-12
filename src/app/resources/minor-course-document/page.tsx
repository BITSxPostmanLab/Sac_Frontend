import React from 'react';

const MinorCourseDocument = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Minor Course Guide</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Everything you need to know about pursuing a minor degree at BITS Pilani. This comprehensive guide 
          helps you understand the requirements, course options, and planning strategies for your minor degree.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Available Minor Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Engineering</h3>
              <p>Computer Science, Electronics, Mechanical, and more</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Sciences</h3>
              <p>Physics, Chemistry, Mathematics, Biology</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Economics</h3>
              <p>Finance, Business Economics, Analytics</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Requirements and Planning</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Credit requirements for minor degree</li>
          <li>Course prerequisites and planning</li>
          <li>CGPA requirements and eligibility</li>
          <li>Registration process and deadlines</li>
          <li>Course substitution policies</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Course Selection Strategy</h3>
            <p>Tips for choosing the right minor courses and balancing with your major degree requirements.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Career Impact</h3>
            <p>How different minor degrees can enhance your career prospects and complement your major.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinorCourseDocument; 