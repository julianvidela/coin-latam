"use client";
import Link from "next/link";
import { links } from "./linksData";
import NavbarMovile from "./navmobile/navbarMobile";
import Profile from "./profile/profile";

import "./navbar.css";

const NavBar = () => {
  return (
    <main className="m-auto max-w-[94%] w-[1200px] pt-7">
      <nav className="items-center justify-between h-[64px] bg-nav w-[100%] rounded-full m-auto p-6 border-gray text-white hidden lg:flex">
        <div className="flex items-center">
          <h2 className="text-[15px] font-bold">COINLATAM</h2>
        </div>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.title}
              className="text-[15px] text-[#B0B0B0] hover:text-white"
              href={link.to}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <Profile />
        </div>
      </nav>

      {/* Navbar Movile */}
      <div className="flex lg:hidden relative z-50">
        <NavbarMovile />
      </div>
    </main>
  );
};

export default NavBar;
