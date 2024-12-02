import { ArrowLeft, BookOpen, Flag, Globe, Archive, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const PeruvianPublicDomain = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1000px] mx-auto">
        {/* Header with back button */}
        <Link to="/" className="inline-flex items-center text-sm hover:text-[#ff4f00] mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Peruvian Public Domain</h1>
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
                A comprehensive initiative to digitize and preserve Peru's cultural heritage,
                making historical documents and artifacts accessible to the public.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm px-3 py-1 bg-[#F1F0FB] rounded-full">Art</span>
                <span className="text-sm px-3 py-1 bg-[#F1F0FB] rounded-full">Cultural Heritage</span>
                <span className="text-sm px-3 py-1 bg-[#F1F0FB] rounded-full">Digital Archive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-[#F6F6F7]">
              <BookOpen className="w-6 h-6 mb-4" />
              <h3 className="font-medium mb-2">Research</h3>
              <p className="text-sm">Extensive documentation of historical artifacts</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#F6F6F7]">
              <Flag className="w-6 h-6 mb-4" />
              <h3 className="font-medium mb-2">Cultural Impact</h3>
              <p className="text-sm">Preserving Peru's rich heritage</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#F6F6F7]">
              <Globe className="w-6 h-6 mb-4" />
              <h3 className="font-medium mb-2">Accessibility</h3>
              <p className="text-sm">Global access to cultural resources</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#F6F6F7]">
              <Archive className="w-6 h-6 mb-4" />
              <h3 className="font-medium mb-2">Preservation</h3>
              <p className="text-sm">Digital archiving of historical documents</p>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Challenge</h3>
              <p className="text-gray-700 mb-6">
                Many of Peru's historical documents and cultural artifacts were at risk of being lost
                or damaged. Access to these materials was limited, making it difficult for researchers
                and the public to study and appreciate Peru's rich cultural heritage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Solution</h3>
              <p className="text-gray-700 mb-6">
                We developed a comprehensive digital archive system that allows for the preservation
                and public access of historical documents. The platform includes high-resolution
                scanning capabilities, metadata tagging, and a user-friendly interface for browsing
                and searching the collection.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F6F6F7]">
              <h3 className="text-4xl font-medium mb-4">50K+</h3>
              <p className="text-sm">Documents digitized</p>
            </div>
            <div className="p-6 bg-[#F6F6F7]">
              <h3 className="text-4xl font-medium mb-4">100+</h3>
              <p className="text-sm">Contributing institutions</p>
            </div>
            <div className="p-6 bg-[#F6F6F7]">
              <h3 className="text-4xl font-medium mb-4">200K+</h3>
              <p className="text-sm">Monthly visitors</p>
            </div>
          </div>
        </section>

        {/* Next Project Link */}
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

export default PeruvianPublicDomain;