"use client";
import "./integrantes.css";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { integrantes } from "./integrantes";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla  h-[20rem] w-full flex flex-col items-center">
      <section>
        
        <div className="embla__viewport h-72  w-[60rem]" ref={emblaRef}>
          <div className="embla__container h-full text-white rounded-lg flex gap-1 ">
            {integrantes.map((integrante) => (
              <div className="w-52 embla__slide  flex flex-col justify-center items-center">
                <img
                  className="w-28 rounded-full mt-4"
                  src={integrante.imagen}
                  alt={integrante.nombre}
                />
                <div className="p-4 text-center">
                  <div className="font-normal text-[16px] mb-1 text-white p-2 ">
                    {integrante.nombre}
                  </div>
                  <div className="flex gap-2 justify-center">
                    <p className="text-[--color-text-gray] text-[16px] text-base lowercase">
                      {integrante.equipo}
                    </p>

                    <a
                      href={integrante.link}
                      className="bg-white text-center w-auto rounded-full font-medium text-black lg:w-auto duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
