import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <section id="about" className="mb-26 animate-fade-in">
        <h1 className="text-3xl mb-4 font-medium">Against the Odds: A Journey of Creativity and Resilience</h1>
        
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm text-muted-foreground">Read along</span>
          <audio 
            controls 
            controlsList="nodownload"
            src="https://ouauehtpqfvldbvsihpu.supabase.co/storage/v1/object/public/GIF/miguelcastro_notbritish.mp3"
            className="h-8 flex-grow max-w-[300px]"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <div className="space-y-8 text-lg leading-relaxed">
              <p>I have made a career out of defying the odds.</p>
              
              <p>After honing my craft at AKQA, I returned to Peru feeling like a creative digital master, certain that my skills were the future. Instead, I found an industry still hesitant about digital innovation. Over 20 interviews later—at agencies big and small—it was clear no one considered my expertise relevant. It took over a year of rejection to finally land my first job, but that initial step was all I needed.</p>
              
              <p>When I got the chance, I poured everything into transforming Movistar, a brand few believed could thrive digitally. What followed was a complete turnaround. Movistar became a leader in digital, not just creatively, but financially and culturally—a brand that set the standard in an industry that had once resisted change.</p>
              
              <p>For years, I've helped brands break barriers, whether by smashing sales records, building powerful end-to-end creative teams, or redefining what's possible in digital advertising. Many of the people I've worked with have since taken key positions around the world, carrying that same spirit of innovation and resilience forward.</p>
              
              <p>In April 2020, with the world turned upside down by a pandemic, I took another leap of faith and started my own consultancy. It was risky—no safety nets, no guarantees—but it quickly became a success. By October, I was turning a profit, collaborating with startups, and moonlighting with VML. That experience redefined how I saw my work: as something adaptable, inventive, and always rooted in delivering real value.</p>
              
              <p>By late 2021, I joined VML full-time and set my sights on defying new odds. In my first year, I helped win Peru's first Grand Prix at Cannes in the Innovation category—a career milestone and a testament to the power of pushing limits. A year later, we earned a Bronze in Innovation, proving that lightning can, in fact, strike twice.</p>
              
              <p>Today, I reflect on a nearly two-decade journey shaped by resilience, creativity, and a relentless curiosity for what's next. From enduring rejection to reshaping brands and building award-winning campaigns, my career has been a series of experiments in what happens when creativity meets technology.</p>
              
              <p>For me, technology isn't just a tool—it's a means to create solutions that matter. It's not about gimmicks or gadgets; it's about finding ways to make life better, more connected, and more meaningful. I've spent my career bridging the gap between these two worlds, working with brands, businesses, and NGOs, and developing tools that empower others to think bigger and push further.</p>
              
              <p>This work has always been about more than just breaking records or winning awards—it's about redefining what's possible and proving, time and time again, that the odds are just another challenge to overcome.</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
