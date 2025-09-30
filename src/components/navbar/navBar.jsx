import { Link } from "react-router-dom";
import logo from "../../assets/photos/Icono.png";
import "../navbar/navBar.css";
export default function Navbar() {
  return (
    <nav className="w-[97%] bg-white/20 py-4 mt-8 justify-center mx-auto rounded-t-2xl">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between items-center px-6 relative">

        {/* Enlaces izquierda */}
        <div className="flex gap-10">
          <Link   to="/" className="font-sofia font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-blue-700">INICIO</Link>
          <Link to="#" className="font-sofia font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-blue-700">SERVICIOS</Link>
        </div>

        <div class="frame-logo">
          <img src={logo} alt="Logo" className="w-[200px] h-[200px] border-black rounded-full object-contain" />
        </div>

        {/* Enlaces derecha */}
        <div className="flex gap-20">
          <Link to="/" className="font-sofia font-bold text-xs sm:text-sm md:text-2xl lg:text-3xl hover:text-blue-700">¿CÓMO <br /> AYUDAR?</Link>
          <Link to="/" className="font-sofia font-bold text-xs sm:text-sm md:text-2xl lg:text-3xl hover:text-blue-700">¿QUIÉNES <br /> SOMOS?</Link>
        </div>
      </div>
    </nav>
  );
}
