import useFetch from "../../Hooks/useFetch";
import type { Product } from "../../Types/Product";
import ProductCard from "../ProductCard";

const Feataredproduct = () => {
  const { data: dataFetch, error } = useFetch<Product[]>({
    url: "http://localhost:8000/Product",
  });
  return (
    <>
      <section className="w-[100%] h-[60vh] bg-[#1F1F27] border-t border-t-[#8B5CF6] m-auto mt-20 px-5">
        <div
          className="w-[90%] h-[60vh] flex flex-col justify-start items-start gap-5 m-auto"
          data-aos="fade-right"
        >
          <h2 className="underline p-[10px]">Featared Product</h2>
          <div className="size-full flex justify-center items-center gap-8">
            <ProductCard items={dataFetch} error={error} cartBtn={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feataredproduct;
