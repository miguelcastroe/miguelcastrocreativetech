import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectHeader from "@/components/peruvian-art/ProjectHeader";
import ProjectDetails from "@/components/peruvian-art/ProjectDetails";
import OutcomesGrid from "@/components/peruvian-art/OutcomesGrid";
import Sources from "@/components/peruvian-art/Sources";

const PeruvianDeclassifiedArt = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1400px] mx-auto">
        <Header />
        <div className="mt-24 md:mt-32">
          <ProjectHeader />
          <ProjectDetails />
          <OutcomesGrid />
          <Sources />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PeruvianDeclassifiedArt;