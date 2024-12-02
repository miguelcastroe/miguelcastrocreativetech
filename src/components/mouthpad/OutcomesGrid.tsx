import React from 'react';

const OutcomesGrid = () => {
  return (
    <section className="mb-32 animate-fade-in">
      <h2 className="text-xs uppercase mb-12 text-[#a1a1aa]">Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Impressions</h3>
          <p className="text-sm text-gray-600">+1.3B media impressions achieved</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Pre-orders</h3>
          <p className="text-sm text-gray-600">676 orders in first two days</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Website Traffic</h3>
          <p className="text-sm text-gray-600">6K% increase within a week</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Organic Reach</h3>
          <p className="text-sm text-gray-600">187.7K organic impressions in one week</p>
        </div>
      </div>
    </section>
  );
};

export default OutcomesGrid;