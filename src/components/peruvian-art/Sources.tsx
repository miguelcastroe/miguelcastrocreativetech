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
      title: "The Metropolitan Museum of Art - Open Access Policy",
      description: "The Met makes over 375,000 public-domain artworks freely available under Creative Commons Zero (CC0) license.",
      url: "https://www.metmuseum.org/press/news/2017/open-access"
    },
    {
      title: "The Metropolitan Museum of Art Collection API",
      description: "Provides access to data and high-resolution images of public domain artifacts.",
      url: "https://www.metmuseum.org/about-the-met/policies-and-documents/open-access"
    },
    {
      title: "International Journal for the Semiotics of Law",
      description: "Explores challenges and opportunities in digitizing cultural heritage for preservation.",
      url: "https://link.springer.com/article/10.1007/s11196-023-10040-z"
    },
    {
      title: "Heritage Science Journal",
      description: "Discusses metaverse applications in public engagement and cultural education.",
      url: "https://heritagesciencejournal.springeropen.com/articles/10.1186/s40494-024-01403-1"
    },
    {
      title: "MIT Press - Theorizing Digital Cultural Heritage",
      description: "Examines the interplay between material and digital cultural objects and the potential of virtual cultural heritage.",
      url: "https://direct.mit.edu/books/edited-volume/2433/Theorizing-Digital-Cultural-HeritageA-Critical"
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