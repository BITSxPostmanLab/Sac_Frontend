import React from 'react';

const ProjectCoursesChronicles = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Courses Chronicles - Economics & CSIS</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Welcome to our comprehensive guide on project courses in Economics and Computer Science & Information Systems (CSIS). 
          This resource provides detailed insights into various project-based courses offered at BITS Pilani.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">What You&apos;ll Find Here</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Course-specific project requirements and expectations</li>
          <li>Past project examples and case studies</li>
          <li>Faculty mentorship information</li>
          <li>Timeline and deliverable guidelines</li>
          <li>Best practices and tips for success</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Economics Projects</h3>
            <p>Explore economic analysis, market research, and policy evaluation projects.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">CSIS Projects</h3>
            <p>Discover software development, data analysis, and system design projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCoursesChronicles; 