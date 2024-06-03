
import HomeComponent from "../components/home/home";
import NavBar from "../components/navbar/navbar";


export default function Home() {
  return (
   <main className="gradient">
    <section className="h-screen m-auto max-w-[90%] w-[1200px]">

    <NavBar/>
    <HomeComponent/>
    
    
    
    </section>

   </main>
  );
}
