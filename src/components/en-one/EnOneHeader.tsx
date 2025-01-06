import React from 'react';

const EnOneHeader = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <div className="max-w-3xl">
        <span className="text-xs uppercase text-[#a1a1aa] mb-4 block">[case study]</span>
        <h1 className="text-4xl md:text-5xl font-medium mb-8">En One</h1>
        <p className="text-lg mb-6">
          An innovative instant payment solution developed in partnership with Interbank, designed 
          to empower young entrepreneurs and micro-merchants across Peru with immediate access to 
          their sales earnings.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Fintech</span>
          <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Digital Payments</span>
          <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Financial Inclusion</span>
        </div>
      </div>
    </div>
  );
};

export default EnOneHeader;