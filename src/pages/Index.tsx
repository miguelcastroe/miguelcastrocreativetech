import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import WorksSection from "@/components/WorksSection";
import PersonalSection from "@/components/PersonalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1000px] mx-auto">
        <Header />
        <main className="mt-[45vh]">
          <Introduction />
          <div className="aspect-video w-full mb-24">
            <iframe
              src="https://player.vimeo.com/video/951744690"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <WorksSection />
          <PersonalSection />
          <div className="mt-[180px]">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;