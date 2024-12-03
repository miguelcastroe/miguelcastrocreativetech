import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="mb-26 animate-fade-in">
      <p className="text-lg leading-relaxed mb-8">
        I'm Miguel Castro, a seasoned creative director based in South America, specializing in{" "}
        <Link to="/about" className="underline decoration-[0.75px] underline-offset-2">bridging the gap between creativity and technology</Link>. With nearly two decades of experience working for major global advertising agencies, I won a{" "}
        <a href="/mouthpad" className="underline decoration-[0.75px] underline-offset-2">Grand Prix in Innovation</a> in 2023 and a Bronze in Innovation again in 2024, with ideas that truly make people's lives better. I've come to realize it's time to give back to the world for all the privileges I've had. Advertising gimmicks and gadgets are fine, but technology, as I see it, should serve a greater good.
      </p>
      <p className="text-lg leading-relaxed">
        Nowadays, I'm a creative director and tech consultant for brands, businesses, and NGOs alike, while building my own AI tools.
      </p>
    </section>
  );
};

export default Introduction;