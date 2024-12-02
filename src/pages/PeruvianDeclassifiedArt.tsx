import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectHeader from "@/components/peruvian-art/ProjectHeader";
import ProjectDetails from "@/components/peruvian-art/ProjectDetails";
import OutcomesGrid from "@/components/peruvian-art/OutcomesGrid";

const PeruvianDeclassifiedArt = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1000px] mx-auto">
        <Header />
        <ProjectHeader />
        <ProjectDetails />
        <OutcomesGrid />
        <Footer />
      </div>
    </div>
  );
};

export default PeruvianDeclassifiedArt;