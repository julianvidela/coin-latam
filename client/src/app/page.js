
import NavBar from "@/components/navbar/navbar";
import HomeComponent from "../components/home/home";
import Footer from "@/components/footer/footer";



export default function Home() {
  return (
    <main className="">
      <section className="h-full m-auto max-w-[94%] w-[1200px]">

     <NavBar/>
     <HomeComponent/>
     <Footer/>
    

      
      </section>
    </main>
  );
}
