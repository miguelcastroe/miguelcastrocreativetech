import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VanishingEmailsHeader from "@/components/vanishing-emails/VanishingEmailsHeader";
import VanishingEmailsDetails from "@/components/vanishing-emails/VanishingEmailsDetails";
import OutcomesGrid from "@/components/vanishing-emails/OutcomesGrid";
import Sources from "@/components/vanishing-emails/Sources";

const VanishingEmails = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1400px] mx-auto">
        <Header />
        <div className="mt-24 md:mt-32">
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default VanishingEmails;