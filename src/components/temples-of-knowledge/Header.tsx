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
          src="/lovable-uploads/1f6b250b-525b-4b77-94db-ccbbb6b2041b.png"
          alt="Technical illustration of Temple of Knowledge device"
          className="w-full max-w-[600px] mx-auto mb-2"
        />
        <p className="text-xs text-[#666] italic">Technical illustration</p>
      </div>
    </header>
  );
};

export default Header;