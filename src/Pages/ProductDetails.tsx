import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import type { Product } from "../Types/Product";
import { contextCartItem } from "../Context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error } = useFetch<Product>({
    url: `http://localhost:8000/Product/${id}`,
  });

  const [color, setColor] = useState<string>("Black");


  const carts = useContext(contextCartItem);
  return (
    <>
      <main className="w-full h-[90vh] bg-[#07070A] text-zinc-100">
        {data && (
          <section className="w-full h-[80%] bg-[#111116] flex justify-center items-center">
            <section className="w-[40%] h-full bg-[#0D0D12] flex justify-center items-center">
              <img
                src={data.image}
                alt=""
                className="size-[80%] object-cover"
              />
            </section>
            <section className="w-[60%] h-full bg-[#27272A] flex flex-col justify-around items-center">
              <div className="w-[50%] h-[30vh] flex flex-col justify-center items-start gap-10">
                <h3 className="text-4xl">{data.name}</h3>
                <h3 className="text-left">{data.description}</h3>
                <h3>{data.price}</h3>
              </div>
              <div className="w-[60%] h-[10vh] flex justify-center items-center gap-2">
                <div className="w-[50%] h-[10vh] flex justify-center items-center gap-2">
                  <h3 className="mx-5">Color: </h3>
                  <input
                    type="radio"
                    name="color"
                    defaultChecked
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />{" "}
                  Black
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />{" "}
                  White
                </div>
              </div>
              <button
                className="w-[50%] h-[4vh] bg-[#8B5CF6] rounded cursor-pointer"
                onClick={() => {
                  carts?.addToCart(data);
                }}
              >
                Add to Cart
              </button>
            </section>
          </section>
        )}
        {error && <p>{error.message}</p>}
        <section className="w-full h-[30%] bg-[#111116] flex justify-center items-center">
          <section className="w-[60%]"></section>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
