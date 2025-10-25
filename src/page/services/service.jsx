import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate, useParams } from "react-router-dom";

import FadeContent from "../../components/animations/animateComponents/fadeContent/fadeContent";
import TextType from "../../components/animations/text/textType/textType";
import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";

// ✅ Componente reutilizable de testimonio
function TestimonialCard({ name, role, image, testimonialShort }) {
  const isBenefactor = role === "Benefactor";

  return (
  <div
    className={`card w-96 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 rounded-2xl overflow-hidden bg-white`}
  >
    {/* Contenedor de imagen con proporción fija para retratos */}
    <figure className="relative w-full aspect-[3/4] overflow-hidden rounded-t-2xl">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
      />
      <span
        className={`absolute top-3 right-3 text-white text-sm font-semibold px-3 py-1 rounded-full ${
          isBenefactor ? "bg-yellow-400" : "bg-[#12314D]"
        }`}
      >
        {role}
      </span>
    </figure>

    {/* Cuerpo de la tarjeta */}
    <div className="card-body px-5 pb-6">
      <h2 className="card-title text-lg font-semibold text-gray-800 justify-center text-center mb-1 mt-1">
        {name}
      </h2>
      <p className="text-gray-600 text-sm text-justify">{testimonialShort}</p>

      <div className="mt-4 flex justify-center">
        <button
          className={`btn btn-sm text-white font-semibold px-6 py-2 rounded-full transition ${
            isBenefactor
              ? "bg-yellow-400 hover:bg-yellow-500"
              : "bg-[#12314D] hover:bg-[#081622]"
          }`}
        >
          Leer más
        </button>
      </div>
    </div>
  </div>
);

}

export default function Service() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [currentModalIndex, setCurrentModalIndex] = useState(null);
  const navigate = useNavigate();
  const { serviceTitle } = useParams();

  const services = [
    {
      title: "Acompañamiento social",
      img: "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853641/f2_ckbmt2.png",
      desc: "Brindamos apoyo emocional y psicológico para fortalecer la resiliencia infantil.",
      detail: "Nuestro servicio de acompañamiento psicosocial se centra en brindar apoyo emocional y psicológico a los niños vulnerables y en riesgo de deserción escolar. A través de sesiones individuales y grupales, nuestros profesionales capacitados trabajan en estrecha colaboración con los niños, ayudándolos a superar traumas, gestionar emociones, mejorar su autoestima y desarrollar habilidades socioemocionales. Nos enfocamos en fortalecer su resiliencia, promover relaciones positivas y proporcionarles herramientas para enfrentar los desafíos de la vida.",
    },
    {
      title: "Asesorías enfocadas a familias",
      img: "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853649/f4_an21xe.png",
      desc: "Fortalecemos a las familias con orientación y apoyo para sus hijos.",
      detail: "Comprendemos la importancia del entorno familiar en el desarrollo de los niños. Por ello, ofrecemos asesorías enfocadas a las familias, brindándoles orientación y apoyo en diversos aspectos. Trabajamos en estrecha colaboración con los padres y cuidadores, ofreciendo herramientas para fortalecer su rol como educadores y promotores del bienestar de sus hijos. Les proporcionamos estrategias para involucrarse de manera activa en la educación de los niños, establecer rutinas y hábitos saludables, y fomentar una comunicación efectiva en el hogar.",
    },
    {
      title: "Seguimiento pedagógico",
      img: "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853651/f3_umpyig.jpg",
      desc: "Acompañamos y fortalecemos el aprendizaje de niños con apoyo pedagógico.",
      detail: "A través de nuestro servicio de seguimiento pedagógico, ofrecemos un acompañamiento continuo y personalizado a los niños en su proceso educativo. Nuestro equipo de profesionales realiza un seguimiento detallado de su rendimiento académico, identificando áreas de mejora y diseñando estrategias de refuerzo adaptadas a sus necesidades individuales. Proporcionamos tutorías, asesoramiento en técnicas de estudio y recursos educativos adicionales para fortalecer sus habilidades de aprendizaje. Nos enfocamos en motivarlos, fomentar su autonomía y promover el gusto por el conocimiento.",
    },
    {
      title: "Fortalecimiento espiritual",
      img: "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853650/f5_d7bnzm.png",
      desc: "Fomentamos valores y fortalecimiento espiritual para niños con propósito y resiliencia.",
      detail: "En nuestro enfoque integral, brindamos fortalecimiento espiritual a los niños vulnerables y en riesgo de deserción escolar. A través de actividades y espacios de reflexión, promovemos valores éticos y principios que les ayuden a desarrollar una sólida base espiritual. Buscamos cultivar un sentido de pertenencia y propósito en sus vidas, incentivando la práctica de valores como la empatía, la solidaridad y la gratitud. Nuestro objetivo es proporcionarles herramientas espirituales que les sirvan de guía y les permitan enfrentar los desafíos cotidianos con resiliencia y optimismo.",

    },
    {
      title: "Actividades lúdico-recreativas",
      img: "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853651/f7_w7ccw2.png",
      desc: "Promovemos el desarrollo infantil mediante actividades lúdicas, recreativas y educativas.",
      detail: "Reconociendo la importancia del juego y la recreación en el desarrollo integral de los niños, organizamos diversas actividades lúdico recreativas. Estas actividades les brindan momentos de esparcimiento, diversión y aprendizaje. Organizamos juegos deportivos, actividades culturales, salidas educativas y otras experiencias enriquecedoras. A través de estas actividades, promovemos la socialización, el trabajo en equipo, la creatividad y la exploración del entorno. Nuestro objetivo es proporcionarles a los niños un ambiente seguro y estimulante donde puedan desarrollar habilidades sociales, descubrir nuevas pasiones y fortalecer su autoconfianza.",
    },
  ];

  const Testimonials = [
    {
      name: "Keler Medina",
      role: "Beneficiario",
      image: "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853650/f8_nsqswc.png",
      testimonialShort:
        "Me siento bien con lo que recibo de la fundacion porque me aporta en el estudio y ha sido de gran apoyo.",
      testimonialComplete:
        "El apoyo recibido no solo cambió mi situación económica, sino también mi perspectiva sobre el futuro.",
      video: "",
    },
    {
      name: "Belkis Macea",
      role: "Benefactor",
      image: "https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853651/f9_tp5a86.png",
      testimonialShort:
        "Lo que más me motiva es contribuir a la felicidad de quienes más lo necesitan y ver el impacto inmediato. Servir desarrolla sensibilidad y bondad, haciendo nuestras acciones más acertadas.",
      testimonialComplete:
        "A través de mis aportes he podido ver historias de superación increíbles. Me motiva ver cómo cada aporte genera esperanza.",
      video: "",
    },
  ];

  // 🔁 Sincroniza modal con URL
  useEffect(() => {
    if (serviceTitle) {
      const decodedTitle = decodeURIComponent(serviceTitle);
      const found = services.find((s) => s.title === decodedTitle);
      if (found) setSelectedService(found);
    } else {
      setSelectedService(null);
    }
  }, [serviceTitle]);

  // 📌 Scroll manual (flechas)
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.9;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // 🔄 Auto-scroll cada 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  // 🧭 Sincroniza scroll visual
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.9;
      container.scrollTo({
        left: scrollAmount * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // 🖱️ Abre modal desde botón
  const handleOpenModal = (service) => {
    const index = services.findIndex((s) => s.title === service.title);
    setSelectedService(service);
    setCurrentModalIndex(index);
    navigate(`/Services/${encodeURIComponent(service.title)}`);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    navigate("/Services");
  };

  const handlePrevService = () => {
    const prevIndex =
      (currentModalIndex - 1 + services.length) % services.length;
    setSelectedService(services[prevIndex]);
    setCurrentModalIndex(prevIndex);
    navigate(`/Services/${encodeURIComponent(services[prevIndex].title)}`);
  };

  const handleNextService = () => {
    const nextIndex = (currentModalIndex + 1) % services.length;
    setSelectedService(services[nextIndex]);
    setCurrentModalIndex(nextIndex);
    navigate(`/Services/${encodeURIComponent(services[nextIndex].title)}`);
  };

  return (
    <div className="relative w-full min-h-screen mx-auto overflow-hidden">
      <WhatsAppButton />

      {/* --- HERO --- */}
      <section className="relative flex items-center justify-center min-h-screen w-full">
        <video
          src="https://res.cloudinary.com/dadlhhv4t/video/upload/f_auto,q_auto,vc_auto,w_1280,h_720,du_6/v1761408759/VideoNuevoHome_dhztu4.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://res.cloudinary.com/dadlhhv4t/video/upload/f_auto,q_auto,w_1280,h_720/VideoNuevoHome_dhztu4.jpg"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl">
          <h1 className="text-[clamp(40px,6vw,80px)] font-bold text-white leading-tight mt-14">
            CONOCE TODOS <br /> NUESTROS <br />
            <span className="text-yellow-400">SERVICIOS</span>
          </h1>

          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <button
              type="button"
              className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105 mt-4"
            >
              Donar
            </button>
          </FadeContent>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="relative w-full h-auto py-16 px-5 overflow-hidden">
        <div ref={ref} className="w-full flex justify-center items-center mb-12">
          {inView && (
            <TextType
              text={[
                "Nuestros servicios",
                "¿Qué ofrecemos?",
                "Nuestras especialidades",
              ]}
              typingSpeed={95}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-white text-[clamp(28px,6vw,60px)] font-bold text-center"
            />
          )}
        </div>

        {/* Flechas */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-10 top-[60%] transform -translate-y-1/2 bg-[#12314D] hover:bg-[#2166a1] text-white p-3 rounded-full shadow-md z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-10 top-[60%] transform -translate-y-1/2 bg-[#12314D] hover:bg-[#2166a1] text-white p-3 rounded-full shadow-md z-20"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden scroll-smooth px-4"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="flex-none w-[90%] sm:w-[45%] lg:w-[30%] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
                <div className="flex w-full h-full justify-center">
                  <FadeContent
                    blur
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenModal(service)}
                      className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105 mt-7"
                    >
                      Ver más
                    </button>
                  </FadeContent>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIOS --- */}
      <section className="relative w-full h-auto py-16 px-5 overflow-hidden bg-[#12314D]">
        <div
          ref={ref}
          className="w-full flex justify-center items-center mb-12 "
        >
          {inView && (
            <TextType
              text={[
                "Testimonios inspiradores",
                "Historias increíbles",
                "Voces de gratitud y esperanza",
              ]}
              typingSpeed={95}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-white text-[clamp(28px,6vw,60px)] font-bold text-center"
            />
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {Testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </section>

      {/* --- MODAL --- */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 md:p-10 text-center transform scale-100 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>

            <button
              onClick={handlePrevService}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNextService}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg z-10"
            >
              <ChevronRight size={24} />
            </button>

            <div className="w-full mb-5">
              <video
                controls
                poster={selectedService.img}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              >
                <source src={selectedService.video} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedService.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {selectedService.detail}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
