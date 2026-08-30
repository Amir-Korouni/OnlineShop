import useFetch from "../../Hooks/useFetch";
import type { Products } from "../../Types/Product";
import ProductCard from "../ProductCard";

const TrendingNow = () => {
  const { data: dataFetch, error } = useFetch<Products[]>({
    url: "http://localhost:8000/Product",
  });
  return (
    <>
      <section className="w-[100%] h-[60vh] bg-[#111116] border-t border-t-[#8B5CF6] m-auto px-5">
        <div
          className="w-[90%] h-[60vh] flex flex-col justify-start items-start gap-1 m-auto"
          data-aos="fade-down"
        >
          <h2 className="underline p-[10px]">Trending Now</h2>
          <div className="size-full flex justify-center items-center gap-10">
            <ProductCard items={dataFetch} error={error} cartBtn={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingNow;
