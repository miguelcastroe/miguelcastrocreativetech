import PageLayout from "@/components/PageLayout";
import MouthPadHeader from "@/components/mouthpad/MouthPadHeader";
import MouthPadDetails from "@/components/mouthpad/MouthPadDetails";
import OutcomesGrid from "@/components/mouthpad/OutcomesGrid";
import Sources from "@/components/mouthpad/Sources";

const MouthPad = () => {
  return (
    <PageLayout>
      <MouthPadHeader />
      <div className="aspect-video w-full mb-32">
        <iframe
          src="https://player.vimeo.com/video/951744690"
          className="w-full h-full rounded-lg"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <MouthPadDetails />
      <OutcomesGrid />
      <Sources />
    </PageLayout>
  );
};

export default MouthPad;