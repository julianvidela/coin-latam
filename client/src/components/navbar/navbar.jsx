"use client";
import Link from "next/link";
import NavbarMovile from "./navmobile/navbarMobile";
import "./navbar.css";

const NavBar = () => {
  return (
    <main className="pt-7">
      <nav className="items-center justify-between h-[70px] bg-[var(--color-gray-black)] w-[100%] rounded-full m-auto p-8 border-gray text-white hidden lg:flex">
        <div className="flex items-center">
          <h2 className="text-[20px] font-bold">COINLATAM</h2>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="menu__link text-[14px] text-[#B0B0B0] hover:text-white"
          >
            home
          </Link>
          <Link
            href="/coins"
            className="menu__link text-[14px] text-[#B0B0B0] hover:text-white"
          >
            coins
          </Link>
          <Link
            href="/about"
            className="menu__link text-[14px] text-[#B0B0B0] hover:text-white"
          >
            about us
          </Link>
          <Link
            href="/legal"
            className="menu__link text-[14px] text-[#B0B0B0] hover:text-white"
          >
            legal Terms
          </Link>
        </div>
        <div className="flex items-center gap-5 text-white">
          <Link href="" className="text-[#B0B0B0] text-[14px]">
            Log in
          </Link>
          <Link
            href=""
            className="bg-[#0B0B0B] text-[14px] py-1 px-4 rounded-full border-violet font-light"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Navbar Movile */}
      <div className="flex lg:hidden relative">
        <NavbarMovile />
      </div>
    </main>
  );
};

export default NavBar;
