import React from 'react';

const OutcomesGrid = () => {
  return (
    <section className="mb-32 animate-fade-in">
      <h2 className="text-xs uppercase mb-12 text-[#a1a1aa]">Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">CO2 Reduction</h3>
          <p className="text-sm text-gray-600">30% decrease in email storage emissions</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Storage Saved</h3>
          <p className="text-sm text-gray-600">45TB of unnecessary email data removed</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">User Adoption</h3>
          <p className="text-sm text-gray-600">10K+ active users in first month</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Processing</h3>
          <p className="text-sm text-gray-600">1M+ emails processed daily</p>
        </div>
      </div>
    </section>
  );
};

export default OutcomesGrid;