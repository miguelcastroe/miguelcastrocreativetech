import BehindTheFearHeader from "@/components/behind-fear/BehindTheFearHeader";
import ProjectDetails from "@/components/behind-fear/ProjectDetails";
import OutcomesGrid from "@/components/behind-fear/OutcomesGrid";
import Sources from "@/components/behind-fear/Sources";

const BehindTheFear = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1000px] mx-auto">
        <BehindTheFearHeader />
        <ProjectDetails />
        <OutcomesGrid />
        <Sources />
      </div>
    </div>
  );
};

export default BehindTheFear;