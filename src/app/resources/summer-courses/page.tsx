import React from 'react';

const SummerCourses = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Summer Courses Guide</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Explore summer course opportunities at BITS Pilani and partner institutions. This guide helps you 
          plan your summer semester effectively and make the most of available learning opportunities.
        </p>

        <div className="bg-orange-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Course Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Core Courses</h3>
              <p>Essential subjects and prerequisite courses</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Electives</h3>
              <p>Specialized courses for skill enhancement</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Bridge Courses</h3>
              <p>Courses to fill academic gaps</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Important Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Registration Process</h3>
            <ul className="list-disc pl-6">
              <li>Registration dates</li>
              <li>Course selection</li>
              <li>Fee payment</li>
              <li>Prerequisites verification</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Course Structure</h3>
            <ul className="list-disc pl-6">
              <li>Duration and schedule</li>
              <li>Assessment pattern</li>
              <li>Attendance requirements</li>
              <li>Credit system</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-2">Special Programs</h3>
          <p>Information about special summer programs, workshops, and international collaborations.</p>
        </div>
      </div>
    </div>
  );
};

export default SummerCourses; 