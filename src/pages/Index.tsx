import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import WorksSection from "@/components/WorksSection";
import PersonalSection from "@/components/PersonalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] py-8 md:p-18">
      <div className="max-w-[1000px] mx-auto">
        <Header />
        <main>
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