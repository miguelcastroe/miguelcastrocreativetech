const PersonalSection = () => {
  return (
    <section className="mb-26">
      <h2 className="text-xs uppercase mb-8">Personal Endeavors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>AI Organization</span>
            <span>PE</span>
          </div>
          <div className="flex justify-between">
            <span>Temples Of Knowledge</span>
            <span>PE</span>
          </div>
          <div className="flex justify-between">
            <span>Peruvian Public Domain</span>
            <span>PE</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Community</span>
            <span></span>
          </div>
          <div className="flex justify-between">
            <span>Education</span>
            <span></span>
          </div>
          <div className="flex justify-between">
            <span>Art</span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;