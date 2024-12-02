import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        {/* Left Column */}
        <div className="md:col-span-5 space-y-16">
          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Challenge</h2>
            <p className="text-gray-800">
              Limited access to Peru's cultural heritage in international museums, low awareness of Peruvian art, 
              and insufficient educational resources hinder its preservation and teaching.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Insight</h2>
            <p className="text-gray-800">
              Peruvian artifacts in institutions like the Met are now in the public domain, removing barriers 
              to access high-resolution images and detailed information.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Solution</h2>
            <p className="text-gray-800">
              Create an interactive gallery showcasing Peruvian artifacts using the Met's API for seamless data 
              retrieval and high-resolution imagery. With expert curation, contextual annotations, storytelling, 
              and multilingual support, it offers an immersive, educational experience.
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7">
          <section>
            <blockquote className="text-base italic text-gray-600 border-l-[0.75px] border-[#ff4f00] pl-6 mt-0">
              "Peruvian Declassified Art demonstrates the potential of open access data and digital technologies 
              to foster preservation, education, and global appreciation of Peru's heritage."
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;