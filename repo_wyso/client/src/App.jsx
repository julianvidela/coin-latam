import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoList from "./pages/Coins/CryptoList";
import HomeCard from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import About from "./pages/About/About";
import Background from "./components/ui/background";

function App() {
  return (
    <BrowserRouter>
       <Background/>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeCard />} />
          <Route path="/cryptos" element={<CryptoList />} />
          <Route path="/about" element={<About />} />          
        </Routes>
        
        
    </BrowserRouter>
  );
}

export default App;
