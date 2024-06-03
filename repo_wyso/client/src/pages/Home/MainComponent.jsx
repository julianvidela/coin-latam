import React from "react";

const MainComponent = ({ children }) => {
  return <main className="h-[45rem] w-full m-auto mt-20 flex justify-around">{children}</main>;
};

export default MainComponent;
