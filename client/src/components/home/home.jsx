"use client";

import ".//home.css";
import Hero from "../home/hero/heroSection";
import ArticleSection from "../article/articleSetion";
import InfoMercado from ".//cardinfo/infoMercado";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoMercado/>
      <ArticleSection />
    </>
  );
};

export default Home;
