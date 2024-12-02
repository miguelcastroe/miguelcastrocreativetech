import React from 'react';
import MouthPadCarousel from './MouthPadCarousel';

const MouthPadHeader = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div className="order-2 md:order-1">
          <span className="text-xs uppercase text-[#a1a1aa] mb-4 block">[case study]</span>
          <h1 className="text-4xl md:text-5xl font-medium mb-8">MouthPad^</h1>
          <p className="text-lg mb-6">
            An innovative tongue-operated device enabling individuals with restricted mobility to effortlessly 
            interact with their preferred digital devices and platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Accessibility</span>
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Healthcare</span>
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Innovation</span>
          </div>
        </div>
        <div className="order-1 md:order-2 max-w-xl mx-auto w-full">
          <MouthPadCarousel />
        </div>
      </div>
    </div>
  );
};

export default MouthPadHeader;