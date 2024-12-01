const WorksSection = () => {
  return (
    <section className="mb-26 border-b border-[#a1a1aa]">
      <h2 className="text-xs uppercase mb-8">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-26">
        <div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>MouthPad^</span>
          </div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>Vanishing Emails</span>
            <span className="float-right">PE/US</span>
          </div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>Behind The Fear</span>
            <span className="float-right">PE</span>
          </div>
        </div>
        <div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>Augmental</span>
          </div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>Amazon Web Services</span>
          </div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>Defense of Women's Rights</span>
          </div>
        </div>
        <div>
          <div className="border-t border-[#a1a1aa] py-4">
            <span>PE/US</span>
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

export default WorksSection;