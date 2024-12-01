import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import WorksSection from "@/components/WorksSection";
import PersonalSection from "@/components/PersonalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-8 pb-8 md:pt-12">
      <div className="max-w-[1000px] mx-auto">
        <Header />
        <main className="mt-[30vh]">
          <Introduction />
          <WorksSection />
          <PersonalSection />
          <div className="mt-[120px]">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;