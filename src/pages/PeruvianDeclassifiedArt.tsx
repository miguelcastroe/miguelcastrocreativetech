import PageLayout from "@/components/PageLayout";
import ProjectHeader from "@/components/peruvian-art/ProjectHeader";
import ProjectDetails from "@/components/peruvian-art/ProjectDetails";
import OutcomesGrid from "@/components/peruvian-art/OutcomesGrid";
import Sources from "@/components/peruvian-art/Sources";

const PeruvianDeclassifiedArt = () => {
  return (
    <PageLayout>
      <ProjectHeader />
      <ProjectDetails />
      <OutcomesGrid />
      <Sources />
    </PageLayout>
  );
};

export default PeruvianDeclassifiedArt;