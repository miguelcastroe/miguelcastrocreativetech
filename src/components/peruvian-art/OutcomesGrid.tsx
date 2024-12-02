import React from 'react';

const OutcomesGrid = () => {
  return (
    <section className="mb-32">
      <h2 className="text-xs uppercase mb-12 text-[#a1a1aa]">Expected Outcomes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Global Awareness</h3>
          <p className="text-sm text-gray-600">Widens access and appreciation of Peru's heritage worldwide</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Educational Impact</h3>
          <p className="text-sm text-gray-600">Enriches resources for impactful teaching</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Cultural Bonds</h3>
          <p className="text-sm text-gray-600">Reconnects Peruvians with their history and art</p>
        </div>
        <div className="bg-[#F6F6F7] p-8 rounded-lg">
          <h3 className="text-base font-medium mb-3">Innovation</h3>
          <p className="text-sm text-gray-600">Digitally preserves artifacts and redefines cultural engagement</p>
        </div>
      </div>
    </section>
  );
};

export default OutcomesGrid;