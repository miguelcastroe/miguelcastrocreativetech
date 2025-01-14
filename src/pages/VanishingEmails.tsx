import PageLayout from "@/components/PageLayout";
import VanishingEmailsHeader from "@/components/vanishing-emails/VanishingEmailsHeader";
import VanishingEmailsDetails from "@/components/vanishing-emails/VanishingEmailsDetails";
import OutcomesGrid from "@/components/vanishing-emails/OutcomesGrid";
import Sources from "@/components/vanishing-emails/Sources";

const VanishingEmails = () => {
  return (
    <PageLayout>
      <VanishingEmailsHeader />
      <div className="aspect-video w-full mb-32">
        <iframe
          src="https://player.vimeo.com/video/951723906"
          className="w-full h-full rounded-lg"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <VanishingEmailsDetails />
      <OutcomesGrid />
      <Sources />
    </PageLayout>
  );
};

export default VanishingEmails;