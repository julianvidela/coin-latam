import React from "react";
import { Logo } from "@/components/Logo";

export const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "1000%",
        width: "100%",
        zIndex: "99",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Logo />
      </div>
    </div>
  );
};
