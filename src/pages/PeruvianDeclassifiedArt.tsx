import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PeruvianDeclassifiedArt = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1000px] mx-auto">
        <Header />
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-xs uppercase text-[#a1a1aa]">[case study in short]</span>
          <h1 className="text-4xl md:text-5xl font-medium mt-4 mb-8">Peruvian Declassified Art</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
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
            <div>
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                alt="Peruvian landscape"
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
          {/* Left Column */}
          <div className="space-y-16">
            <section>
              <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Challenge</h2>
              <p className="text-gray-800">
                Limited access to Peru's cultural heritage in international museums, low public awareness of Peruvian art, 
                and a lack of educational resources for teachers hinder the preservation and teaching of Peru's rich cultural legacy.
              </p>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Digital preservation concept"
                className="w-full aspect-[16/9] object-cover rounded-lg mt-8"
              />
            </section>

            <section>
              <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Insight</h2>
              <p className="text-gray-800">
                Peruvian art and cultural heritage held in international institutions, such as the Metropolitan Museum of Art, 
                are now in the public domain. This status eliminates legal and financial barriers, allowing unrestricted access 
                to high-resolution images and detailed information.
              </p>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            <section>
              <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Solution</h2>
              <p className="text-gray-800">
                Develop an advanced interactive gallery showcasing Peruvian artifacts from the Met, powered by its API for 
                seamless data retrieval and high-resolution imagery. The process involves meticulous data handling, classification, 
                and expert curation to go beyond a typical online exhibition. The platform features contextual annotations, 
                engaging storytelling, and multilingual support, offering an immersive and educational experience that connects 
                users more deeply with Peru's cultural heritage.
              </p>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Digital platform concept"
                className="w-full aspect-[16/9] object-cover rounded-lg mt-8"
              />
            </section>

            <section>
              <blockquote className="text-sm italic text-gray-600 border-l-[1px] border-[#ff4f00] pl-4">
                "Peruvian Declassified Art demonstrates the potential of open access data and digital technologies to overcome 
                cultural access challenges, fostering preservation, education, and global appreciation of Peru's rich heritage."
              </blockquote>
            </section>
          </div>
        </div>

        {/* Outcomes Grid */}
        <section className="mb-16">
          <h2 className="text-xs uppercase mb-8 text-[#a1a1aa]">Expected Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#F6F6F7] rounded-lg">
              <h3 className="text-sm font-medium mb-3">Global Access</h3>
              <p className="text-sm text-gray-600">Expanding worldwide access to Peru's cultural heritage</p>
            </div>
            <div className="p-6 bg-[#F6F6F7] rounded-lg">
              <h3 className="text-sm font-medium mb-3">Education</h3>
              <p className="text-sm text-gray-600">Enriching educational resources and learning opportunities</p>
            </div>
            <div className="p-6 bg-[#F6F6F7] rounded-lg">
              <h3 className="text-sm font-medium mb-3">Community</h3>
              <p className="text-sm text-gray-600">Strengthening bonds with local Peruvian communities</p>
            </div>
            <div className="p-6 bg-[#F6F6F7] rounded-lg">
              <h3 className="text-sm font-medium mb-3">Innovation</h3>
              <p className="text-sm text-gray-600">Inspiring new approaches to cultural preservation</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default PeruvianDeclassifiedArt;