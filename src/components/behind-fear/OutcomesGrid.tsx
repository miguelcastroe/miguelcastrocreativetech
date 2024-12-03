import React from 'react';

const OutcomesGrid = () => {
  return (
    <section className="mb-32 animate-fade-in">
      <h2 className="text-xs uppercase mb-12 text-[#a1a1aa]">Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Awareness Impact</h3>
          <p className="text-sm text-gray-600">Over 1 million impressions within two weeks</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Support Access</h3>
          <p className="text-sm text-gray-600">30% increase in helpline traffic</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Social Reach</h3>
          <p className="text-sm text-gray-600">500,000 social shares</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Innovation</h3>
          <p className="text-sm text-gray-600">Pioneering CSS storytelling</p>
        </div>
      </div>
    </section>
  );
};

export default OutcomesGrid;