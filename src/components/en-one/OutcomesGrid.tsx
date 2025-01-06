import React from 'react';

const OutcomesGrid = () => {
  return (
    <section className="mb-32 animate-fade-in">
      <h2 className="text-xs uppercase mb-12 text-[#a1a1aa]">Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Merchant Impact</h3>
          <p className="text-sm text-gray-600">Improved liquidity and reinvestment capability with instant payments</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Campaign Success</h3>
          <p className="text-sm text-gray-600">Positioned as preferred option for young entrepreneurs</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Operational Excellence</h3>
          <p className="text-sm text-gray-600">Accelerated adoption of digital payments</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Market Leadership</h3>
          <p className="text-sm text-gray-600">Consolidated position as industry leader in Peru</p>
        </div>
      </div>
    </section>
  );
};

export default OutcomesGrid;