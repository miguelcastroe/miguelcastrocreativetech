import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/peruvian-public-domain/Hero";
import ProjectOverview from "@/components/peruvian-public-domain/ProjectOverview";
import ProjectDetails from "@/components/peruvian-public-domain/ProjectDetails";
import Results from "@/components/peruvian-public-domain/Results";
import NextProject from "@/components/peruvian-public-domain/NextProject";

const PeruvianPublicDomain = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1000px] mx-auto">
        <Header />
        <div className="mt-24 md:mt-32">
          <Hero />
          <ProjectOverview />
          <ProjectDetails />
          <Results />
          <NextProject />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PeruvianPublicDomain;