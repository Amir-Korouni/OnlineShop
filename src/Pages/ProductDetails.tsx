import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import type { Products } from "../Types/Product";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error } = useFetch<Products>({
    url: `http://localhost:8000/Product/${id}`,
  });

  const [quantity, setQuantity] = useState<number>(0);
  const [color, setColor] = useState<string>("Black");

  const handleIncreamentQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreamenetQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
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
                <div className="w-[50%] h-[10vh] flex justify-center items-center gap-2">
                  <h3>Quantity: </h3>
                  <button
                    className="w-[30px] h-[30px] cursor-pointer bg-[#07070A] text-zinc-950 rounded flex justify-center items-center"
                    onClick={handleDecreamenetQuantity}
                  >
                    <FaMinus size={20} color="#8B5CF6" />
                  </button>
                  <p>{quantity}</p>
                  <button
                    className="w-[30px] h-[30px] cursor-pointer bg-[#07070A] text-zinc-950 rounded flex justify-center items-center"
                    onClick={handleIncreamentQuantity}
                  >
                    <FaPlus size={20} color="#8B5CF6" />
                  </button>
                </div>
              </div>
              <button className="w-[50%] h-[4vh] bg-[#8B5CF6] rounded cursor-pointer">
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
