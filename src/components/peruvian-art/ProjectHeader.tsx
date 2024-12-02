import React from 'react';

const ProjectHeader = () => {
  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div className="order-2 md:order-1">
          <span className="text-xs uppercase text-[#a1a1aa] mb-4 block">[case study]</span>
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Peruvian Declassified Art</h1>
          <p className="text-lg mb-6">
            An advanced interactive gallery showcasing Peruvian artifacts from the Metropolitan Museum of Art, 
            powered by its API for seamless data retrieval and high-resolution imagery.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="text-sm px-3 py-1 bg-[#F1F0FB] rounded-full">Art</span>
            <span className="text-sm px-3 py-1 bg-[#F1F0FB] rounded-full">Cultural Heritage</span>
            <span className="text-sm px-3 py-1 bg-[#F1F0FB] rounded-full">Digital Archive</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1504893524553-b855bce32c67"
            alt="Ancient artifacts"
            className="w-full aspect-[4/3] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;