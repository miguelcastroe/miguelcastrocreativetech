const PersonalSection = () => {
  return (
    <section className="mb-26">
      <h2 className="text-xs uppercase mb-8">Personal Endeavors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>AI Organization</span>
            <span className="float-right">PE</span>
          </div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>Temples Of Knowledge</span>
            <span className="float-right">PE</span>
          </div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>Peruvian Public Domain</span>
            <span className="float-right">PE</span>
          </div>
        </div>
        <div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>Community</span>
          </div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>Education</span>
          </div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>Art</span>
          </div>
        </div>
        <div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span></span>
          </div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span></span>
          </div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;