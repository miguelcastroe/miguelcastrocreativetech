const WorksSection = () => {
  return (
    <section className="mb-26">
      <h2 className="text-xs uppercase mb-8">Selected Works</h2>
      <div className="border-t border-[#a1a1aa]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <div className="py-4 border-b border-[#a1a1aa]">
              <span>MouthPad^</span>
            </div>
            <div className="py-4 border-b border-[#a1a1aa]">
              <span>Vanishing Emails</span>
            </div>
            <div className="py-4 border-b border-[#a1a1aa]">
              <span>Behind The Fear</span>
            </div>
          </div>
          <div className="md:border-l border-[#a1a1aa]">
            <div className="py-4 border-b border-[#a1a1aa]">
              <span>Augmental</span>
            </div>
            <div className="py-4 border-b border-[#a1a1aa]">
              <span>Amazon Web Services</span>
            </div>
            <div className="py-4 border-b border-[#a1a1aa]">
              <span>Defense of Women's Rights</span>
            </div>
          </div>
          <div className="md:border-l border-[#a1a1aa]">
            <div className="py-4 border-b border-[#a1a1aa]">
              <span>PE/US</span>
            </div>
            <div className="py-4 border-b border-[#a1a1aa]">
              <span>PE/US</span>
            </div>
            <div className="py-4 border-b border-[#a1a1aa]">
              <span>PE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;