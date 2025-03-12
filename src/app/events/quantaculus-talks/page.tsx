import React from 'react';

const QuantaculusTalks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Quantaculus Talks</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Explore the world of quantitative finance and algorithmic trading through our Quantaculus talks series. 
          Learn from industry experts and successful quants about strategies, tools, and career opportunities.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Core Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Quantitative Analysis</h3>
              <ul className="list-disc pl-6">
                <li>Statistical modeling</li>
                <li>Risk management</li>
                <li>Portfolio optimization</li>
                <li>Time series analysis</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Algorithmic Trading</h3>
              <ul className="list-disc pl-6">
                <li>Trading strategies</li>
                <li>Market microstructure</li>
                <li>High-frequency trading</li>
                <li>Execution algorithms</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Technology Stack</h3>
              <ul className="list-disc pl-6">
                <li>Python for finance</li>
                <li>Financial APIs</li>
                <li>Data visualization</li>
                <li>Machine learning</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Learning Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fundamentals</h3>
            <ul className="list-disc pl-6">
              <li>Financial mathematics</li>
              <li>Probability theory</li>
              <li>Market mechanics</li>
              <li>Trading basics</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Advanced Concepts</h3>
            <ul className="list-disc pl-6">
              <li>Options pricing</li>
              <li>Derivatives trading</li>
              <li>Market making</li>
              <li>Systematic strategies</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Industry Connect</h3>
            <p>Network with professionals from top quantitative trading firms and financial institutions.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Practice Sessions</h3>
            <p>Hands-on workshops and coding sessions for implementing trading strategies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantaculusTalks; 