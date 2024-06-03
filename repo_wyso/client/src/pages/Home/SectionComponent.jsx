import React from "react";

const SectionComponent = ({ children }) => {
  return (
    <section className="h-[35rem] w-[45%] flex flex-col justify-center bg-[rgba(17, 17, 17, 0.8)] rounded-xl gap-10 ml-10 overflow-hidden">
      {children}
    </section>
  );
};

export default SectionComponent;
