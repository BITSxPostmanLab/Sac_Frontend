import React from 'react';

const Handout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Course Handouts Repository</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Access and manage course handouts for all your subjects. This centralized repository helps you 
          stay organized with your course materials and prepare effectively for your studies.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">First Year</h3>
              <p>Basic science and engineering courses</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Second Year</h3>
              <p>Core department courses</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Third Year</h3>
              <p>Advanced specialization courses</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Final Year</h3>
              <p>Electives and project courses</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Handout Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Course Overview</h3>
            <ul className="list-disc pl-6">
              <li>Course objectives</li>
              <li>Learning outcomes</li>
              <li>Prerequisites</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Content Structure</h3>
            <ul className="list-disc pl-6">
              <li>Weekly schedule</li>
              <li>Topic breakdown</li>
              <li>Reference materials</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Evaluation</h3>
            <ul className="list-disc pl-6">
              <li>Grading policy</li>
              <li>Assignment details</li>
              <li>Exam pattern</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-2">Download Instructions</h3>
          <p>Learn how to access, download, and organize your course handouts effectively.</p>
        </div>
      </div>
    </div>
  );
};

export default Handout; 