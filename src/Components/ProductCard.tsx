import useFetch from "../Hooks/useFetch";
import type { Products } from "../Types/Product";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const { data: dataFetch, error } = useFetch<Products[]>({
    url: "http://localhost:8000/Product",
  });
  return (
    <>
      {dataFetch?.map((item) => (
        <Link to={`/productdetail/${item.id}`}>
          <article
            className="w-[250px] h-[300px] flex flex-col justify-center items-center gap-2 bg-[#1F1F27] border border-[#8B5CF6] rounded duration-300 hover:translate-y-[-10px]"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[150px] h-[150px] object-cover"
            />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button className="w-[160px] h-[2rem] rounded duration-600 bg-[#7b55f7] hover:bg-[#A855F7] hover:text-zinc-950 text-zinc-100 mx-[15px] px-[10px] cursor-pointer">
              Add to Cart
            </button>
          </article>
        </Link>
      ))}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default ProductCard;
