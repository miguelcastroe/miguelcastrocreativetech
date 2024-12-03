import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="mb-32 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-5 space-y-16">
          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Challenge</h2>
            <p className="text-gray-800">
              Addressing the hidden nature of domestic violence, where 4 out of 10 women in Peru experience abuse, 
              yet only 40% seek help due to fear, stigma, or lack of support.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Insight</h2>
            <p className="text-gray-800">
              Victims often mask their cries for help in everyday interactions, much like hidden messages in digital 
              communication. This behavior can be mirrored using technology to reveal concealed distress signals.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase mb-4 text-[#a1a1aa]">Idea</h2>
            <p className="text-gray-800">
              Using hidden HTML codes and meta-tags, we embedded real stories of abuse into seemingly normal emails. 
              Interactive elements like hover effects revealed phrases such as "Help me," mimicking how victims subtly 
              communicate distress.
            </p>
          </section>
        </div>

        <div className="md:col-span-7">
          <section>
            <div className="bg-[#f6f6f7] p-4 rounded-lg font-ibm text-tiny mb-8">
              <pre className="whitespace-pre-wrap text-[#333]">
{`<p>Hey Sis, <span class="hidden-message" title="Help me">how are you?</span></p>
<p>I hope to see you soon. Carl is <span class="highlight">stressed</span>, 
and I don't want to upset him.</p>

<style>
  .hidden-message:hover::after {
    content: attr(title);
    font-weight: bold;
    color: red;
  }
  .highlight:hover {
    color: red;
    text-decoration: underline;
  }
</style>`}
              </pre>
            </div>
            <blockquote className="text-base italic text-gray-600 border-l-[0.75px] border-[#ff4f00] pl-6 mt-0">
              "By combining technology and storytelling, we gave victims a voice hidden in plain sight, 
              opening the door to conversations about the realities of abuse."
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;