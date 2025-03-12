import React from 'react';

const ProjectTypeCourses = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Type Courses Guide</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Explore different types of project courses available at BITS Pilani. This comprehensive guide 
          helps you understand various project opportunities and make informed decisions about your academic journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Study Projects</h3>
            <p>Research-oriented projects focusing on theoretical aspects and literature review.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Development Projects</h3>
            <p>Hands-on projects involving software, hardware, or product development.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Industry Projects</h3>
            <p>Collaborative projects with industry partners solving real-world problems.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Project Selection Guide</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Understanding different project types and their requirements</li>
          <li>Matching projects with your career goals</li>
          <li>Prerequisites and necessary skills</li>
          <li>Time commitment and expectations</li>
          <li>Evaluation criteria and deliverables</li>
        </ul>

        <div className="bg-blue-50 p-4 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-2">Project Registration</h3>
          <p>Learn about the registration process, deadlines, and how to approach potential project mentors.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTypeCourses; 