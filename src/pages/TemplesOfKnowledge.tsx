import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TemplesOfKnowledge = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1000px] mx-auto">
        <Link to="/" className="inline-flex items-center text-sm hover:text-[#ff4f00] mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Temples of Knowledge: Bridging Education and Culture with AI</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
            <p className="text-lg leading-relaxed">
              In Peru's remote highlands, where Quechua and Aymara are spoken, access to quality education is limited by scarce resources, high technology costs, and unreliable internet connectivity. Indigenous communities face additional barriers, as most educational tools fail to include native languages or respect their cultural context. These gaps perpetuate a cycle of inequality, leaving students without the tools to thrive in a rapidly advancing world.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Inspiration</h2>
            <p className="text-lg leading-relaxed">
              The inspiration for Temples of Knowledge comes from the resilience and richness of Peru's indigenous communities. Their languages and traditions hold immense cultural value but are often overlooked in education and technology. This initiative aims to honor that heritage while introducing tools that can spark curiosity, creativity, and growth in future generations. It's a belief that education should respect where students come from while empowering them to imagine where they can go.
            </p>
            <blockquote className="border-l-4 border-[#ff4f00] pl-4 my-8 italic">
              "Education is not about changing who we are—it's about amplifying what we already have, so every child can see their culture reflected in their future."
            </blockquote>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Idea</h2>
            <p className="text-lg leading-relaxed">
              Temples of Knowledge is an early-stage initiative to bring education to underserved communities using Raspberry Pi devices powered by offline AI. These devices are designed to function without internet access, running a custom Large Language Model (LLM) capable of interacting in Quechua, Aymara, and Spanish. The goal is to blend STEM education with cultural preservation, creating a stepping stone for the future of learning in Peru.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Development</h2>
            <p className="text-lg leading-relaxed mb-4">
              Though still in its infancy and without formal funding, the concept is being shaped by the following principles:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li><strong>Hardware Foundation:</strong> Leveraging Raspberry Pi for its affordability and adaptability, paired with solar-powered battery packs for energy independence.</li>
              <li><strong>Localized AI:</strong> Training the LLM with datasets rooted in Peruvian culture, ensuring students can learn in their native languages while exploring global concepts.</li>
              <li><strong>Practical Deployment:</strong> Initial focus on piloting the idea in rural areas to test feasibility, gather feedback, and refine the approach.</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              This is not about delivering a finished product but about initiating a movement—one that inspires collaboration and paves the way for more comprehensive solutions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Future Vision</h2>
            <p className="text-lg leading-relaxed">
              Temples of Knowledge represents a commitment to Peru's future, offering a starting point for reimagining education. While this initiative is only a step forward, its potential lies in its ability to inspire others to contribute, refine, and expand the idea.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              By fostering partnerships with educators, communities, and organizations, we can collectively work toward a system that respects cultural heritage while equipping students with the skills needed for tomorrow. It's a vision rooted in hope, purpose, and the belief that even the smallest steps can lead to transformative change.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              This project is my way of giving back to my country—an idea for a better tomorrow, born from the challenges of today.
            </p>
          </section>

          <blockquote className="border-l-4 border-[#ff4f00] pl-4 my-8 italic text-xl">
            "Knowledge becomes truly powerful when it speaks the language of the people it serves."
          </blockquote>
        </article>
      </div>
    </div>
  );
};

export default TemplesOfKnowledge;