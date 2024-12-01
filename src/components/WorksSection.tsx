const WorksSection = () => {
  return (
    <section className="mb-26 border-b border-[#a1a1aa]">
      <h2 className="text-xs uppercase mb-8">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-26">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>MouthPad^</span>
            <span>PE/US</span>
          </div>
          <div className="flex justify-between">
            <span>Vanishing Emails</span>
            <span>PE/US</span>
          </div>
          <div className="flex justify-between">
            <span>Behind The Fear</span>
            <span>PE</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Augmental</span>
            <span></span>
          </div>
          <div className="flex justify-between">
            <span>Amazon Web Services</span>
            <span></span>
          </div>
          <div className="flex justify-between">
            <span>Defense of Women's Rights</span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;