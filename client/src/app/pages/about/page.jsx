import TimelineSection from "./components/timeline/TimelineSection";
import Card from "./components/article/articleSection";
import Footer from "@/components/footer/footer";
import AboutSection from "./components/hero/aboutSection";
import ArticleSection from "@/components/article/articleSetion";
import Integrantes from "./components/integrantes/integrantesSection"


const about = () => {
  return (
    <section className="h-full m-auto max-w-[94%] w-[1200px] flex flex-col gap-10">
      <AboutSection />
      
      <Card />
      <TimelineSection />

      <Integrantes/>

      <Footer />
    </section>
  );
};

export default about;
