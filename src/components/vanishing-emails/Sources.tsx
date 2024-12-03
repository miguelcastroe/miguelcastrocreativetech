import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sources = () => {
  const sources = [
    {
      title: "The Carbon Cost of Email - OVO Energy Research",
      description: "Study on the carbon footprint of email storage and transmission.",
      url: "https://www.ovoenergy.com/ovo-newsroom/press-releases/2019/november/think-before-you-thank-if-every-brit-sent-one-less-thank-you-email-a-day-we-would-save-16433-tonnes-of-carbon-a-year-the-same-as-81152-flights-to-madrid"
    },
    {
      title: "The Unseen Impact: Data Centers and Environmental Sustainability - Science Direct",
      description: "Research on data center energy consumption and environmental effects.",
      url: "https://www.sciencedirect.com/science/article/pii/S2666412723000095"
    },
    {
      title: "EPA - Data Center Energy Efficiency Initiatives",
      description: "Government guidelines on data center energy efficiency.",
      url: "https://www.epa.gov/energy/data-centers-and-servers"
    },
    {
      title: "International Journal of Environmental Studies - Digital Waste",
      description: "Academic research on digital waste management and environmental impact.",
      url: "https://www.tandfonline.com/doi/full/10.1080/00207233.2021.1915451"
    },
    {
      title: "Nature - The spiralling environmental cost of our lithium battery addiction",
      description: "Impact of data storage on battery production and environmental consequences.",
      url: "https://www.nature.com/articles/d41586-021-02222-1"
    }
  ];

  return (
    <div className="mb-32 animate-fade-in">
      <h2 className="text-xs mb-8 text-[#a1a1aa] uppercase">SOURCES</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="sources">
          <AccordionTrigger className="text-sm hover:no-underline">View links</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              {sources.map((source, index) => (
                <div key={index} className="text-sm">
                  <h3 className="font-medium mb-1 text-gray-800">{source.title}</h3>
                  <p className="text-gray-600 mb-1">{source.description}</p>
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-800 hover:text-[#ff4f00] text-sm underline"
                  >
                    Read more
                  </a>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sources;