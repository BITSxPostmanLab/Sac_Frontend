import React from 'react';

const ColdMailingAndCVBuildingTalks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cold Mailing & CV Building</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Master the art of professional communication and CV creation. Learn effective strategies for 
          cold mailing potential employers and crafting compelling CVs that stand out.
        </p>

        <div className="bg-teal-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cold Mailing Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <ul className="list-disc pl-6">
                <li>Company profiling</li>
                <li>Contact identification</li>
                <li>Industry research</li>
                <li>Role matching</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Email Crafting</h3>
              <ul className="list-disc pl-6">
                <li>Subject lines</li>
                <li>Email structure</li>
                <li>Professional tone</li>
                <li>Follow-up timing</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Personalization</h3>
              <ul className="list-disc pl-6">
                <li>Company specifics</li>
                <li>Role alignment</li>
                <li>Value proposition</li>
                <li>Cultural fit</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">CV Building Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Content Organization</h3>
            <ul className="list-disc pl-6">
              <li>Professional summary</li>
              <li>Skills highlighting</li>
              <li>Experience formatting</li>
              <li>Achievement metrics</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Design Elements</h3>
            <ul className="list-disc pl-6">
              <li>Visual hierarchy</li>
              <li>Typography choice</li>
              <li>Layout optimization</li>
              <li>ATS compatibility</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
            <p>Learn from students who secured opportunities through effective cold mailing and strong CVs.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Templates & Resources</h3>
            <p>Access proven email templates, CV formats, and tools for professional communication.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColdMailingAndCVBuildingTalks; 