const PersonalSection = () => {
  return (
    <section className="mb-26">
      <h2 className="text-xs uppercase mb-8">Personal Endeavors</h2>
      <div className="border-t border-[#a1a1aa]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <div className="py-4 border-t border-[#a1a1aa]">
              <span>AI Organization</span>
            </div>
            <div className="py-4 border-t border-[#a1a1aa]">
              <span>Temples Of Knowledge</span>
            </div>
            <div className="py-4 border-t border-[#a1a1aa]">
              <span>Peruvian Public Domain</span>
            </div>
          </div>
          <div className="md:border-l border-[#a1a1aa]">
            <div className="py-4 border-t border-[#a1a1aa]">
              <span>Community</span>
            </div>
            <div className="py-4 border-t border-[#a1a1aa]">
              <span>Education</span>
            </div>
            <div className="py-4 border-t border-[#a1a1aa]">
              <span>Art</span>
            </div>
          </div>
          <div className="md:border-l border-[#a1a1aa]">
            <div className="py-4 border-t border-[#a1a1aa]">
              <span>PE</span>
            </div>
            <div className="py-4 border-t border-[#a1a1aa]">
              <span>PE</span>
            </div>
            <div className="py-4 border-t border-[#a1a1aa]">
              <span>PE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;