import { useContext } from "react";
import type { Product } from "../Types/Product";
import { Link } from "react-router-dom";
import { contextCartItem } from "../Context/CartContext";

type ProductCartType = {
  items: Product[] | null | undefined;
  error: Error | null;
  cartBtn: boolean;
};

const ProductCard = ({ items, error, cartBtn }: ProductCartType) => {
  const cart = useContext(contextCartItem);
  return (
    <>
      {items?.map((item) => (
        <article
          className="w-[300px] h-[350px] flex flex-col justify-center items-center basis-xs md:basis-[30%] lg:basis-[20%] gap-2 bg-[#1F1F27] border border-[#8B5CF6] rounded duration-300 hover:translate-y-[-10px]"
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-[150px] h-[150px] object-cover"
          />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <div className="flex flex-col gap-2">
            {cartBtn && (
              <button
                className="w-[160px] h-[1.8rem] rounded duration-600 bg-[#7b55f7] hover:bg-[#A855F7] hover:text-zinc-950 text-zinc-100 mx-[15px] px-[10px] cursor-pointer"
                onClick={() => {
                  cart?.addToCart(item);
                }}
              >
                Add to Cart
              </button>
            )}
            <Link to={`/productdetail/${item.id}`}>
              <button className="w-[160px] h-[1.5rem] rounded bg-[#A855F7] duration-600 hover:text-zinc-950 text-zinc-100 mx-[15px] px-[10px] cursor-pointer">
                See details
              </button>
            </Link>
          </div>
        </article>
      ))}

      {error && <p>{error.message}</p>}
    </>
  );
};

export default ProductCard;
