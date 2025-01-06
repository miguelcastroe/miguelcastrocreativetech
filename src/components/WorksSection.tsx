import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorksSection = () => {
  return (
    <section className="mb-18 animate-fade-in">
      <h2 className="text-xs uppercase mb-8 text-[#a1a1aa]">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/mouthpad" className="group">
          <div className="relative aspect-[4/3] mb-4 overflow-hidden">
            <img 
              src="/lovable-uploads/07771214-653d-47ff-aece-214481a3b05d.png"
              alt="MouthPad Project"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
          <div className="flex justify-between items-center">
            <div className="group-hover:text-[#ff4f00] transition-colors text-base">
              <span>MouthPad^</span>
              <span className="mx-2">•</span>
              <span>Augmental</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:text-[#ff4f00] group-hover:translate-x-1 flex-shrink-0" />
          </div>
        </Link>

        <Link to="/vanishing-emails" className="group">
          <div className="relative aspect-[4/3] mb-4 overflow-hidden">
            <img 
              src="/lovable-uploads/80292e6c-735d-4b8a-8d7b-60cbbc894f34.png"
              alt="Vanishing Emails Project"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
          <div className="flex justify-between items-center">
            <div className="group-hover:text-[#ff4f00] transition-colors text-base">
              <span>Vanishing Emails</span>
              <span className="mx-2">•</span>
              <span>Amazon</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:text-[#ff4f00] group-hover:translate-x-1 flex-shrink-0" />
          </div>
        </Link>

        <Link to="/behind-the-fear" className="group">
          <div className="relative aspect-[4/3] mb-4 overflow-hidden">
            <img 
              src="/lovable-uploads/cdff836d-314c-411a-8c34-92e6d29304bb.png"
              alt="Behind The Fear Project"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
          <div className="flex justify-between items-center">
            <div className="group-hover:text-[#ff4f00] transition-colors text-base">
              <span>Behind The Fear</span>
              <span className="mx-2">•</span>
              <span>DEMUS</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:text-[#ff4f00] group-hover:translate-x-1 flex-shrink-0" />
          </div>
        </Link>

        <Link to="/en-one" className="group">
          <div className="relative aspect-[4/3] mb-4 overflow-hidden">
            <img 
              src="/lovable-uploads/88c17c1c-f952-4da9-8264-e7ddcfbb65cd.png"
              alt="En One Project"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
          <div className="flex justify-between items-center">
            <div className="group-hover:text-[#ff4f00] transition-colors text-base">
              <span>En One</span>
              <span className="mx-2">•</span>
              <span>Izipay</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:text-[#ff4f00] group-hover:translate-x-1 flex-shrink-0" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default WorksSection;