"use client"

import Link from "next/link";
import CreditCard from "../creditcard/creditcard";


const InfoMercado = () => {
  return (
    <main className="flex flex-col gap-2 h-auto">
      <h2 className="text-[20px] md:text-[30px] text-white font-light text-center mb-7">
        Descubre el valor de las criptomonedas en tiempo real
      </h2>
      <section className="flex flex-col md:flex-row w-full gap-2 justify-center">
        <section className="h-[500px] md:w-[50%] bg-transparent border-info-mercado rounded-xl flex flex-col justify-center p-4 ">
          <div className="w-[90%]  h-full flex flex-col  justify-center m-auto gap-5">
            <h2 className="text-[#ADA5FF] text-[30px] w-full font-light">
              Criptomonedas al instante en tu moneda local
            </h2>
            <p className="text-[var(--color-text-gray)] w-full text-[16px] font-light">
              convierte criptomonedas en tu moneda local al instante y accede a
              precios actualizados para tomar decisiones fundamentadas en el
              mercado de criptomonedas.
            </p>
            <div className="flex items-center">
              <Link
                className="bg-[#5A49CC] text-white  text-[14px] font-light px-3 py-2 rounded-full flex"
                href=""
              >
                Comienza
                <img src="/flecha-button-blanca.png" alt="icon" className=" w-6 h-6" /> 
              </Link>
            </div>
          </div>
        </section>
        <section className="h-[500px] md:w-[50%] bg-white border-info-mercado rounded-xl flex-col justify-center p-4 ">
          <div className="w-[90%] h-full m-auto flex flex-col justify-center  gap-5">
            <h2 className="text-[#5A49CC] text-[30px] w-full font-light">
              Descubre la nueva forma de seguir el mercado
            </h2>
            <p className="text-[var(--color-text-black-gray)] w-full text-[16px] font-normal">
              consulta precios actualizados y accede a un panel con todas las
              criptomonedas. Disponible en Play Store y Apple Store
            </p>
            <div className="flex items-center">
              <Link
                className="bg-[#ADA5FF] text-white text-[14px] font-light px-3 py-2 rounded-full flex"
                href=""
              >
                Comienza
                <img src="/flecha-button-blanca.png" alt="icon" className=" w-6 h-6" /> 
               
              </Link>
              
            </div>
          </div>
        </section>
      </section>
        <CreditCard/>
    </main>
  );
};

export default InfoMercado;
