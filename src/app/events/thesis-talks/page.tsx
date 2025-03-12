import React from 'react';

const ThesisTalks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Thesis Talks</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Get comprehensive guidance on thesis writing and research methodology. Learn from faculty 
          members and senior students about choosing topics, conducting research, and writing an effective thesis.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Engineering</h3>
              <ul className="list-disc pl-6">
                <li>Software Systems</li>
                <li>Robotics & AI</li>
                <li>Electronics Design</li>
                <li>Sustainable Tech</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Sciences</h3>
              <ul className="list-disc pl-6">
                <li>Material Science</li>
                <li>Biotechnology</li>
                <li>Physics Research</li>
                <li>Chemical Analysis</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Interdisciplinary</h3>
              <ul className="list-disc pl-6">
                <li>Tech Economics</li>
                <li>Bio-informatics</li>
                <li>Environmental Studies</li>
                <li>Data Science</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Thesis Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Research Methodology</h3>
            <ul className="list-disc pl-6">
              <li>Literature review</li>
              <li>Problem formulation</li>
              <li>Research design</li>
              <li>Data collection methods</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Writing Guidelines</h3>
            <ul className="list-disc pl-6">
              <li>Thesis structure</li>
              <li>Academic writing</li>
              <li>Citation styles</li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Faculty Mentorship</h3>
            <p>Connect with experienced faculty members for guidance and supervision in your research area.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Research Tools</h3>
            <p>Learn about research tools, software, and resources available for thesis development.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThesisTalks; 