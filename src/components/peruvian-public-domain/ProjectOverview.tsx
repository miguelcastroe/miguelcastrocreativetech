import { BookOpen, Flag, Globe, Archive } from "lucide-react";

const ProjectOverview = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-6">Project Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-[#F6F6F7]">
          <BookOpen className="w-6 h-6 mb-4" />
          <h3 className="font-medium mb-2">Research</h3>
          <p className="text-sm">Extensive documentation of historical artifacts</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-[#F6F6F7]">
          <Flag className="w-6 h-6 mb-4" />
          <h3 className="font-medium mb-2">Cultural Impact</h3>
          <p className="text-sm">Preserving Peru's rich heritage</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-[#F6F6F7]">
          <Globe className="w-6 h-6 mb-4" />
          <h3 className="font-medium mb-2">Accessibility</h3>
          <p className="text-sm">Global access to cultural resources</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-[#F6F6F7]">
          <Archive className="w-6 h-6 mb-4" />
          <h3 className="font-medium mb-2">Preservation</h3>
          <p className="text-sm">Digital archiving of historical documents</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;