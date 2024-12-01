const WorksSection = () => {
  return (
    <section className="mb-26 border-b border-[#a1a1aa]">
      <h2 className="text-xs uppercase mb-8">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-26">
        <div className="space-y-4">
          <div className="flex justify-between border-t border-[#a1a1aa] py-4">
            <span>MouthPad^</span>
            <span>PE/US</span>
          </div>
          <div className="flex justify-between border-t border-[#a1a1aa] py-4">
            <span>Vanishing Emails</span>
            <span>PE/US</span>
          </div>
          <div className="flex justify-between border-t border-[#a1a1aa] py-4">
            <span>Behind The Fear</span>
            <span>PE</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between border-t border-[#a1a1aa] py-4">
            <span>Augmental</span>
            <span></span>
          </div>
          <div className="flex justify-between border-t border-[#a1a1aa] py-4">
            <span>Amazon Web Services</span>
            <span></span>
          </div>
          <div className="flex justify-between border-t border-[#a1a1aa] py-4">
            <span>Defense of Women's Rights</span>
            <span></span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between border-t border-[#a1a1aa] py-4">
            <span></span>
            <span></span>
          </div>
          <div className="flex justify-between border-t border-[#a1a1aa] py-4">
            <span></span>
            <span></span>
          </div>
          <div className="flex justify-between border-t border-[#a1a1aa] py-4">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;