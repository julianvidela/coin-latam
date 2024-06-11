import Link from "next/link";



const card = () => {
  return (
    <section className=" h-auto w-full border-info-mercado bg-white rounded-xl flex flex-col items-center justify-center mb-4">
      <section className=" h-[300px] lg:h-[250px] flex items-center w-full p-4">
        <div className="w-[90%] h-full m-auto flex flex-col justify-center gap-6 md:gap-4">
          <h2 className="text-[#5A49CC] text-[24px] w-full font-light">
            ¿Que esperás para vivir la experiencia?
          </h2>
          <p className="text-[var(--color-text-black-gray)] w-full text-[16px]">
            sumate a coin latam y explora el mundo cripto
          </p>

          <div className="flex items-center">
            <Link
              className="bg-[#5A49CC] text-white text-[14px] px-3 py-2 rounded-full font-light flex justify-center"
              href="">
              Comienza
            <img src="/flecha-button-blanca.png" alt="icon" className=" w-6 h-6" /> 
             
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};
export default card;
