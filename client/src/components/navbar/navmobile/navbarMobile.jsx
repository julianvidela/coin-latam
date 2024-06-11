"use client";
import Link from "next/link";
import React, { useState } from "react";
import css from "./navbar.module.css";
import { links } from "../linksData";
import ToggleMenu from "../../ui/hamburguer/toggleMenu";

const NavBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className={css.nav}>
      <div className={css.hamburger_wrapper}>
        <h2 className="text-[10px] font-bold">COINLATAM</h2>
        <button onClick={() => setOpen(!open)}>
        H
        </button>
      </div>

      <div className={css.wrapper} style={{ height: open ? "50px" : "100%" }}>
        {!open && (
          <>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.to}
                className="text-white text-[30px]"
              >
                {link.title}
              </Link>
            ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
