import React from 'react';

const Inspiration = () => {
  return (
    <section className="mb-16 animate-fade-in [animation-delay:200ms]">
      <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Inspiration</h2>
      <div className="prose prose-sm max-w-none">
        <p className="text-base leading-relaxed text-[#444] mb-8">
          The inspiration for Temples of Knowledge comes from the resilience and richness of Peru's indigenous communities. Their languages and traditions hold immense cultural value but are often overlooked in education and technology. This initiative aims to honor that heritage while introducing tools that can spark curiosity, creativity, and growth in future generations. It's a belief that education should respect where students come from while empowering them to imagine where they can go.
        </p>
        <blockquote className="border-l-[0.75px] border-[#ff4f00] pl-6 my-8 italic text-lg text-[#333]">
          "Education is not about changing who we are: it's about amplifying what we already have, so every child can see their culture reflected in their future."
        </blockquote>
      </div>
    </section>
  );
};

export default Inspiration;