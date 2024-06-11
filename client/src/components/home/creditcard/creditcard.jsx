import Link from "next/link";
import Spline from "@splinetool/react-spline";

const creditCard = () => {
  return (
    <main className="h-auto">
      <section className="h-[510px] md:h-[300px] lg:h-[470px] w-full border-info-mercado rounded-xl flex flex-col lg:flex-row items-center justify-center ">
        <section className="flex items-center justify-center w-full p-4">
          <div className="w-[90%] h-full m-auto flex flex-col justify-center gap-6">
            <h2 className="text-[#ADA5FF] text-[30px] w-full font-light">
              Proximamente el acceso a la compra y venta de criptomonedas
            </h2>
            <p className="text-[var(--color-text-gray)] w-full text-[16px]">
              consulta precios actualizados y accede a un panel con todas las
              criptomonedas. Disponible en Play Store y Apple Store
            </p>
          </div>
        </section>

        <section className="hidden lg:flex justify-center">
          <div className="w-full">

          <Spline scene="https://prod.spline.design/wp0mtJ-NzcpRhgpP/scene.splinecode"></Spline>
          </div>
        </section>
      </section>
    </main>
  );
};

export default creditCard;
