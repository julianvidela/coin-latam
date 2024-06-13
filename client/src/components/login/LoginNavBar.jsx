"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { getIpInfo } from "@/helpers/getIpInfo";

export const LoginNavBar = () => {
  const { data: session } = useSession();
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  // para obtener la bandera y la moneda del usuario
  const [data, setData] = useState({ currency: "USD", flag: null });

  const getFlagAndCurrency = async () => {
    const data = await getIpInfo();
    setData({ flag: data.flag, currency: data.currency.code });
  };

  useEffect(() => {
    getFlagAndCurrency();
  }, []);

  return (
    <div>
      {isNavVisible && (
        <nav className="absolute w-full bg-slate-900 bg-opacity-90 flex items-center py-3 justify-between px-24 text-white">
          <Link href="/">
            <h1>Barra Solo para testear Login y Regionalidad.</h1>
          </Link>
          <button onClick={toggleNavVisibility}>OCULTAR</button>
          {session?.user ? (
            <div className="flex gap-x-6 items-center">
              <p>{data ? <p>{data.currency} $</p> : "cargando..."}</p>
              <img src={data.flag} alt={"flag"} className="w-10 h-6" />
              <p>
                {session.user.name} {session.user.email}
              </p>
              <img
                src={session.user.image}
                alt=""
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <button
                onClick={async () => {
                  await signOut({
                    callbackUrl: "/",
                  });
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="px-3 py-2 border-2 text-white border-gray-600 rounded-3xl"
            >
              Sign In
            </button>
          )}
        </nav>
      )}
    </div>
  );
};
