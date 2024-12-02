import { ArrowLeft, BookOpen, Flag, Globe, Archive, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const PeruvianDeclassifiedArt = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1000px] mx-auto">
        <Link to="/" className="inline-flex items-center text-sm hover:text-[#ff4f00] mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Peruvian Declassified Art</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                alt="Peruvian landscape"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg mb-6">
                An advanced interactive gallery showcasing Peruvian artifacts from the Metropolitan Museum of Art, 
                powered by its API for seamless data retrieval and high-resolution imagery.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm px-3 py-1 bg-[#F1F0FB] rounded-full">Art</span>
                <span className="text-sm px-3 py-1 bg-[#F1F0FB] rounded-full">Cultural Heritage</span>
                <span className="text-sm px-3 py-1 bg-[#F1F0FB] rounded-full">Digital Archive</span>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Challenge</h2>
          <p className="text-gray-700 mb-8">
            Limited access to Peru's cultural heritage in international museums, low public awareness of Peruvian art, 
            and a lack of educational resources for teachers hinder the preservation and teaching of Peru's rich cultural legacy.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Insight</h2>
          <p className="text-gray-700 mb-8">
            Peruvian art and cultural heritage held in international institutions, such as the Metropolitan Museum of Art, 
            are now in the public domain. This status eliminates legal and financial barriers, allowing unrestricted access 
            to high-resolution images and detailed information.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Solution</h2>
          <p className="text-gray-700 mb-8">
            Develop an advanced interactive gallery showcasing Peruvian artifacts from the Met, powered by its API for 
            seamless data retrieval and high-resolution imagery. The process involves meticulous data handling, classification, 
            and expert curation to go beyond a typical online exhibition. The platform features contextual annotations, 
            engaging storytelling, and multilingual support, offering an immersive and educational experience that connects 
            users more deeply with Peru's cultural heritage.
          </p>
        </section>

        <section className="mb-16">
          <div className="bg-[#F6F6F7] p-8 rounded-lg">
            <blockquote className="text-xl italic mb-4">
              "Peruvian Declassified Art demonstrates the potential of open access data and digital technologies to overcome 
              cultural access challenges, fostering preservation, education, and global appreciation of Peru's rich heritage."
            </blockquote>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Expected Outcomes</h2>
          <p className="text-gray-700 mb-8">
            Peruvian Declassified Art reshapes how museums and art galleries contribute to society, expanding global access 
            to Peru's cultural heritage while enriching educational resources. It strengthens community bonds, especially for 
            local Peruvians, by reconnecting them with their history and art. By preserving artifacts digitally and inspiring 
            innovative approaches, it redefines cultural engagement and amplifies global appreciation of Peru's legacy.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-8">
          <Link to="/" className="inline-flex items-center text-lg hover:text-[#ff4f00]">
            <span>Next Project</span>
            <FileText className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PeruvianDeclassifiedArt;