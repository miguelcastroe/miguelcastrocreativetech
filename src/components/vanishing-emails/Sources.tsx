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
      title: "MIT Press Reader - The Staggering Ecological Impacts of Computation",
      description: "Examines data centers' carbon footprint and environmental impact.",
      url: "https://thereader.mitpress.mit.edu/the-staggering-ecological-impacts-of-computation-and-the-cloud/"
    },
    {
      title: "DataCamp - Environmental Impact of Digital Tech",
      description: "Overview of carbon emissions from data storage and transmission.",
      url: "https://www.datacamp.com/blog/environmental-impact-data-digital-technology"
    },
    {
      title: "AKCP - Power-Hungry Data Centers",
      description: "Explores global energy demands of data centers.",
      url: "https://www.akcp.com/blog/the-power-hungry-rise-of-data-centers-energy-consumption-worldwide/"
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