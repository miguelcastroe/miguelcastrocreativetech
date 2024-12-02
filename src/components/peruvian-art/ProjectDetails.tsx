import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
      {/* Left Column */}
      <div className="space-y-16">
        <section>
          <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Challenge</h2>
          <p className="text-gray-800">
            Limited access to Peru's cultural heritage in international museums, low public awareness of Peruvian art, 
            and a lack of educational resources for teachers hinder the preservation and teaching of Peru's rich cultural legacy.
          </p>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Digital preservation concept"
            className="w-full aspect-[16/9] object-cover rounded-lg mt-8"
          />
        </section>

        <section>
          <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Insight</h2>
          <p className="text-gray-800">
            Peruvian art and cultural heritage held in international institutions, such as the Metropolitan Museum of Art, 
            are now in the public domain. This status eliminates legal and financial barriers, allowing unrestricted access 
            to high-resolution images and detailed information.
          </p>
        </section>
      </div>

      {/* Right Column */}
      <div className="space-y-16">
        <section>
          <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Solution</h2>
          <p className="text-gray-800">
            Develop an advanced interactive gallery showcasing Peruvian artifacts from the Met, powered by its API for 
            seamless data retrieval and high-resolution imagery. The process involves meticulous data handling, classification, 
            and expert curation to go beyond a typical online exhibition. The platform features contextual annotations, 
            engaging storytelling, and multilingual support, offering an immersive and educational experience that connects 
            users more deeply with Peru's cultural heritage.
          </p>
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Digital platform concept"
            className="w-full aspect-[16/9] object-cover rounded-lg mt-8"
          />
        </section>

        <section>
          <blockquote className="text-sm italic text-gray-600 border-l-[1px] border-[#ff4f00] pl-4">
            "Peruvian Declassified Art demonstrates the potential of open access data and digital technologies to overcome 
            cultural access challenges, fostering preservation, education, and global appreciation of Peru's rich heritage."
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;