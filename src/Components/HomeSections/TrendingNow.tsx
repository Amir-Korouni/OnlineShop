import { useQuery } from "@tanstack/react-query";
import ProductCard from "../ProductCard";
import type { ProductResponse } from "./FeataredProduct";

const TrendingNow = () => {
  const { data, error, isLoading } = useQuery<ProductResponse>({
    queryKey: ["Trend"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/products");
      if (!res.ok) {
        throw new Error("Faild to fetch any data.");
      }
      return res.json();
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
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
              items={data?.data}
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
