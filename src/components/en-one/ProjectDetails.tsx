import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-5 space-y-16">
          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Challenge</h2>
            <p className="text-gray-800">
              Traditional payment systems in Peru often present barriers to small businesses 
              and individuals, limiting financial inclusion and economic growth opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Insight</h2>
            <p className="text-gray-800">
              A significant portion of Peru's population remains underserved by conventional 
              banking systems, creating an opportunity for innovative, accessible payment solutions.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Solution</h2>
            <p className="text-gray-800">
              En One introduces a seamless, user-friendly payment platform that combines 
              cutting-edge technology with intuitive design, making financial transactions 
              accessible to all segments of the population.
            </p>
          </section>
        </div>

        <div className="md:col-span-7">
          <section>
            <blockquote className="text-base italic text-gray-600 border-l-[0.75px] border-[#ff4f00] pl-6 mt-0">
              "En One represents a significant step forward in democratizing payment solutions 
              in Peru, making financial services more accessible to everyone."
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;