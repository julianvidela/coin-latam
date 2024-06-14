import Link from "next/link";
import { links } from "../linksData";
import css from ".//navbar.module.css";

const MobileNavLink = () => {
  return (
    <div className="flex flex-col gap-10 pt-10">
      {links.map((link, index) => (
        <Link key={index} href={link.to} className={css.link}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavLink;
