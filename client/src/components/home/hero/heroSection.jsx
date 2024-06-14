"use client";

import Spline from "@splinetool/react-spline";

const hero = () => {
  return (
    <main className="h-[35rem] md:h-[60rem] lg:h-[35rem] w-full justify-center m-auto mt-4 flex flex-col lg:flex-row items-center gap-16 md:gap-6 lg:gap-1">
      <section className="h-[20rem] lg:h-[30rem] w-full flex flex-col bg-[rgba(17, 17, 17, 0.8)] rounded-xl lg:gap-2 p-8 ">
        <div className=" w-[60%] md:w-full flex flex-col justify-center items-center lg:items-start ">
          <h1 className=" text-left md:text-center lg:text-left text-[30px]  md:text-[55px] lg:text-[50px] h-[14rem] w-[45%] md:w-full lg:w-[90%] flex flex-col justify-center font-bold text-white titulo-home">
            ACCEDE AL MUNDO
            <span className="text-[var(--color-text-blue)]"> CRIPTO</span>
          </h1>
        </div>

        <div className="flex flex-col items-center lg:items-start w-full gap-6  lg:w-full">
          <p className=" w-[70%] lg:w-[80%] text-center lg:text-left text-[#B0B0B0] text-[15px] md:text-[16px]">
            Obtén el valor de las criptos más utilizadas al instante y mantente
            al día con el <span className="text-white font-semibold"> mercado en tiempo real.</span>
          </p>
        </div>
      </section>

      <div className="hidden h-[35rem] md:flex md:items-center lg:pt-14">
        <Spline scene="https://prod.spline.design/uPLo2O4YCHePSH-k/scene.splinecode" />
      </div>
    </main>
  );
};

export default hero;
