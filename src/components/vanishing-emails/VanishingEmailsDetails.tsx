import React from 'react';

const VanishingEmailsDetails = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-5 space-y-16">
          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Challenge</h2>
            <p className="text-gray-800">
              Addressing the significant environmental impact of CO2 emissions caused by the exponential growth 
              of energy usage in data centers for email storage.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Inspiration</h2>
            <p className="text-gray-800">
              Storing large amounts of email data, such as temporary promotional emails, increases the carbon footprint. 
              The advertising industry accounts for about 30% of this problem, underscoring the need for a mindset shift 
              towards a more environmentally conscious digital approach.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Development</h2>
            <p className="text-gray-800">
              Vanishing Emails automates the deletion of expired promotional emails through advanced algorithms and 
              machine learning. Using AWS infrastructure, it efficiently processes deletions while ensuring data privacy 
              and security, identifying unnecessary emails based on sender information, subject lines, and content patterns. 
              Users engage by linking the tool to their email accounts, customizing deletion settings, and tracking their 
              real-time environmental contributions.
            </p>
          </section>
        </div>

        <div className="md:col-span-7">
          <section>
            <blockquote className="text-base italic text-gray-600 border-l-[0.75px] border-[#ff4f00] pl-6 mt-0">
              "Vanishing Emails represents a breakthrough in sustainable digital practices, offering an innovative 
              solution to reduce the environmental impact of email storage while maintaining user privacy and security."
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VanishingEmailsDetails;