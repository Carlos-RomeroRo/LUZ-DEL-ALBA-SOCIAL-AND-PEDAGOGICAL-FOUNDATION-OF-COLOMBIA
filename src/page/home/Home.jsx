import '../../components/navbar/navBar'


export default function Home() {
    return (
        <div class="relative w-[97%] bg-white/20 h-[600px] mx-auto rounded-b-2xl">
              <div className='flex justify-start w-full h-full pt-30'>
                {/*Sections of hero */}
                <section className="flex flex-col justify-start h-full w-2/4">
                  <div className="flex flex-col h-full w-full py-14 items-center">
                    <h1 className="text-[clamp(30px,3vw,80px)] font-sofia text-black font-bold text-center leading-tight">
                      FUNDACIÓN SOCIAL <br /> Y PEDAGÓGICA <br /> DE COLOMBIA <br /> LUZ DEL ALBA
                    </h1>
                    <p className='mt-4 max-w-2xl text-center text-white text-wrap text-[clamp(13px,2vw,20px)] font-semibold'>La Fundación Social y Pedagógica de Colombia Luz del Alba es una entidad sin ánimo de lucro que busca reconstruir el tejido social mediante convenios con instituciones educativas en El Copey, beneficiando a personas en estado de abandono y vulnerabilidad.</p>
                    
                    <button type="button" className="mt-6 text-white  bg-[#12314D] hover:bg-[#0f263d] focus:outline-none focus:ring-4 focus:ring-[#12314D]/50 font-semibold rounded-full text-3xl px-8 py-2 text-center mb-2">
                            Donar
                    </button>
                  </div>
                </section>
              </div>


        </div>

  );
}