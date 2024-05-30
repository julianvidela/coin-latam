"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import ".//home.css";

const HomeCard = () => {
  return (
    <main className="h-[45rem] w-full m-auto mt-20 flex justify-around">
      <section className="h-[35rem] w-[50%] flex flex-col justify-center bg-[rgba(17, 17, 17, 0.8)] rounded-xl  gap-10 ml-10 ">
        <div>
          <h1 className="text-[65px] h-[16rem] w-[75%] font-normal text-white titulo-home">
            protect your savings with
             <span className="text-[#6842FF]"> cryptocurrencies</span>
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

      <section className="w-[50%] h-[35rem] flex justify-center items-center">
        <Spline scene="https://prod.spline.design/uPLo2O4YCHePSH-k/scene.splinecode" />
      </section>
    </main>
  );
};

export default HomeCard;
