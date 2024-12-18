import React, { useEffect } from 'react';
import PageLayout from "@/components/PageLayout";

const Readme = () => {
  useEffect(() => {
    document.title = "Miguel Castro - Creative Director & Tech Consultant | README";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Miguel Castro is an award-winning creative director and tech consultant with nearly 20 years of experience in blending creativity and technology.');
    }
  }, []);

  return (
    <PageLayout>
      <article className="prose max-w-none">
        <h1 className="text-4xl font-medium mb-8">About Miguel Castro</h1>
        <div className="mb-12">
          <p className="text-lg leading-relaxed">
            Miguel Castro is an award-winning creative director and tech consultant specializing in blending creativity and technology to create meaningful solutions. With nearly 20 years of experience, including winning a Grand Prix in Innovation in 2023 and a Bronze in Innovation in 2024, Miguel is committed to leveraging technology for the greater good.
          </p>
        </div>
      </article>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Miguel Castro",
          "jobTitle": "Creative Director & Tech Consultant",
          "description": "Award-winning creative director and tech consultant specializing in blending creativity and technology.",
          "award": [
            "Grand Prix in Innovation 2023",
            "Bronze in Innovation 2024"
          ],
          "knowsAbout": [
            "Creative Direction",
            "Technology Consulting",
            "Innovation",
            "AI Tools",
            "Digital Transformation"
          ]
        })}
      </script>
    </PageLayout>
  );
};

export default Readme;