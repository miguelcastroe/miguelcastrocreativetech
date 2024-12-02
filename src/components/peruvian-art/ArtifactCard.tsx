import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ArtifactCardProps {
  imageUrl: string;
  title: string;
  culture: string;
  period: string;
}

const ArtifactCard = ({ imageUrl, title, culture, period }: ArtifactCardProps) => {
  return (
    <div className="space-y-3">
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </CardContent>
      </Card>
      <div className="space-y-1.5">
        <h3 className="text-xl font-medium">
          {title}
        </h3>
        <p className="text-[#a1a1aa]">
          {culture}
        </p>
        <p className="text-sm text-[#a1a1aa]">
          {period}
        </p>
      </div>
    </div>
  );
};

export default ArtifactCard;