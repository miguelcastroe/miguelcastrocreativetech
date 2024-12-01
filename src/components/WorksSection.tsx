const WorksSection = () => {
  return (
    <section className="mb-26">
      <h2 className="text-xs uppercase mb-8 text-[#a1a1aa]">Selected Works</h2>
      <div className="flex flex-col">
        <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px]">
          <span>MouthPad^</span>
          <span className="mx-2">•</span>
          <span>Augmental</span>
          <span className="mx-2">•</span>
          <span>PE/US</span>
        </div>
        <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px]">
          <span>Vanishing Emails</span>
          <span className="mx-2">•</span>
          <span>Amazon Web Services</span>
          <span className="mx-2">•</span>
          <span>PE/US</span>
        </div>
        <div className="py-4 border-t border-[#a1a1aa] [border-top-width:0.5px]">
          <span>Behind The Fear</span>
          <span className="mx-2">•</span>
          <span>Defense of Women's Rights</span>
          <span className="mx-2">•</span>
          <span>PE</span>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;