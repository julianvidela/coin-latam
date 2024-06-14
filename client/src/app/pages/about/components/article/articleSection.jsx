

const articleSection = () => {
  return (
    <section className="h-[35rem] md:h-[15rem] flex flex-col justify-center mt-10">
      <div className="flex flex-col w-full h-[30rem] items-center justify-center md:flex-row gap-1  text-white text-center ">
        <div className=" h-[180px] w-full rounded-lg p-3 flex flex-col justify-center md:items-center  gap-2 card-pro">
          <h3 className="text-[20px] font-semibold">Educacion</h3>
          <p className="text-[16px]  text-zinc-400">
            Brindar información básica para que todos puedan acceder.
          </p>
        </div>
        <div className="h-[180px] w-full rounded-lg p-3 flex flex-col justify-center  md:items-center gap-2  card-pro ">
          <h3 className="text-[20px] font-semibold">Acceso</h3>
          <p className="text-[16px] text-zinc-400 ">
            Simplificamos el universo cripto con contenido claro y accesible.
          </p>
        </div>
        <div className=" h-[180px] w-full rounded-lg p-3 flex flex-col justify-center  md:items-center gap-2  card-pro">
          <h3 className="text-[20px]  font-semibold">Innovacion</h3>
          <p className="text-[16px] text-zinc-300 ">
            Comprometidos con la innovacion y la busqueda de soluciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default articleSection;
