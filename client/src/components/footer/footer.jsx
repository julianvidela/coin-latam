"use client";
import ".//footer.css";
import { links } from "../navbar/linksData";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-transparent border-footer h-[20rem] flex justify-around flex-col mt-4">
      <section className="flex">
        <section className="w-full flex justify-center ">
          <div className=" flex flex-col text-left gap-5 ">
            <h2 className="text-[15px] text-[#ADA5FF]">Empresa</h2>
            {links.map((link, index) => (
              <Link
                key={index}
                className="text-[14px] text-[var(--color-text-gray)]  hover:text-white"
                href={link.to}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </section>
        <section className="w-full flex justify-center">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <a href="">
                <img
                  src="/applestore.webp"
                  alt="apple store logo"
                  className="h-[42px] w-auto"
                />
              </a>
              <a href="">
                <img
                  src="/playstore.webp"
                  alt="play store logo"
                  className="h-[40px] w-auto"
                />
              </a>
            </div>
          </div>
        </section>
      </section>
      <div className="text-[14px] text-[var(--color-text-gray)] text-center mt-5 ">
        <p>© 2024 Coin latam</p>
      </div>
    </footer>
  );
};

export default Footer;
