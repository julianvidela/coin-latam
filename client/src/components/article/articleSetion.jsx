import Card from "./cardsData";
import ".//article.css"

const ArticleSection = () => {
    return ( <main className="h-[50rem] md:h-[30rem] lg:h-[35rem] w-full flex flex-col items-center justify-center gap-10 z-1">
        <div className="text-white flex flex-col items-center gap-1 text-center ">
            <h2 className="text-[20px] md:text-[30px] text-[#ADA5FF] font-light">Informacion al momento</h2>
            <p className="text-[var(--color-text-gray)] text-[14px] md:text-[16px] w-[70%]">Todos los datos de las criptos mas importantes del momento</p>

        </div>
        <section className="flex flex-col md:flex md:flex-row gap-2 md:gap-2 justify-center">

        <Card
        title="Rapidez"
        description="Las transaccaciones son inmediatas!"
        imgUrl="/reloj.svg"
        />
        <Card
        title="+10% Inversion Anual"
        description="Las transaccaciones son inmediatas!"
        imgUrl="/inversion.svg"
        />
        <Card
        title="Devolucion Automatica"
        description="Las transaccaciones son inmediatas!"
        imgUrl="/devolucion.svg"
        />
        </section>

    </main> );
}
 
export default ArticleSection;