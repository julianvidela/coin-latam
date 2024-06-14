import Footer from "@/components/footer/footer";
import "./terms.css";
import LegaltermsData from "./legaltermData"

const termsSection = () => {
  return (
    <>
      <section className="flex flex-col gap-4 mt-16 lg:mt-10">
        <div className="flex flex-col gap-4 p-5">
          <p className="text-white">ARGENTINA</p>

          <h2 className="text-[var(--color-text-gray)] uppercase text-3xl font-bold ">
            Legal Terms
          </h2>
        </div>
        <div className="bg-transparent boder-nav  h-[40rem] w-full rounded-lg overflow-hidden ">
            <div className="h-full w-full  overflow-y-auto">
                {LegaltermsData.map((term, index) => (
                    <div className="p-4" key={index}>
                        <h2 className="text-white">{term.title}</h2>
                        <p>{term.content}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <Footer />
    </>
  );
};


export default termsSection;