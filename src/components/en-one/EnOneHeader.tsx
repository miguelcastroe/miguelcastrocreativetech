import React from 'react';

const EnOneHeader = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div className="order-2 md:order-1">
          <span className="text-xs uppercase text-[#a1a1aa] mb-4 block">[case study]</span>
          <h1 className="text-4xl md:text-5xl font-medium mb-8">En One</h1>
          <p className="text-lg mb-6">
            A revolutionary payment solution designed to streamline transactions and enhance financial accessibility 
            across Peru, developed in collaboration with Izipay.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Fintech</span>
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">UX/UI Design</span>
            <span className="text-sm px-3 py-1 bg-[#f3f3f3] rounded-full">Payment Solutions</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="/lovable-uploads/88c17c1c-f952-4da9-8264-e7ddcfbb65cd.png"
            alt="En One Project"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EnOneHeader;