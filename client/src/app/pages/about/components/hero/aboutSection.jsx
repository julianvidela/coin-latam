


const aboutSection = () => {
    return ( <section className="h-[40rem] w-full flex justify-center items-center mb-8">
        <div className="w-[50%] flex flex-col ">
        <h2 className="text-[30px]  md:text-[40px] lg:text-[45px] h-[14rem] w-[60%] md:w-full lg:w-[75%] flex flex-col  font-bold text-white titulo-home">
             EL 
             PORTAL CRIPTO
             <span className="text-[var(--color-text-blue)]">
             NUMERO 1# 
             </span>
             DE LATAM
          </h2>
          <p className="text-[var(--color-text-gray)] text-[14px] w-[70%]">con toda la informacion de los mercados cripto al momento y con <span className="text-white font-bold">datos que se actuliazan al momento
            </span></p>

        </div>
        <div className="w-[50%] flex justify-start">

          <img className="w-[530px] h-[400px]" src="/hero.png" alt="hero about" />
        </div>

    </section> );
}
 
export default aboutSection;