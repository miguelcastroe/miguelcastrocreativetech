import React from 'react';

const OutcomesGrid = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <h2 className="text-xs uppercase mb-8 text-[#a1a1aa]">Outcomes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg font-medium mb-4">Enhanced Accessibility</h3>
          <p className="text-gray-800">
            Simplified payment processes that cater to both tech-savvy users and those new to digital payments, 
            ensuring widespread adoption across different demographic groups.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Increased Security</h3>
          <p className="text-gray-800">
            Implementation of state-of-the-art security measures to protect user data and transactions, 
            building trust in digital payment solutions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Business Growth</h3>
          <p className="text-gray-800">
            Enabled small businesses to expand their customer base by offering modern payment options, 
            contributing to local economic development.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">User Satisfaction</h3>
          <p className="text-gray-800">
            Achieved high user satisfaction rates through intuitive interface design and reliable 
            transaction processing, leading to increased adoption rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutcomesGrid;