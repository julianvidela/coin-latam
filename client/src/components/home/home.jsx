"use client";

import ".//home.css";
import Hero from "../home/hero/heroSection";
import ArticleSection from "../article/articleSetion";
import InfoMercado from ".//cardinfo/infoMercado";
import CardMobile from "./mobilecard/card"


const Home = () => {
  return (
    <>
    <section className="flex flex-col gap-2">
      <Hero />
      <ArticleSection/>
      <InfoMercado/>
      <CardMobile/>
     
     

    </section>
    </>
  );
};

export default Home;
