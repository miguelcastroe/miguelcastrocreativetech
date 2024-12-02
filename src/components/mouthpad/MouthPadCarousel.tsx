import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const MouthPadCarousel = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Technology Interface"
    },
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Person using device"
    },
    {
      url: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      alt: "Smart device interaction"
    }
  ];

  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default MouthPadCarousel;