import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import Button from './Button';
import MenuLink from './MenuLink';

const NavBar = () => {
    return (
        <main className="pt-5">
            <nav className="flex items-center justify-between h-[70px] bg-[#10111173] w-[100%] rounded-full m-auto p-8 border-gray text-white">
                <div className="flex items-center">
                    <h2 className="text-[14px] font-normal"></h2>
                </div>

                <ul className=" flex items-center gap-8">
                    <li className="text-[14px] text-[#B0B0B0] hover:text-white"><MenuLink to="/" text="Home" /></li>
                    <li className="text-[14px] text-[#B0B0B0] hover:text-white"><MenuLink to="/cryptos" text="Top Coins" /></li>
                    <li className="text-[14px] text-[#B0B0B0] hover:text-white"><MenuLink to="/about" text="About Us" /></li>
                    <li className="text-[14px] text-[#B0B0B0] hover:text-white"><MenuLink to="/legal" text="Legal Terms" /></li>
                </ul>

                <div className="flex items-center gap-5 text-white">
                    <Link href="" className="text-[#B0B0B0] text-[14px]">
                        Log in
                    </Link>
                    <Link href="">
                        <Button text="Sign up" />
                    </Link>
                </div>
            </nav>
        </main>
    );
}

export default NavBar;
