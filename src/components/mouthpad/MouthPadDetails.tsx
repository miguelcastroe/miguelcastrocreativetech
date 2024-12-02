import React from 'react';

const MouthPadDetails = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-5 space-y-16">
          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Challenge</h2>
            <p className="text-gray-800">
              Spinal Cord Injury (SCI) affects 250,000 to 500,000 people globally each year, profoundly impacting daily life. 
              In the US, around 17,000 new cases occur annually, with 294,000 individuals living with SCI. The condition's 
              economic burden is immense, with care costs up to $5.2 million. Despite technological advancements, people with 
              disabilities still face limited interaction, computer control, and internet access, reducing autonomy and causing frustration.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Insight</h2>
            <p className="text-gray-800">
              The tongue offers a promising alternative for interacting with digital devices, particularly for those with 
              limited mobility or disabilities. Due to its complex network of muscles and nerves, the tongue possesses 
              dexterity and sensitivity, allowing it to generate a wide range of precise movements.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Solution</h2>
            <p className="text-gray-800">
              MouthPad^ is an innovative tongue-operated device that enables individuals with restricted mobility or 
              disabilities to effortlessly interact with their preferred devices and platforms. Whether browsing the 
              internet, sending messages, playing games, or controlling smart home gadgets, MouthPad^ offers users the 
              autonomy to command their digital world with a simple movement of their tongue.
            </p>
          </section>
        </div>

        <div className="md:col-span-7">
          <section>
            <blockquote className="text-base italic text-gray-600 border-l-[0.75px] border-[#ff4f00] pl-6 mt-0">
              "MouthPad^ represents a breakthrough in assistive technology, offering unprecedented digital autonomy 
              to individuals with mobility challenges through innovative tongue-controlled interaction."
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MouthPadDetails;