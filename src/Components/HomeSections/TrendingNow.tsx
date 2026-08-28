import useFetch from "../../Hooks/useFetch";
import type { Products } from "../../Types/Product";

const TrendingNow = () => {
  const { data: dataFetch, error } = useFetch<Products[]>({
    url: "http://localhost:8000/Product",
  });
  return (
    <>
      <section className="w-[100%] h-[60vh] bg-[#111116] border-t border-t-[#8B5CF6] m-auto px-5">
        <div
          className="w-[70%] h-[60vh] flex flex-col justify-start items-start gap-5 m-auto"
          data-aos="fade-down"
        >
          <h2 className="underline p-[10px]">Trending Now</h2>
          <div className="size-full flex justify-center items-center gap-20">
            {dataFetch?.map((item) => (
              <article
                className="w-[250px] h-[350px] flex flex-col justify-center items-center gap-2 bg-[#1F1F27] border border-[#8B5CF6] rounded duration-300 hover:translate-y-[-10px]"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[150px] h-[150px] object-cover"
                />
                <h2>{item.name}</h2>
                <p>{item.category}</p>
              </article>
            ))}
            {error && <p>{error.message}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingNow;
