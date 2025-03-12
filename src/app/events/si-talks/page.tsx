import React from 'react';

const SITalks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Summer Internship (SI) Talks</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Get valuable insights about summer internship experiences from your seniors. Learn about 
          different companies, roles, and how to make the most of your summer internship opportunity.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Internship Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Technology</h3>
              <ul className="list-disc pl-6">
                <li>Software Development</li>
                <li>Data Science</li>
                <li>Product Management</li>
                <li>Cloud Computing</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Finance</h3>
              <ul className="list-disc pl-6">
                <li>Investment Banking</li>
                <li>Financial Analysis</li>
                <li>Risk Management</li>
                <li>FinTech</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Consulting</h3>
              <ul className="list-disc pl-6">
                <li>Management Consulting</li>
                <li>Strategy Consulting</li>
                <li>Technology Consulting</li>
                <li>Operations</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Application Process</h3>
            <ul className="list-disc pl-6">
              <li>Resume building tips</li>
              <li>Interview preparation</li>
              <li>Company-specific insights</li>
              <li>Selection process details</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Internship Experience</h3>
            <ul className="list-disc pl-6">
              <li>Work culture insights</li>
              <li>Project experiences</li>
              <li>Skill development</li>
              <li>Networking opportunities</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-2">Upcoming SI Talks</h3>
          <p>Stay tuned for upcoming talks from students who completed their internships at top companies.</p>
        </div>
      </div>
    </div>
  );
};

export default SITalks; 