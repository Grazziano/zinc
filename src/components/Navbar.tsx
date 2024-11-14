import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LogoImg from "/images/logo.svg";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", name: "Home" },
    { to: "/services", name: "Services" },
    { to: "/projects", name: "Projects" },
    { to: "/pricing", name: "Pricing" },
    { to: "/drop", name: "Drop" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-auto flex h-16 w-full items-center justify-between p-4">
      {/* Logo */}
      <Link to="/">
        <img src={LogoImg} alt="Logo" width={130} />
      </Link>

      {/* Botão de hambúrguer para telas pequenas */}
      <button
        onClick={toggleMenu}
        className="text-blue-500 focus:outline-none md:hidden"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Links do menu e botão "Get Quote" */}
      <div
        className={`flex-col md:flex md:flex-row md:items-center md:gap-5 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col items-start md:flex-row md:gap-5">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className={`font-semibold ${
                  pathname === link.to ? "text-blue" : "text-gray"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="mt-4 rounded-full border border-blue bg-blue px-6 py-1 font-semibold text-white hover:bg-white hover:text-blue md:mt-0">
          Get Quote
        </button>
      </div>
    </nav>
  );
}
