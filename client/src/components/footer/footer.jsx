"use client";
import "./footer.css";
import { links } from "../navbar/linksData";
import Link from "next/link";
import FlagAndCurrency from "../ui/flagcurrency/flagComponent";

const Footer = () => {
  return (
    <footer className="bg-transparent border-footer h-[8rem] flex justify-around flex-col mt-4">
      <section className="flex">
        <section className="w-full flex justify-center">
          <div className="flex text-left gap-5">
            
            {links.map((link, index) => (
              <Link
                key={index}
                className="text-[14px] text-[var(--color-text-gray)] hover:text-white"
                href={link.to}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </section>
      </section>
      <div className="text-[14px] text-[var(--color-text-gray)] text-center mt-5">
        <p>© 2024 Coin Latam</p>
      </div>
    </footer>
  );
};

export default Footer;

