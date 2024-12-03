import React from 'react';

const Header = () => {
  return (
    <header className="mb-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#403E43]">
        Temples of Knowledge
      </h1>
      <p className="text-lg text-[#666] font-medium mb-12">
        Bridging Education and Culture with AI
      </p>
      <div className="mb-16">
        <img 
          src="/lovable-uploads/c03d6e3b-ea94-4de7-982c-662c9aa2a1b9.png"
          alt="Technical illustration of an educational device"
          className="w-full max-w-[600px] mx-auto mb-2"
        />
        <p className="text-xs text-[#666] italic">Generated with Midjourney</p>
      </div>
    </header>
  );
};

export default Header;