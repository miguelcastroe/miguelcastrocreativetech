const Footer = () => {
  return (
    <footer className="relative mt-26 -mx-6 md:-mx-[220px] px-6 md:px-[220px] pt-26">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-tiny">
        <div>
          <h3 className="uppercase mb-2 text-[#a1a1aa]">Listening</h3>
          <div className="space-y-1">
            <a href="https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j" className="block">Coding Mode</a>
            <a href="https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn" className="block">Lo-Fi Beats</a>
          </div>
        </div>
        <div>
          <h3 className="uppercase mb-2 text-[#a1a1aa]">Social</h3>
          <div className="space-y-1">
            <a href="https://linkedin.com/in/miguelcastro" className="block">linkedin.com/in/miguelcastro</a>
            <a href="mailto:m@miguelcastro" className="block">m@miguelcastro</a>
          </div>
        </div>
        <div>
          <h3 className="uppercase mb-2 text-[#a1a1aa]">Colophon</h3>
          <p className="leading-relaxed">
            Set in Pitch Sans by Klim. Imagery sourced from PUBLIC WORK. Sounds by Flow OST. Inspired by Cabal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;