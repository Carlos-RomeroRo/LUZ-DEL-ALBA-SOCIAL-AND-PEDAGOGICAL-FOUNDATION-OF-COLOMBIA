import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';
import AnimatedContent from "../../components/animations/animateComponents/animatedContent/animatedContent";
import FadeContent from '../../components/animations/animateComponents/fadeContent/fadeContent';
import Particles from '../../components/animations/background/particles/particles';
import BlurText from '../../components/animations/text/blurText/blurText';
import TextType from '../../components/animations/text/textType/textType';
import CarouselTransition from "../../components/carousel/CarouselTransition";
import '../../components/navbar/navBar';
import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";


export default function Home() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se ejecuta una vez
    threshold: 0.2, // Se activa cuando el 30% del elemento es visible
  });
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 4800);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="relative w-full min-h-screen mx-auto overflow-hidden">
      <WhatsAppButton></WhatsAppButton>
      <section className="relative flex items-center justify-center min-h-screen w-full"> {/* First section */}
        {/* Video de fondo */}
        <video
          src="https://res.cloudinary.com/dadlhhv4t/video/upload/f_auto,q_auto,vc_auto,w_1280,h_720,du_6/v1760115468/Video_Services_jebd3o.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://res.cloudinary.com/dadlhhv4t/video/upload/f_auto,q_auto,w_1280,h_720/Video_Services_jebd3o.jpg"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />


        {/* Capa oscura */} 
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl">
          <h1 className="text-[clamp(28px,6vw,60px)] font-bold text-white leading-tight mt-14">
            FUNDACIÓN SOCIAL <br /> Y PEDAGÓGICA <br /> DE COLOMBIA <br /> 
            <span className="text-yellow-400">LUZ DEL ALBA</span>
          </h1>

          <BlurText
            text="La Fundación Social y Pedagógica de Colombia Luz del Alba es una entidad sin ánimo de lucro que busca reconstruir el tejido social mediante convenios con instituciones educativas en El Copey, beneficiando a personas en estado de abandono y vulnerabilidad."
            className="mt-4 text-white text-[clamp(14px,2vw,20px)] font-medium leading-relaxed max-w-3xl justify-center aling-middle"
            onAnimationEnd={() => setShowButton(true)}
          />
          {showButton && (
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div>
                <button
                  type="button"
                  className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105 mt-4"
                >
                  Donar
                </button>
              </div>
            </FadeContent>
          )}

          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={5}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={5}
          >
              <div className=" flex flex-col items-center mt-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-12 h-12 stroke-white animate-bounce"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                  </svg>
                </div>
          </AnimatedContent>
        </div>

      </section>
      
        <section className='relative w-full h-auto py-10 px-5 overflow-hidden'> {/* Second section */}
          {/* Fondo animado */}
          <div className="absolute w-full h-full inset-0 -z-10">
            <Particles
              particleColors={['#12314D']}
              particleCount={800}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={150}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>


          <div ref={ref} className="w-full flex justify-center items-center">
            {inView && (
              <TextType
                text={["Nuestros servicios","¿Qué ofrecemos?","Nuestras especialidades"]}
                typingSpeed={95}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-white text-[clamp(25px,5.8vw,60px)] font-bold text-center"
              />
            )}
          </div>
          
          <div className="flex flex-wrap justify-center pt-12 gap-8 w-full">
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="w-full max-w-[24rem] h-auto bg-[#12314D] rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer shadow-lg">
                {/* Imagen superior */}
                <img
                  src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg"
                  alt="Acompañamiento social"
                  className="w-full aspect-[4/3] object-cover object-center block"
                />

                {/* Contenido */}
                <div className="p-6 text-white">
                  <h3 className="flex text-xl font-semibold mb-4 justify-center ">
                    Acompañamiento social
                  </h3>

                  <div className="flex justify-center">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-[#fff] font-semibold px-6 py-2 rounded-full transition" onClick={() => navigate("/Services/Acompañamiento%20social")}>
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
          </FadeContent>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="w-full max-w-[24rem] h-auto bg-[#12314D] rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer shadow-lg">
                {/* Imagen superior */}
                <img
                  src="https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg"
                  alt="Asesorías enfocadas a familias"
                  className="w-full aspect-[4/3] object-cover object-center block"
                />

                {/* Contenido */}
                <div className="p-6 text-white">
                  <h3 className="flex text-xl font-semibold mb-4 justify-center ">
                    Asesorías enfocadas a familias
                  </h3>

                  <div className="flex justify-center">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-[#fff] font-semibold px-6 py-2 rounded-full transition"
                    onClick={() => navigate("/Services/Asesorías%20enfocadas%20a%20familias")}>
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
          </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="w-full max-w-[24rem] h-auto bg-[#12314D] rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer shadow-lg">
                {/* Imagen superior */}
                <img
                  src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg"
                  alt="Seguimiento pedagógico"
                  className="w-full aspect-[4/3] object-cover object-center block"
                />

                {/* Contenido */}
                <div className="p-6 text-white">
                  <h3 className="flex text-xl font-semibold mb-4 justify-center ">
                    Seguimiento pedagógico
                  </h3>

                  <div className="flex justify-center">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-[#fff] font-semibold px-6 py-2 rounded-full transition"
                    onClick={() => navigate("/Services/Seguimiento%20pedagógico")}>
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
          </FadeContent>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="w-full max-w-[24rem] h-auto bg-[#12314D] rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer shadow-lg">
                {/* Imagen superior */}
                <img
                  src="https://res.cloudinary.com/dadlhhv4t/image/upload/v1761407174/Jesus_con_ni%C3%B1os_irp7ll.png"
                  alt="Fortalecimiento espiritual"
                  className="w-full aspect-[4/3] object-cover object-center block"
                />

                {/* Contenido */}
                <div className="p-6 text-white">
                  <h3 className="flex text-xl font-semibold mb-4 justify-center ">
                    Fortalecimiento espiritual
                  </h3>

                  <div className="flex justify-center">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-[#fff] font-semibold px-6 py-2 rounded-full transition"
                    onClick={() => navigate("/Services/Fortalecimiento%20espiritual")}>
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
          </FadeContent>

          


          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="w-full max-w-[24rem] h-auto bg-[#12314D] rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer shadow-lg">
                {/* Imagen superior */}
                <img
                  src="https://images.pexels.com/photos/1449934/pexels-photo-1449934.jpeg"
                  alt="Actividades lúdico-recreativas"
                  className="w-full aspect-[4/3] object-cover object-center block"
                />

                {/* Contenido */}
                <div className="p-6 text-white">
                  <h3 className="flex text-xl font-semibold mb-4 justify-center ">
                    Actividades lúdico-recreativas
                  </h3>

                  <div className="flex justify-center">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-[#fff] font-semibold px-6 py-2 rounded-full transition"
                    onClick={() => navigate("/Services/Actividades%20lúdico-recreativas")}>
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
          </FadeContent>
        </div>


        </section>

        <section className="relative flex min-h-screen w-full bg-black">
        {/* Carrusel en el fondo */}
        <div className="absolute inset-0 z-0">
          <CarouselTransition />
        </div>

        {/* Texto y botón encima */}
        <div className="absolute inset-0 z-30 flex flex-col justify-center items-center pb-14 text-center">
          <BlurText
            text="¡Haz la diferencia hoy!"
            className="text-white font-bold mb-4 text-[clamp(35px,3vw,50px)] justify-center px-8"
            onAnimationEnd={() => setShowButton(true)}
          />

          {inView && (
            <BlurText
              text="Con tu apoyo, podemos seguir transformando vidas y construyendo un futuro mejor para los niños y jóvenes en situación de vulnerabilidad. ¡Únete a nuestra causa y sé parte del cambio!"
                            className="text-white text-[clamp(15px,1.8vw,25px)] font-bold leading-tight max-w-4xl md:px-7 sm:px-12 px-10 justify-center items-center"
              onAnimationEnd={() => setShowButton(true)}
            />
          )}

          {showButton && (
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <button
                type="button"
                className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105 mt-7"
              >
                ¿Cómo ayudar?
              </button>
            </FadeContent>
          )}
        </div>
      </section>
     <section className="flex flex-col md:flex-row w-full h-auto bg-[#12314D] py-10 px-6">
      {/* Columna izquierda: texto */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-white text-center font-bold mb-4 text-[clamp(35px,4vw,70px)]">
          Conoce Nuestra <br /> Misión
        </h1>
        <p className="text-white text-[clamp(20px,1.8vw,25px)] font-light leading-tight max-w-2xl text-center">
          Descubre cómo trabajamos para transformar vidas y reconstruir comunidades.
          ¡Conoce nuestra historia y únete a este propósito!
        </p>

        {/* 🔹 Botón visible solo en pantallas grandes */}
        <button
          type="button"
          className="hidden lg:block text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105 mt-7"
        >
          Más de nosotros
        </button>
      </div>

      {/* Columna derecha: imagen */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <img
          src="https://res.cloudinary.com/dadlhhv4t/image/upload/v1759853647/f21_ougpj6.png"
          alt="Nuestra misión"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />

        {/* 🔹 Botón visible solo en pantallas pequeñas */}
        <button
          type="button"
          className="block lg:hidden text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105 mt-7"
        >
          Más de nosotros
        </button>
      </div>
    </section>




    </div>
  );
}
