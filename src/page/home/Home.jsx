import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimatedContent from "../../components/animations/animateComponents/animatedContent/animatedContent";
import FadeContent from '../../components/animations/animateComponents/fadeContent/fadeContent';
import Particles from '../../components/animations/background/particles/particles';
import BlurText from '../../components/animations/text/blurText/blurText';
import TextType from '../../components/animations/text/textType/textType';
import '../../components/navbar/navBar';


export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se ejecuta una vez
    threshold: 0.3, // Se activa cuando el 30% del elemento es visible
  });
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 4800);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="relative w-full min-h-screen mx-auto overflow-hidden">
      <section className="relative flex items-center justify-center min-h-screen w-full">
        {/* Video de fondo */}
        <video
          src="https://res.cloudinary.com/dadlhhv4t/video/upload/v1759612863/Ni%C3%B1os_jugando_Luz_del_Alba_co7wmr.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        ></video>

        {/* Capa oscura */} 
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

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
      
        <section className='relative w-full h-auto py-10 px-5 overflow-hidden'> 
          {/* Fondo animado */}
          <div className="absolute inset-0 -z-10">
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
                className="text-white text-[clamp(28px,6vw,60px)] font-bold text-center"
              />
            )}
          </div>
          
          <div className="flex flex-wrap justify-center pt-12 gap-8">
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <Card className="max-w-sm bg-[#12314D] rounded-lg overflow-hidden  transition-transform transform hover:scale-105 cursor-pointer">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg"
                  alt="Acompañamiento social"
                />
                <div className="p-4">
                  <h5 className="text-2xl font-bold text-white text-center">
                    Acompañamiento social
                  </h5>
                </div>
                <div className='flex flex-grow justify-center align-middle mb-4'>
                <button
                  type="button"
                  className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105"
                >
                  Ver más
                </button>
                </div>
              </Card>
            </FadeContent>
            
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <Card className="max-w-sm bg-[#12314D] rounded-lg overflow-hidden  transition-transform transform hover:scale-105 cursor-pointer">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg"
                    alt="Asesorías enfocadas a familias"
                  />
                  <div className="p-4">
                    <h5 className="text-2xl font-bold text-white text-center">
                      Asesorías enfocadas a familias
                    </h5>
                  </div>
                  <div className='flex flex-grow  justify-center align-middle mb-4'>
                  <button
                    type="button"
                    className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105"
                  >
                    Ver más
                  </button>
                  </div>
                </Card>
            </FadeContent>
            
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                 <Card className="max-w-sm bg-[#12314D] rounded-lg overflow-hidden  transition-transform transform hover:scale-105 cursor-pointer">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg"
                    alt="Seguimiento pedagógico"
                  />
                  <div className="p-4">
                    <h5 className="text-2xl font-bold text-white text-center">
                      Seguimiento pedagógico
                    </h5>
                  </div>
                  <div className='flex flex-grow justify-center align-middle mb-4'>
                  <button
                    type="button"
                    className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105"
                  >
                    Ver más
                  </button>
                  </div>
                </Card>
            </FadeContent>
           
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <Card className="max-w-sm bg-[#12314D] rounded-lg overflow-hidden  transition-transform transform hover:scale-105 cursor-pointer">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/208216/pexels-photo-208216.jpeg"
                    alt="Jornada de fortalecimiento espiritual"
                  />
                  <div className="p-4">
                    <h5 className="text-2xl font-bold text-white text-center">
                      Fortalecimiento espiritual
                    </h5>
                  </div>
                  <div className='flex flex-grow justify-center align-middle mb-4'>
                  <button
                    type="button"
                    className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105"
                  >
                    Ver más
                  </button>
                  </div>
                </Card>
            </FadeContent>
            
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <Card className="max-w-sm bg-[#12314D] rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/1449934/pexels-photo-1449934.jpeg"
                    alt="Actividades lúdico-recreativas"
                  />
                  <div className="p-4">
                    <h5 className="text-2xl font-bold text-white text-center">
                      Actividades <br />lúdico-recreativas
                    </h5>
                  </div>
                  <div className='flex flex-grow justify-center align-middle mb-4'>
                  <button
                    type="button"
                    className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105"
                  >
                    Ver más
                  </button>
                  </div>
                </Card>
            </FadeContent>
                
            
                
          </div>
        </section>
    </div>
  );
}
