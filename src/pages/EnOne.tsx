import PageLayout from "@/components/PageLayout";
import EnOneHeader from "@/components/en-one/EnOneHeader";
import ProjectDetails from "@/components/en-one/ProjectDetails";
import OutcomesGrid from "@/components/en-one/OutcomesGrid";
import Sources from "@/components/en-one/Sources";

const EnOne = () => {
  return (
    <PageLayout>
      <EnOneHeader />
      <div className="aspect-video w-full mb-32">
        <iframe
          src="https://player.vimeo.com/video/951744690"
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

export default EnOne;