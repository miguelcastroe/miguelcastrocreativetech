import PageLayout from "@/components/PageLayout";
import BehindTheFearHeader from "@/components/behind-fear/BehindTheFearHeader";
import ProjectDetails from "@/components/behind-fear/ProjectDetails";
import OutcomesGrid from "@/components/behind-fear/OutcomesGrid";
import Sources from "@/components/behind-fear/Sources";

const BehindTheFear = () => {
  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default BehindTheFear;