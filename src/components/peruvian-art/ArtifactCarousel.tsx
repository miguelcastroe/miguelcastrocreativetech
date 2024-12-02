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
    imageUrl: "https://images.metmuseum.org/CRDImages/ao/original/DP-13441-001.jpg"
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
    <div className="w-full max-w-4xl mx-auto mb-32">
      <Carousel>
        <CarouselContent>
          {artifacts.map((artifact, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <img
                      src={artifact.imageUrl}
                      alt={artifact.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-medium mb-1">
                        {artifact.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-1">
                        {artifact.culture}
                      </p>
                      <p className="text-white/80 text-xs">
                        {artifact.period}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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