import React from 'react';

const ProjectHeader = () => {
  return (
    <div className="mb-16">
      <span className="text-xs uppercase text-[#a1a1aa]">[case study in short]</span>
      <h1 className="text-4xl md:text-5xl font-medium mt-4 mb-8">Peruvian Declassified Art</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
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
        <div>
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
            alt="Peruvian landscape"
            className="w-full aspect-[4/3] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;