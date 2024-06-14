"use client";
import FlagAndCurrency from "@/components/ui/flagcurrency/flagComponent";
import "./profile.css";
import { signIn, useSession, signOut } from "next-auth/react";
const Profile = () => {
  const { data: session } = useSession();
  return (
    <div className="">
      {session?.user ? (
        <ul className="navigation hide">
          <li className="">
           
              <img
                src={session.user.image}
                alt="user avatar"
                className="w-6 h-6 md:w-7 md:h-7 rounded-full"
              />
         

            <div className="dropdown__wrapper">
              <div className="dropdown">
                <ul className="list-items-with-description">
                  <li>
                    <div className="item-title flex flex-col gap-2 items-start p-2">
                      <div className="flex gap-2 items-center">
                      <h3 className="text-[12px]">{session.user.name}</h3>
                      <FlagAndCurrency/>

                      </div>
                      <p>{session.user.email}</p>
                      <button
                        className="text-white text-[14px]"
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
