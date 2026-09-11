import useFetch from "../../Hooks/useFetch";
import ProductCard from "../ProductCard";
import type { ProductResponse } from "./FeataredProduct";

const TrendingNow = () => {
  const { data: dataFetch, error } = useFetch<ProductResponse>({
    url: "http://localhost:4000/products",
  });
  return (
    <>
      <section className="w-[100%] h-[60vh] bg-[#111116] border-t border-t-[#8B5CF6] m-auto px-5">
        <div
          className="w-[90%] h-[60vh] flex flex-col justify-start items-start gap-1 m-auto"
          data-aos="fade-down"
        >
          <h3 className="text-zinc-100 text-2xl underline p-[10px]">
            Trending Now
          </h3>
          <div className="size-full flex justify-center items-center gap-10">
            <ProductCard
              items={dataFetch?.data}
              error={error}
              cartBtn={true}
              badgeState={true}
              badge={"New"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingNow;
