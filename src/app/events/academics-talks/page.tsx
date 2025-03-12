import React from 'react';

const AcademicsTalks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Academics Talks</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Enhance your academic journey with insights from faculty members, successful students, and 
          academic advisors. Learn about course selection, academic planning, and excellence strategies.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Academic Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Course Planning</h3>
              <ul className="list-disc pl-6">
                <li>Degree requirements</li>
                <li>Course prerequisites</li>
                <li>Elective selection</li>
                <li>Academic roadmap</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Study Strategies</h3>
              <ul className="list-disc pl-6">
                <li>Time management</li>
                <li>Exam preparation</li>
                <li>Research methods</li>
                <li>Project planning</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Academic Support</h3>
              <ul className="list-disc pl-6">
                <li>Faculty mentorship</li>
                <li>Study groups</li>
                <li>Learning resources</li>
                <li>Academic counseling</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Special Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Research Opportunities</h3>
            <ul className="list-disc pl-6">
              <li>Undergraduate research</li>
              <li>Research assistantships</li>
              <li>Lab work experience</li>
              <li>Publication guidance</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
            <ul className="list-disc pl-6">
              <li>Honors programs</li>
              <li>Academic competitions</li>
              <li>Scholarships</li>
              <li>Awards and recognition</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-2">Upcoming Academic Events</h3>
          <p>Stay informed about upcoming academic talks, workshops, and seminars to enhance your learning journey.</p>
        </div>
      </div>
    </div>
  );
};

export default AcademicsTalks; 