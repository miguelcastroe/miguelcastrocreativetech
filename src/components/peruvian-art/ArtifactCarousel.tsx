import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ArtifactCard from './ArtifactCard';
import { artifacts } from './artifactsData';

const ArtifactCarousel = () => {
  return (
    <div className="w-full">
      <Carousel>
        <CarouselContent>
          {artifacts.map((artifact, index) => (
            <CarouselItem key={index}>
              <ArtifactCard {...artifact} />
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