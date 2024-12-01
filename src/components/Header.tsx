import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-26">
      <div className="text-sm flex items-center">
        <img 
          src="https://ouauehtpqfvldbvsihpu.supabase.co/storage/v1/object/public/GIF/miguelcastro_logo.svg" 
          alt="Miguel Castro Logo"
          className="w-8 h-auto"
        />
        <span className="ml-5 uppercase text-[#1a1aaa]">Creative Director and Tech Consultant</span>
      </div>
      <nav className="flex gap-6 text-sm">
        <Link to="#work">WORK</Link>
        <Link to="#about">ABOUT</Link>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
      </nav>
    </header>
  );
};

export default Header;