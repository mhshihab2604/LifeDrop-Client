import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidDonateBlood } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-4 dark:text-gray-800 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center p-2">
          <BiSolidDonateBlood className="text-4xl sm:text-7xl text-[#6A0B37] animate-bounce" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-bold items-center">
          <li>
            <Link
              to="/"
              className="hover:text-[#B32346] dark:text-gray-800"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#B32346] dark:text-gray-800"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/findBLood"
              className="hover:text-[#B32346] dark:text-gray-800"
            >
              Find Blood
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="hover:text-[#B32346] dark:text-gray-800"
            >
              Register Now
            </Link>
          </li>
        </ul>

        {/* Login Button - Desktop */}
        <Link to="/login">
          <button className="px-6 py-2 rounded hover:bg-[#6A0B37] border-2 border-[#6A0B37] text-black hover:text-white font-semibold">
            Login
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-[#6A0B37]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-4 py-6 shadow-md rounded-b-md absolute w-full">
          <ul className="space-y-4 text-center font-semibold text-[#6A0B37]">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link to="/findBLood" onClick={() => setMenuOpen(false)}>Find Blood</Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register Now</Link>
            </li>
            <li>
              <button className="w-full mt-4 px-4 py-2 bg-[#6A0B37] text-white rounded" onClick={() => setMenuOpen(false)}>
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
