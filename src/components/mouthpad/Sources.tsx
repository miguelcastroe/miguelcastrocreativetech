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
      title: "World Health Organization - Spinal Cord Injury",
      description: "Global statistics and impact of spinal cord injuries.",
      url: "https://www.who.int/news-room/fact-sheets/detail/spinal-cord-injury"
    },
    {
      title: "National Spinal Cord Injury Statistical Center",
      description: "Annual report on SCI statistics in the United States.",
      url: "https://www.nscisc.uab.edu/"
    },
    {
      title: "Assistive Technology Industry Association",
      description: "Research on assistive technology innovations and impact.",
      url: "https://www.atia.org/"
    },
    {
      title: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
      description: "Latest developments in rehabilitation technology.",
      url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7333"
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