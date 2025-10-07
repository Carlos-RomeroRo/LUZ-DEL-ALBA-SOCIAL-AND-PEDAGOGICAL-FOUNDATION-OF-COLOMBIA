import { useEffect, useState } from "react";

export default function CarouselFullScreen() {
  const images = [
    "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853649/f4_an21xe.png",
    "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853640/f15_wwzprc.jpg",
    "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853643/f10_huvmoj.jpg",
    "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853644/f16_qpcidq.jpg",
    "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853646/f11_coeeyg.jpg"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Cambiar imagen cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-screen overflow-hidden">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
            i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={src}
            alt={`slide-${i}`}
            className="w-full h-full object-cover"
          />
          {/* Capa oscura encima de la imagen */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
      ))}
    </div>
  );
}
