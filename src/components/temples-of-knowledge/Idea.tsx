import React from 'react';

const Idea = () => {
  return (
    <section className="mb-16 animate-fade-in [animation-delay:400ms]">
      <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Idea</h2>
      <div className="prose prose-sm max-w-none">
        <p className="text-base leading-relaxed text-[#444]">
          Temples of Knowledge is an early-stage initiative to bring education to underserved communities using Raspberry Pi devices powered by offline AI. These devices are designed to function without internet access, running a custom Large Language Model (LLM) capable of interacting in Quechua, Aymara, and Spanish. The goal is to blend STEM education with cultural preservation, creating a stepping stone for the future of learning in Peru.
        </p>
      </div>
    </section>
  );
};

export default Idea;