import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="mb-16 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-5 space-y-16">
          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Challenge</h2>
            <p className="text-gray-800">
              Addressing the dependency on cash among young entrepreneurs and micro-merchants in Peru, 
              caused by the delay of up to 48 hours for receiving payments from traditional card 
              transactions, which hindered liquidity and reinvestment.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Idea</h2>
            <p className="text-gray-800">
              Izipay, in partnership with Interbank, introduced "En One", an innovative instant payment solution. 
              Leveraging advanced technology, a deep understanding of user journeys, and banking expertise, 
              the solution allowed merchants to access their sales earnings immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Campaign</h2>
            <p className="text-gray-800">
              A multi-channel strategy spanned Facebook, Instagram, TikTok, WhatsApp, and the Izipay app, 
              complemented by geolocated campaigns in key markets and shopping centers. Data-driven 
              segmentation and automated marketing tools ensured efficient and effective message delivery.
            </p>
          </section>
        </div>

        <div className="md:col-span-7">
          <section>
            <blockquote className="text-base italic text-gray-600 border-l-[0.75px] border-[#ff4f00] pl-6 mt-0">
              To ensure resonance with the target audience, the campaign adopted Peruvian slang and 
              relatable expressions like "wantan" and "Wan Kenobi," presenting the benefits of instant 
              payment in a familiar, culturally relevant manner.
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;