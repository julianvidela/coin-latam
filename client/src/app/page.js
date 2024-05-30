
import HomeCard from "../components/home/homeCard";
import NavBar from "../components/navbar/navbar";
import ArticleSection from "@/components/article/articleSetion";

export default function Home() {
  return (
   <main className="gradient">
    <section className="h-screen m-auto max-w-[90%] w-[1300px]">

    <NavBar/>
    <HomeCard/>
    <ArticleSection/>
    
    </section>

   </main>
  );
}
