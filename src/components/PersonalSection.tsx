import { ArrowRight } from "lucide-react";

const PersonalSection = () => {
  return (
    <section className="mb-26">
      <h2 className="text-xs uppercase mb-8 text-[#a1a1aa]">Personal Endeavors</h2>
      <div className="flex flex-col">
        <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px] flex justify-between items-center group hover:bg-gray-50 transition-colors cursor-pointer">
          <div>
            <span>AI Organization</span>
            <span className="mx-2">•</span>
            <span>Community</span>
            <span className="mx-2">•</span>
            <span>PE</span>
          </div>
          <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:translate-x-1" />
        </div>
        <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px] flex justify-between items-center group hover:bg-gray-50 transition-colors cursor-pointer">
          <div>
            <span>Temples Of Knowledge</span>
            <span className="mx-2">•</span>
            <span>Education</span>
            <span className="mx-2">•</span>
            <span>PE</span>
          </div>
          <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:translate-x-1" />
        </div>
        <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px] flex justify-between items-center group hover:bg-gray-50 transition-colors cursor-pointer">
          <div>
            <span>Peruvian Public Domain</span>
            <span className="mx-2">•</span>
            <span>Art</span>
            <span className="mx-2">•</span>
            <span>PE</span>
          </div>
          <ArrowRight className="w-3 h-3 text-[#a1a1aa] transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;