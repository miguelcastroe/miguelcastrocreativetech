import BehindTheFearHeader from "@/components/behind-fear/BehindTheFearHeader";
import ProjectDetails from "@/components/behind-fear/ProjectDetails";
import OutcomesGrid from "@/components/behind-fear/OutcomesGrid";
import Sources from "@/components/behind-fear/Sources";

const BehindTheFear = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1000px] mx-auto">
        <BehindTheFearHeader />
        <div className="aspect-video w-full mb-32">
          <iframe
            src="https://player.vimeo.com/video/1035621612"
            className="w-full h-full rounded-lg"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <ProjectDetails />
        <OutcomesGrid />
        <Sources />
      </div>
    </div>
  );
};

export default BehindTheFear;