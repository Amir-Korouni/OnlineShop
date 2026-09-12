import { useQuery } from "@tanstack/react-query";
import type { Product } from "../../Types/Product";
import ProductCard from "../ProductCard";

export type ProductResponse = {
  success: boolean;
  data: Product[] | null | undefined;
};

const Feataredproduct = () => {
  const { data, error, isLoading } = useQuery<ProductResponse>({
    queryKey: ["featared"],
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
      <section className="w-[100%] h-[60vh] bg-[#1F1F27] border-t border-t-[#8B5CF6] m-auto mt-20 px-5">
        <div
          className="w-[90%] h-[60vh] flex flex-col justify-start items-start gap-5 m-auto"
          data-aos="fade-right"
        >
          <h2 className="underline p-[10px]">Featared Product</h2>
          <div className="size-full flex justify-center items-center gap-8">
            <ProductCard items={data?.data} error={error} cartBtn={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feataredproduct;
