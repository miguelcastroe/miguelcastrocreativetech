import React from 'react';

const VanishingEmailsHeader = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <span className="text-xs uppercase text-[#a1a1aa] mb-4 block">[case study]</span>
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Vanishing Emails</h1>
          <p className="text-lg mb-6">
            An innovative solution to automate the deletion of expired promotional emails, significantly minimizing stored data and energy consumption.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Sustainability</span>
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">AWS</span>
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Innovation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanishingEmailsHeader;