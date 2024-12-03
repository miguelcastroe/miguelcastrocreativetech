import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TemplesOfKnowledge = () => {
  return (
    <div className="min-h-screen px-6 md:px-[220px] pt-6 pb-8 md:pt-8">
      <div className="max-w-[1000px] mx-auto">
        <Header />
        
        <ScrollArea className="h-[calc(100vh-280px)] mt-24">
          <article className="max-w-[800px] mx-auto bg-[#fdfbf7] p-8 md:p-12 shadow-sm">
            <header className="mb-16 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#ff4f00] to-[#ff8700] bg-clip-text text-transparent">
                Temples of Knowledge
              </h1>
              <p className="text-lg text-[#666] font-medium">
                Bridging Education and Culture with AI
              </p>
            </header>

            <section className="mb-16 animate-fade-in">
              <h2 className="text-xl font-semibold mb-6 text-[#403E43]">Challenge</h2>
              <div className="prose prose-sm max-w-none">
                <p className="text-base leading-relaxed text-[#444]">
                  In Peru's remote highlands, where Quechua and Aymara are spoken, access to quality education is limited by scarce resources, high technology costs, and unreliable internet connectivity. Indigenous communities face additional barriers, as most educational tools fail to include native languages or respect their cultural context. These gaps perpetuate a cycle of inequality, leaving students without the tools to thrive in a rapidly advancing world.
                </p>
              </div>
            </section>

            <section className="mb-16 animate-fade-in [animation-delay:200ms]">
              <h2 className="text-xl font-semibold mb-6 text-[#403E43]">Inspiration</h2>
              <div className="prose prose-sm max-w-none">
                <p className="text-base leading-relaxed text-[#444] mb-8">
                  The inspiration for Temples of Knowledge comes from the resilience and richness of Peru's indigenous communities. Their languages and traditions hold immense cultural value but are often overlooked in education and technology. This initiative aims to honor that heritage while introducing tools that can spark curiosity, creativity, and growth in future generations. It's a belief that education should respect where students come from while empowering them to imagine where they can go.
                </p>
                <blockquote className="border-l-[0.75px] border-[#ff4f00] pl-6 my-8 italic text-lg text-[#333]">
                  "Education is not about changing who we are—it's about amplifying what we already have, so every child can see their culture reflected in their future."
                </blockquote>
              </div>
            </section>

            <section className="mb-16 animate-fade-in [animation-delay:400ms]">
              <h2 className="text-xl font-semibold mb-6 text-[#403E43]">Idea</h2>
              <div className="prose prose-sm max-w-none">
                <p className="text-base leading-relaxed text-[#444]">
                  Temples of Knowledge is an early-stage initiative to bring education to underserved communities using Raspberry Pi devices powered by offline AI. These devices are designed to function without internet access, running a custom Large Language Model (LLM) capable of interacting in Quechua, Aymara, and Spanish. The goal is to blend STEM education with cultural preservation, creating a stepping stone for the future of learning in Peru.
                </p>
              </div>
            </section>

            <section className="mb-16 animate-fade-in [animation-delay:600ms]">
              <h2 className="text-xl font-semibold mb-6 text-[#403E43]">Development</h2>
              <div className="prose prose-sm max-w-none">
                <p className="text-base leading-relaxed text-[#444] mb-6">
                  Though still in its infancy and without formal funding, the concept is being shaped by the following principles:
                </p>
                <ul className="space-y-4 mb-8 border-l-[0.75px] border-[#ff4f00] pl-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 mr-3 bg-[#ff4f00] rounded-full flex-shrink-0"></span>
                    <p><strong className="text-[#403E43]">Hardware Foundation:</strong> Leveraging Raspberry Pi for its affordability and adaptability, paired with solar-powered battery packs for energy independence.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 mr-3 bg-[#ff4f00] rounded-full flex-shrink-0"></span>
                    <p><strong className="text-[#403E43]">Localized AI:</strong> Training the LLM with datasets rooted in Peruvian culture, ensuring students can learn in their native languages while exploring global concepts.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 mr-3 bg-[#ff4f00] rounded-full flex-shrink-0"></span>
                    <p><strong className="text-[#403E43]">Practical Deployment:</strong> Initial focus on piloting the idea in rural areas to test feasibility, gather feedback, and refine the approach.</p>
                  </li>
                </ul>
                <p className="text-base leading-relaxed text-[#444]">
                  This is not about delivering a finished product but about initiating a movement—one that inspires collaboration and paves the way for more comprehensive solutions.
                </p>
              </div>
            </section>

            <section className="mb-16 animate-fade-in [animation-delay:800ms]">
              <h2 className="text-xl font-semibold mb-6 text-[#403E43]">Future Vision</h2>
              <div className="prose prose-sm max-w-none">
                <p className="text-base leading-relaxed text-[#444] mb-6">
                  Temples of Knowledge represents a commitment to Peru's future, offering a starting point for reimagining education. While this initiative is only a step forward, its potential lies in its ability to inspire others to contribute, refine, and expand the idea.
                </p>
                <p className="text-base leading-relaxed text-[#444] mb-6">
                  By fostering partnerships with educators, communities, and organizations, we can collectively work toward a system that respects cultural heritage while equipping students with the skills needed for tomorrow. It's a vision rooted in hope, purpose, and the belief that even the smallest steps can lead to transformative change.
                </p>
                <p className="text-base leading-relaxed text-[#444]">
                  This project is my way of giving back to my country—an idea for a better tomorrow, born from the challenges of today.
                </p>
              </div>
            </section>

            <blockquote className="border-l-[0.75px] border-[#ff4f00] pl-6 my-12 animate-fade-in [animation-delay:1000ms]">
              <p className="text-lg italic text-[#333] font-medium">
                "Knowledge becomes truly powerful when it speaks the language of the people it serves."
              </p>
            </blockquote>
          </article>
        </ScrollArea>
        
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TemplesOfKnowledge;