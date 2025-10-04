import '../../components/navbar/navBar'
import { Card } from "flowbite-react";


export default function Home() {
  return (
    <div className="relative w-full min-h-screen mx-auto ">
      <section className="relative flex items-center justify-center min-h-screen w-full">
        {/* Video de fondo */}
        <video
          src="https://videocdn.cdnpk.net/videos/3de5ee2b-160f-41ae-bfb5-8383895e6d15/horizontal/previews/clear/large.mp4?token=exp=1759335028~hmac=eae8d46272de77f5eca40fe3dde2d7edf5a2adde1c3d780e798fa958ba0d23a2"
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

          <p className="mt-4 text-white text-[clamp(14px,2vw,20px)] font-medium">
            La Fundación Social y Pedagógica de Colombia Luz del Alba es una entidad sin ánimo de lucro 
            que busca reconstruir el tejido social mediante convenios con instituciones educativas en El Copey, 
            beneficiando a personas en estado de abandono y vulnerabilidad.
          </p>

          <button
            type="button"
            className="mt-6 text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-semibold rounded-full text-lg px-8 py-3 transition-transform transform hover:scale-105"
          >
            Donar
          </button>
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
        </div>
      </section>
        <section className='w-full h-auto py-10 px-5 overflow-hidden'>
          <h1 className='flex justify-center align-middle text-white text-[clamp(28px,6vw,60px)] font-bold'>NUESTROS SERVICIOS</h1>
          <div className="flex flex-wrap justify-center pt-12 gap-8">
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

            <Card className="max-w-sm bg-[#12314D] rounded-lg overflow-hidden  transition-transform transform hover:scale-105 cursor-pointer">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/208216/pexels-photo-208216.jpeg"
                alt="Jornada de fortalecimiento espiritual"
              />
              <div className="p-4">
                <h5 className="text-2xl font-bold text-white text-center">
                  Jornada de fortalecimiento espiritual
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

            
              
          </div>
        </section>
    </div>
  );
}
