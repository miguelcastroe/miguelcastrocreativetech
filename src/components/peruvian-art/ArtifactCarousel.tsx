import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const artifacts = [
  {
    title: "Mantle Fragment",
    culture: "Paracas",
    period: "5th–3rd century BCE",
    imageUrl: "/lovable-uploads/ea98ca53-d9a6-4616-9b6b-77d9660c0c45.png"
  },
  {
    title: "Four-Cornered Hat",
    culture: "Wari",
    period: "7th–9th century CE",
    imageUrl: "https://images.metmuseum.org/CRDImages/ao/original/DP-13613-001.jpg"
  },
  {
    title: "Ceremonial Textile",
    culture: "Chancay",
    period: "13th–15th century CE",
    imageUrl: "https://images.metmuseum.org/CRDImages/ao/original/DP18489701.jpg"
  }
];

const ArtifactCarousel = () => {
  return (
    <div className="w-full">
      <Carousel>
        <CarouselContent>
          {artifacts.map((artifact, index) => (
            <CarouselItem key={index}>
              <div className="space-y-4">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <img
                        src={artifact.imageUrl}
                        alt={artifact.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">
                    {artifact.title}
                  </h3>
                  <p className="text-[#a1a1aa]">
                    {artifact.culture}
                  </p>
                  <p className="text-sm text-[#a1a1aa]">
                    {artifact.period}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ArtifactCarousel;