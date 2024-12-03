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
      title: "UNICEF Peru - Guaranteeing Education in Indigenous Languages",
      description: "Efforts and challenges of bilingual education in Peru.",
      url: "https://www.unicef.org/peru/en/stories/peru-guaranteeing-education-indigenous-languages"
    },
    {
      title: "AP News - Peru's Push to Preserve Indigenous Languages Through Education",
      description: "Barriers to integrating native languages in schools.",
      url: "https://apnews.com/article/peru-south-america-language"
    },
    {
      title: "The Borgen Project - How Raspberry Pi Innovates in Developing Countries",
      description: "Raspberry Pi's role in bridging educational gaps.",
      url: "https://borgenproject.org/raspberry-pi-innovates-developing-countries"
    },
    {
      title: "World Bank - The Role of Technology in Education in Latin America",
      description: "Technology's impact on reducing rural educational disparities.",
      url: "https://www.worldbank.org/en/topic/education/publication/role-of-technology-latin-america"
    },
    {
      title: "Ethnologue - Languages of Peru",
      description: "Statistics on Peru's 47 indigenous languages.",
      url: "https://www.ethnologue.com/country/PE"
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