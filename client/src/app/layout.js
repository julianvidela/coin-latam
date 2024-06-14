"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/ui/backGround";
import NavBar from "@/components/navbar/navbar";
import { Providers } from "./Providers";
import { useState, useEffect } from "react";
import { Loader } from ".//.//../components/ui/loader/loader"; 
import { metadata } from "./metadata"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    
    window.addEventListener("load", handleLoad);

   
    return () => window.removeEventListener("load", handleLoad);
  }, []);

    useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className}`}>
        {loading && <Loader />}
        <div style={{ display: loading ? "none" : "block" }}>
          <Providers>
            <Background />
            <NavBar />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
