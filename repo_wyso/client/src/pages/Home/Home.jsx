import React from "react";
import "./Home.css";
import Spline from '@splinetool/react-spline';
import MainComponent from './MainComponent';
import SectionComponent from './SectionComponent';

const HomeCard = () => {
    return (
        <MainComponent>
            <SectionComponent>
                <div>
                    <h1 className="text-[65px] h-[16rem] w-[75%] font-normal text-white titulo-home">
                        protect your savings with
                        <span className="text-[#6842FF]"> cryptocurrencies</span>
                    </h1>
                </div>

                <div className="flex flex-col gap-6">
                    <p className="text-[#B0B0B0] text-[14px]">
                        Sientete seguro en depositar tu dinero con nosotros, tranqui que va.
                        Y no te vamos a estafar, vos no te preocupes que después te
                        devolvemos el dinero.
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
                                alt="play store logo"
                                className="h-[52px] w-auto"
                            />
                        </a>
                    </div>
                </div>
            </SectionComponent>

            <section className="w-[756px] h-[673px] center">
                <Spline 
                    scene="https://prod.spline.design/uPLo2O4YCHePSH-k/scene.splinecode"
             
                />
            </section>
        </MainComponent>
    );
};

export default HomeCard;
