import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        {/* Left Column */}
        <div className="md:col-span-5 space-y-16">
          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Challenge</h2>
            <p className="text-gray-800 mb-8">
              Limited access to Peru's cultural heritage in international museums, low awareness of Peruvian art, 
              and insufficient educational resources hinder its preservation and teaching.
            </p>
            <img
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
              alt="Cultural heritage"
              className="w-full aspect-[16/9] object-cover rounded-lg"
            />
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Insight</h2>
            <p className="text-gray-800">
              Peruvian artifacts in institutions like the Met are now in the public domain, removing barriers 
              to access high-resolution images and detailed information.
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 space-y-16">
          <section className="md:mt-32">
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Solution</h2>
            <p className="text-gray-800 mb-8">
              Create an interactive gallery showcasing Peruvian artifacts using the Met's API for seamless data 
              retrieval and high-resolution imagery. With expert curation, contextual annotations, storytelling, 
              and multilingual support, it offers an immersive, educational experience.
            </p>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Digital interface"
              className="w-full aspect-[16/9] object-cover rounded-lg"
            />
          </section>

          <section>
            <blockquote className="text-lg italic text-gray-600 border-l-2 border-[#ff4f00] pl-6">
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