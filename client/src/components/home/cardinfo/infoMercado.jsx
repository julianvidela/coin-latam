"use client"

import Link from "next/link";


const InfoMercado = () => {
  return (
    <main className="flex flex-col gap-14 pt-8">
      <h2 className="text-[30px] text-white font-light text-center">
        Descubre el valor de las criptomonedas en tiempo real
      </h2>
      <section className="flex w-full gap-2 justify-center">
        <section className="h-[500px] w-[600px] bg-black border-info-mercado rounded-xl p-4 flex flex-col justify-center ">
          <div className="w-[90%] h-full flex flex-col  justify-center m-auto gap-5">
            <h2 className="text-white text-[30px] w-[85%] font-light">
              Criptomonedas al instante en tu moneda local
            </h2>
            <p className="text-[var(--color-text-gray)] w-[70%] text-[16px]">
              convierte criptomonedas en tu moneda local al instante y accede a
              precios actualizados para tomar decisiones fundamentadas en el
              mercado de criptomonedas.
            </p>
            <div>
              <Link
                className="bg-white text-[14px] font-medium px-3 py-2 rounded-full"
                href=""
              >
                Comienza
              </Link>
            </div>
          </div>
        </section>
        <section className="h-[500px] w-[600px] bg-white border-info-mercado rounded-xl p-4 flex jus ">
          <div className="w-[90%] h-full m-auto flex flex-col justify-center  gap-5">
            <h2 className="text-[var(--color-text-blue)] text-[30px] w-[85%] font-light">
              Descubre la nueva forma de seguir el mercado
            </h2>
            <p className="text-[var(--color-text-gray)] w-[70%] text-[16px]">
              consulta precios actualizados y accede a un panel con todas las
              criptomonedas. Disponible en Play Store y Apple Store
            </p>
            <div>
              <Link
                className="bg-boton text-[var(--color-text-blue)] text-[14px] font-medium px-3 py-2 rounded-full"
                href=""
              >
                Comienza
               
              </Link>
              
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default InfoMercado;
