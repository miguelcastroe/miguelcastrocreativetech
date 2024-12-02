import React from 'react';

const OutcomesGrid = () => {
  return (
    <section className="mb-16">
      <h2 className="text-xs uppercase mb-8 text-[#a1a1aa]">Expected Outcomes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-[#F6F6F7] rounded-lg">
          <h3 className="text-sm font-medium mb-3">Global Access</h3>
          <p className="text-sm text-gray-600">Expanding worldwide access to Peru's cultural heritage</p>
        </div>
        <div className="p-6 bg-[#F6F6F7] rounded-lg">
          <h3 className="text-sm font-medium mb-3">Education</h3>
          <p className="text-sm text-gray-600">Enriching educational resources and learning opportunities</p>
        </div>
        <div className="p-6 bg-[#F6F6F7] rounded-lg">
          <h3 className="text-sm font-medium mb-3">Community</h3>
          <p className="text-sm text-gray-600">Strengthening bonds with local Peruvian communities</p>
        </div>
        <div className="p-6 bg-[#F6F6F7] rounded-lg">
          <h3 className="text-sm font-medium mb-3">Innovation</h3>
          <p className="text-sm text-gray-600">Inspiring new approaches to cultural preservation</p>
        </div>
      </div>
    </section>
  );
};

export default OutcomesGrid;