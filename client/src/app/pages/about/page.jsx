import TimelineSection from "./components/timeline/TimelineSection";
import ArticleSection from "./components/article/articleSection";
import Footer from "@/components/footer/footer";
import AboutSection from "./components/about/aboutSection";
const about = () => {
    return (
        <section className="h-full m-auto max-w-[94%] w-[1200px]">
            <AboutSection/>

            <ArticleSection/>
            <TimelineSection/>
            <Footer/>

           

        </section>
    );
}

export default about;