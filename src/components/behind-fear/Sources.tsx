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
      title: "WHO - Violence Against Women Prevalence Estimates",
      description: "Global data on the prevalence of intimate partner violence.",
      url: "https://www.who.int/news-room/fact-sheets/detail/violence-against-women"
    },
    {
      title: "UN Women - Ending Violence Against Women",
      description: "Statistics and resources on violence against women worldwide.",
      url: "https://www.unwomen.org/en/what-we-do/ending-violence-against-women"
    },
    {
      title: "The National Domestic Violence Hotline",
      description: "Insights into why victims often do not report abuse.",
      url: "https://www.thehotline.org/"
    },
    {
      title: "UNICEF - Tackling Domestic Violence",
      description: "Overview of hidden abuse signs and the importance of societal support.",
      url: "https://www.unicef.org/protection/domestic-violence"
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