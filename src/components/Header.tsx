import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-26">
      <div className="text-sm">M C</div>
      <nav className="flex gap-6 text-sm">
        <Link to="#work">WORK</Link>
        <Link to="#about">ABOUT</Link>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
      </nav>
    </header>
  );
};

export default Header;