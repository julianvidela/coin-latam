import Card from "./cardsData";
import ".//article.css"

const ArticleSection = () => {
    return ( <main className="h-[35rem] w-full flex flex-col items-center justify-center gap-24 pt-8">
        <div className="text-white flex flex-col items-center gap-2 ">
            <p className="text-[30px]">👨🏻‍🚀</p>
            <h2 className="text-[35px] text-[var(--color-text-blue)] font-light">Informacion al momento</h2>
            <p className="text-[var(--color-text-gray)] text-[17px]">Todos los datos de las criptos mas importantes del momento</p>

        </div>
        <section className="flex gap-5 justify-center">

        <Card
        title="Rapidez"
        description="Las transaccaciones son inmediatas!"
        imgUrl="/reloj.png"
        />
        <Card
        title="+10% Iniversion Anual"
        description="Las transaccaciones son inmediatas!"
        imgUrl="/casita.png"
        />
        <Card
        title="Devolucion Automatica"
        description="Las transaccaciones son inmediatas!"
        imgUrl="/devolucion.png"
        />
        </section>

    </main> );
}
 
export default ArticleSection;