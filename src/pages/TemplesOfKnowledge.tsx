import PageLayout from "@/components/PageLayout";
import Sources from "@/components/temples-of-knowledge/Sources";
import Header from "@/components/temples-of-knowledge/Header";
import Challenge from "@/components/temples-of-knowledge/Challenge";
import Inspiration from "@/components/temples-of-knowledge/Inspiration";
import Idea from "@/components/temples-of-knowledge/Idea";
import Development from "@/components/temples-of-knowledge/Development";
import FutureVision from "@/components/temples-of-knowledge/FutureVision";

const TemplesOfKnowledge = () => {
  return (
    <PageLayout>
      <article className="max-w-[800px] mx-auto bg-[#f9f9f9] p-8 md:p-12 mb-32">
        <Header />
        <Challenge />
        <Inspiration />
        <Idea />
        <Development />
        <FutureVision />
        <Sources />
      </article>
    </PageLayout>
  );
};

export default TemplesOfKnowledge;