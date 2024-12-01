const PersonalSection = () => {
  return (
    <section className="mb-26">
      <h2 className="text-xs uppercase mb-8">Personal Endeavors</h2>
      <div>
        <div className="flex flex-col border-t border-[#a1a1aa] [border-top-width:0.5px]">
          <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px]">
            <span>AI Organization</span>
            <span className="mx-2">•</span>
            <span>Community</span>
            <span className="mx-2">•</span>
            <span>PE</span>
          </div>
          <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px]">
            <span>Temples Of Knowledge</span>
            <span className="mx-2">•</span>
            <span>Education</span>
            <span className="mx-2">•</span>
            <span>PE</span>
          </div>
          <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px]">
            <span>Peruvian Public Domain</span>
            <span className="mx-2">•</span>
            <span>Art</span>
            <span className="mx-2">•</span>
            <span>PE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;