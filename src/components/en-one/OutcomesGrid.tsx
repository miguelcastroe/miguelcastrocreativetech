import React from 'react';

const OutcomesGrid = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <h2 className="text-xs uppercase mb-8 text-[#a1a1aa]">Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg font-medium mb-4">Merchant Impact</h3>
          <p className="text-gray-800">
            Improved liquidity and reinvestment capability with instant payments, enabling merchants 
            to better manage their cash flow and grow their businesses.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Campaign Success</h3>
          <p className="text-gray-800">
            Successfully positioned Izipay as the preferred option for young entrepreneurs and small 
            merchants in Peru through culturally relevant messaging.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Operational Excellence</h3>
          <p className="text-gray-800">
            Accelerated adoption of digital payments while reducing reliance on cash, achieving 
            significant cost efficiency and reduced implementation time.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Market Leadership</h3>
          <p className="text-gray-800">
            Consolidated Izipay's position as a leader in Peru's card payment industry through 
            innovative solutions and strategic partnerships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutcomesGrid;