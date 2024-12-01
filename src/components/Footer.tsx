const Footer = () => {
  return (
    <footer className="relative mt-26 -mx-6 md:-mx-[220px] px-6 md:px-[220px] pt-26">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-tiny">
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
      </div>
    </footer>
  );
};

export default Footer;