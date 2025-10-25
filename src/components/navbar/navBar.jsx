import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/photos/Icono.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        "w-full z-50 fixed top-0 left-0 transition-all duration-300 " +
        (scrolled
          ? "bg-[#212529]"
          : "bg-transparent")
      }
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-auto mr-2" />
        </div>

        {/* Links - Desktop */}
        <div className="hidden lg:flex gap-10 text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "font-sofia font-bold text-lg transition-colors duration-300 " +
              (isActive ? "text-[#FAB922]" : "text-white hover:text-[#FAB922]")
            }
          >
            INICIO
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              "font-sofia font-bold text-lg transition-colors duration-300 " +
              (isActive ? "text-[#FAB922]" : "text-white hover:text-[#FAB922]")
            }
          >
            SERVICIOS
          </NavLink>
          <NavLink
            to="/Help"
            className={({ isActive }) =>
              "font-sofia font-bold text-lg transition-colors duration-300 " +
              (isActive ? "text-[#FAB922]" : "text-white hover:text-[#FAB922]")
            }
          >
            ¿CÓMO AYUDAR?
          </NavLink>
          <NavLink
            to="/whoAreWe"
            className={({ isActive }) =>
              "font-sofia font-bold text-lg transition-colors duration-300 " +
              (isActive ? "text-[#FAB922]" : "text-white hover:text-[#FAB922]")
            }
          >
            ¿QUIÉNES SOMOS?
          </NavLink>
        </div>

        {/* Botón hamburguesa - Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menú desplegable - Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white/90 flex flex-col items-center py-4 space-y-4">
          <Link
            to="/"
            className="font-sofia font-bold text-lg hover:text-[#12314D]"
            onClick={() => setIsOpen(false)}
          >
            INICIO
          </Link>
          <Link
            to="/Services"
            className="font-sofia font-bold text-lg hover:text-[#12314D]"
            onClick={() => setIsOpen(false)}
          >
            SERVICIOS
          </Link>
          <Link
            to="/Help"
            className="font-sofia font-bold text-lg hover:text-[#12314D]"
            onClick={() => setIsOpen(false)}
          >
            ¿CÓMO AYUDAR?
          </Link>
          <Link
            to="/whoAreWe"
            className="font-sofia font-bold text-lg hover:text-[#12314D]"
            onClick={() => setIsOpen(false)}
          >
            ¿QUIÉNES SOMOS?
          </Link>
        </div>
      )}
    </nav>
  );
}
