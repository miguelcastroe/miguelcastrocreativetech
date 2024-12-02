import React from 'react';

const OutcomesGrid = () => {
  return (
    <section className="mb-32 animate-fade-in">
      <h2 className="text-xs uppercase mb-12 text-[#a1a1aa]">Expected Outcomes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Digital Independence</h3>
          <p className="text-sm text-gray-600">Empowers users with autonomous device control</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Accessibility</h3>
          <p className="text-sm text-gray-600">Bridges the digital divide for mobility challenges</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Quality of Life</h3>
          <p className="text-sm text-gray-600">Enhances daily living and social connection</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Innovation</h3>
          <p className="text-sm text-gray-600">Advances assistive technology solutions</p>
        </div>
      </div>
    </section>
  );
};

export default OutcomesGrid;