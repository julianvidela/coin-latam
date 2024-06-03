"use client"

import Spline from '@splinetool/react-spline';


const hero = () => {
    return ( 
        <main className="h-[40rem] w-full m-auto mt-10 flex justify-around gap-16">
        <section className="h-[35rem] w-[50%] flex flex-col justify-center bg-[rgba(17, 17, 17, 0.8)] rounded-xl  gap-10  ">
          <div>
            <h1 className="text-[65px] h-[16rem] w-[75%] font-normal text-white titulo-home">
              protect your savings with
               <span className="text-[var(--color-text-blue)]"> cryptocurrencies</span>
            </h1>
          </div>
  
          <div className="flex flex-col gap-6">
            <p className="text-[#B0B0B0] text-[14px]">
              Sientete seguro en depositar tu dinero con nosotros, tranqui que va.
              Y no te vamos a estafar, vos no te precoupes que después te
              devolvemos el dinero
            </p>
  
            <div className="flex gap-2">
              <a href="">
                <img
                  src="/applestore.webp"
                  alt="apple store logo"
                  className="h-[52px] w-auto"
                />
              </a>
              <a href="">
                <img
                  src="/playstore.webp"
                  alt="apple store logo"
                  className="h-[52px] w-auto"
                />
              </a>
            </div>
          </div>
        </section>
  
        <div className="w-[50%] h-[35rem] flex justify-center items-center">
        
        <Spline scene="https://prod.spline.design/uPLo2O4YCHePSH-k/scene.splinecode" />
       
        </div>
      </main>
     );
}
 
export default hero;