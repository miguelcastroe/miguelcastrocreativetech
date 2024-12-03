import ContactInfo from "./contact/ContactInfo";

const Footer = () => {
  return (
    <footer className="relative -mx-6 md:-mx-[220px] px-6 md:px-[220px] pt-12 border-t border-[#e5e5e5] border-opacity-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div className="relative">
          <h3 className="uppercase mb-2 text-[#a1a1aa]">About this website</h3>
          <p className="text-[#444]">
            Created with 1,200+ prompts
          </p>
        </div>
        <div className="flex justify-end">
          <ContactInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;