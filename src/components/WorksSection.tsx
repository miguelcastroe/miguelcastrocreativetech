import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorksSection = () => {
  return (
    <section className="mb-18 animate-fade-in">
      <h2 className="text-xs uppercase mb-8 text-[#a1a1aa]">Selected Works</h2>
      <div className="flex flex-col">
        <Link to="/mouthpad" className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px] flex justify-between items-center group">
          <div className="group-hover:text-[#ff4f00] transition-colors text-base md:text-base sm:text-sm xs:text-xs">
            <span>MouthPad^</span>
            <span className="mx-2">•</span>
            <span>Augmental</span>
            <span className="mx-2">•</span>
            <span>PE/US</span>
          </div>
          <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:text-[#ff4f00] group-hover:translate-x-1 flex-shrink-0" />
        </Link>
        <Link to="/vanishing-emails" className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px] flex justify-between items-center group">
          <div className="group-hover:text-[#ff4f00] transition-colors text-base md:text-base sm:text-sm xs:text-xs">
            <span>Vanishing Emails</span>
            <span className="mx-2">•</span>
            <span>Amazon Web Services</span>
            <span className="mx-2">•</span>
            <span>PE/US</span>
          </div>
          <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:text-[#ff4f00] group-hover:translate-x-1 flex-shrink-0" />
        </Link>
        <Link to="/behind-the-fear" className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px] flex justify-between items-center group">
          <div className="group-hover:text-[#ff4f00] transition-colors text-base md:text-base sm:text-sm xs:text-xs">
            <span>Behind The Fear</span>
            <span className="mx-2">•</span>
            <span>DEMUS Women's Rights</span>
            <span className="mx-2">•</span>
            <span>PE</span>
          </div>
          <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:text-[#ff4f00] group-hover:translate-x-1 flex-shrink-0" />
        </Link>
      </div>
    </section>
  );
};

export default WorksSection;