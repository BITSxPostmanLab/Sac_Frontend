import React from 'react';

const NotionDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notion Dashboard for BITS Students</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          A centralized Notion workspace designed specifically for BITS Pilani students to organize their 
          academic life, track assignments, manage projects, and collaborate with peers.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Academic Planner</h3>
              <p>Semester schedule, course tracking, and assignment management</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project Tracker</h3>
              <p>Templates for managing course projects and research work</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-2">How to duplicate the template</li>
          <li className="mb-2">Customizing your dashboard</li>
          <li className="mb-2">Setting up integrations</li>
          <li className="mb-2">Sharing and collaboration</li>
        </ol>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Templates Library</h3>
            <p>Access pre-made templates for various academic needs</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
            <p>Tips and tricks for effective dashboard organization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotionDashboard; 