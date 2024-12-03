import ContactInfo from "./contact/ContactInfo";

const Footer = () => {
  return (
    <footer className="relative -mx-6 md:-mx-[220px] px-6 md:px-[220px] pt-12 border-t border-[#e5e5e5] border-opacity-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div className="relative">
          <h3 className="uppercase mb-2 text-[#a1a1aa]">Find me on Spotify</h3>
          <a 
            href="https://open.spotify.com/user/12127200952" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#ff4f00] transition-colors"
          >
            View my Spotify profile
          </a>
        </div>
        <div className="flex justify-end">
          <ContactInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;