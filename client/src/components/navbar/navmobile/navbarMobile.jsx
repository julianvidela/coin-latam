"use client";

import React, { useState } from "react";
import css from "./navbar.module.css";
import MobileNav from "./mobilenav";
import Profile from "../profile/profile";
import BurgerMenu from "@/components/ui/hamburguer/toggleMenu";

const NavBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className={css.nav}>
      <div className={css.hamburger_wrapper}>
        <h2 className="text-[16px] font-bold">COINLATAM</h2>
        <div className="flex items-center gap-5">
        

        <BurgerMenu toggle={() => setOpen(!open)} />
        </div>
      </div>

      <div className={css.wrapper} style={{ height: open ? "65px" : "100%" }}>
        {!open && (
          <div className="overflow-hidden w-full h-full flex flex-col justify-around px-5 ">
            <MobileNav />
            <div className="w-full flex flex-col gap-5">
              <hr className={css.hr_color} />
              <div className="flex items-center h-full pt-5 text-white">
                <Profile/>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
