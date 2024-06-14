
import { LoginNavBar } from "@/components/login/LoginNavBar";
import HomeComponent from "../components/home/home";
import Footer from "@/components/footer/footer";
import Profile from "@/components/navbar/profile/profile";

export default function Home() {
  return (
    

    <section className="h-full m-auto max-w-[94%] w-[1200px]">
      <HomeComponent />
      <Footer />
    </section>
   
  );
}
