import React from 'react';

const ElectiveReview = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Elective Course Reviews</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Comprehensive reviews and insights about elective courses at BITS Pilani. Make informed decisions 
          about your elective choices based on peer experiences and course content analysis.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Electives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Technical Electives</h3>
              <ul className="list-disc pl-6">
                <li>Machine Learning</li>
                <li>Cloud Computing</li>
                <li>Robotics</li>
                <li>Data Science</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Humanities Electives</h3>
              <ul className="list-disc pl-6">
                <li>Technical Writing</li>
                <li>Professional Ethics</li>
                <li>Environmental Studies</li>
                <li>Business Communication</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Review Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Course Content</h3>
            <p>Detailed syllabus analysis and learning outcomes</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Workload</h3>
            <p>Time commitment and assignment difficulty</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Grading Pattern</h3>
            <p>Evaluation methods and grade distribution</p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-2">Submit Your Review</h3>
          <p>Share your experience with elective courses to help your peers make better decisions.</p>
        </div>
      </div>
    </div>
  );
};

export default ElectiveReview; 