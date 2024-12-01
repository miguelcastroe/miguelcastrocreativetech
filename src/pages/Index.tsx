import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen px-6 py-8 md:p-18">
      <header className="flex justify-between items-center mb-26">
        <div className="text-sm">M C</div>
        <nav className="flex gap-6 text-sm">
          <Link to="#work">WORK</Link>
          <Link to="#about">ABOUT</Link>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
        </nav>
      </header>

      <main className="max-w-4xl">
        <section className="mb-26">
          <p className="text-lg leading-relaxed mb-8">
            I'm Miguel Castro, a seasoned creative director based in South America, specializing in{" "}
            <a href="#" className="underline">bridging the gap between creativity and technology</a>. With nearly two decades of experience working for major global advertising agencies, I won a{" "}
            <a href="#" className="underline">Grand Prix in Innovation</a> in 2023 and a Bronze in Innovation again in 2024, with ideas that truly make people's lives better. I've come to realize it's time to give back to the world for all the privileges I've had. Advertising gimmicks and gadgets are fine, but technology, as I see it, should serve a greater good.
          </p>
          <p className="text-lg leading-relaxed">
            Nowadays, I'm a creative director and tech consultant for brands, businesses, and NGOs alike, while building my own AI tools.
          </p>
        </section>

        <section className="mb-26">
          <h2 className="text-xs uppercase mb-8">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>MouthPad^</span>
                <span>PE/US</span>
              </div>
              <div className="flex justify-between">
                <span>Vanishing Emails</span>
                <span>PE/US</span>
              </div>
              <div className="flex justify-between">
                <span>Behind The Fear</span>
                <span>PE</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Augmental</span>
                <span></span>
              </div>
              <div className="flex justify-between">
                <span>Amazon Web Services</span>
                <span></span>
              </div>
              <div className="flex justify-between">
                <span>Defense of Women's Rights</span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-26">
          <h2 className="text-xs uppercase mb-8">Personal Endeavors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>AI Organization</span>
                <span>PE</span>
              </div>
              <div className="flex justify-between">
                <span>Temples Of Knowledge</span>
                <span>PE</span>
              </div>
              <div className="flex justify-between">
                <span>Peruvian Public Domain</span>
                <span>PE</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Community</span>
                <span></span>
              </div>
              <div className="flex justify-between">
                <span>Education</span>
                <span></span>
              </div>
              <div className="flex justify-between">
                <span>Art</span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-tiny">
          <div>
            <h3 className="uppercase mb-2">Listening</h3>
            <div className="space-y-1">
              <a href="spotify:playlist/01" className="block">spotify.com/playlist/01</a>
              <a href="spotify:playlist/02" className="block">spotify.com/playlist/02</a>
            </div>
          </div>
          <div>
            <h3 className="uppercase mb-2">Social</h3>
            <div className="space-y-1">
              <a href="https://linkedin.com/in/miguelcastro" className="block">linkedin.com/in/miguelcastro</a>
              <a href="mailto:m@miguelcastro" className="block">m@miguelcastro</a>
            </div>
          </div>
          <div>
            <h3 className="uppercase mb-2">Colophon</h3>
            <p className="leading-relaxed">
              Set in Pitch Sans by Klim. Imagery sourced from PUBLIC WORK. Sounds by Flow OST. Inspired by Cabal.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;