import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalSection = () => {
  return (
    <section className="mb-26">
      <h2 className="text-xs uppercase mb-8 text-[#a1a1aa]">Personal Endeavors</h2>
      <div className="flex flex-col">
        <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px] flex justify-between items-center group cursor-pointer">
          <div className="group-hover:text-[#ff4f00] transition-colors text-base md:text-base sm:text-sm xs:text-xs">
            <span>AI Organization</span>
            <span className="mx-2">•</span>
            <span>Community</span>
            <span className="mx-2">•</span>
            <span>PE</span>
          </div>
          <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:text-[#ff4f00] group-hover:translate-x-1 flex-shrink-0" />
        </div>
        <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px] flex justify-between items-center group cursor-pointer">
          <div className="group-hover:text-[#ff4f00] transition-colors text-base md:text-base sm:text-sm xs:text-xs">
            <span>Temples Of Knowledge</span>
            <span className="mx-2">•</span>
            <span>Education</span>
            <span className="mx-2">•</span>
            <span>PE</span>
          </div>
          <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:text-[#ff4f00] group-hover:translate-x-1 flex-shrink-0" />
        </div>
        <Link to="/peruvian-declassified-art" className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px] flex justify-between items-center group">
          <div className="group-hover:text-[#ff4f00] transition-colors text-base md:text-base sm:text-sm xs:text-xs">
            <span>Peruvian Declassified Art</span>
            <span className="mx-2">•</span>
            <span>Culture</span>
            <span className="mx-2">•</span>
            <span>PE</span>
          </div>
          <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:text-[#ff4f00] group-hover:translate-x-1 flex-shrink-0" />
        </Link>
      </div>
    </section>
  );
};

export default PersonalSection;