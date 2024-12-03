import React from 'react';

const BehindTheFearHeader = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <span className="text-xs uppercase text-[#a1a1aa] mb-4 block">[case study]</span>
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Behind The Fear</h1>
          <p className="text-lg mb-6">
            An innovative digital campaign that uses hidden HTML codes and meta-tags to reveal concealed stories of domestic violence, raising awareness and providing support.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Social Impact</span>
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Web Development</span>
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Innovation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehindTheFearHeader;