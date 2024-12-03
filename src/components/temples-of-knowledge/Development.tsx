import React from 'react';

const Development = () => {
  return (
    <section className="mb-16 animate-fade-in [animation-delay:600ms]">
      <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Development</h2>
      <div className="prose prose-sm max-w-none">
        <p className="text-base leading-relaxed text-[#444] mb-6">
          Though still in its infancy and without formal funding, the concept is being shaped by the following principles:
        </p>
        <ul className="space-y-4 mb-8 border-l-[0.75px] border-[#ff4f00] pl-6">
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 mt-2 mr-3 bg-[#ff4f00] rounded-full flex-shrink-0"></span>
            <p><strong className="text-[#403E43]">Hardware Foundation:</strong> Leveraging Raspberry Pi for its affordability and adaptability, paired with solar-powered battery packs for energy independence.</p>
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 mt-2 mr-3 bg-[#ff4f00] rounded-full flex-shrink-0"></span>
            <p><strong className="text-[#403E43]">Localized AI:</strong> Training the LLM with datasets rooted in Peruvian culture, ensuring students can learn in their native languages while exploring global concepts.</p>
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 mt-2 mr-3 bg-[#ff4f00] rounded-full flex-shrink-0"></span>
            <p><strong className="text-[#403E43]">Practical Deployment:</strong> Initial focus on piloting the idea in rural areas to test feasibility, gather feedback, and refine the approach.</p>
          </li>
        </ul>
        <p className="text-base leading-relaxed text-[#444]">
          This is not about delivering a finished product but about initiating a movement—one that inspires collaboration and paves the way for more comprehensive solutions.
        </p>
      </div>
    </section>
  );
};

export default Development;