"use client";

import FlagAndCurrency from "@/components/ui/flagcurrency/flagComponent";
import "./profile.css";
import { signIn, useSession, signOut } from "next-auth/react";
import css from "./profile.module.css";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <div className="w-full flex justify-start">
      {session?.user ? (
        <ul className="navigation hide">
          <li>
            <div className={css.profile_img_wrap}>
              <img src={session.user.image} alt="user avatar" />
            </div>

            <div className= " dropdown__wrapper lg:dropdown__wrapper">
              <div className=" dropdown  lg:dropdown">
                <ul className="list-items-with-description">
                  <li>
                    <div className="flex flex-col gap-1 items-start lg:item-title p-2">
                      <div className="flex gap-3 items-center">
                        <h3 className="text-[12px]">{session.user.name}</h3>
                        <FlagAndCurrency />
                      </div>
                      <p className="text-[13px]">{session.user.email}</p>
                      <button
                        className="text-[var(--color-text-gray)] text-[14px]"
                        onClick={async () => {
                          await signOut({
                            callbackUrl: "/",
                          });
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="text-white rounded-full border-violet text-[14px] py-1 px-4  font-light"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Profile;