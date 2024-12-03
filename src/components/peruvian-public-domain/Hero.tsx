import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Hero = () => {
  return (
    <>
      <Link to="/" className="inline-flex items-center text-sm hover:text-[#ff4f00] mb-12">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to home
      </Link>

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
    </>
  );
};

export default Hero;