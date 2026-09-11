import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import type { Product } from "../Types/Product";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/Reduxs/store";
import { addToCart } from "@/Reduxs/cartSlice";
import { Button } from "@base-ui/react/button";
import { toast } from "sonner";

type ProductResponseDetail = {
  success: boolean;
  data: Product;
};

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error } = useFetch<ProductResponseDetail>({
    url: `http://localhost:4000/products/${id}`,
  });

  const user = useSelector((state: RootState) => state.auth.user);
  // const product = useSelector((state: RootState) => state.cart.cartItem);
  const dispatch = useDispatch();
  const [color, setColor] = useState<string>("Black");

  const [addedProductId, setAddedProductId] = useState<number | null>(null);

  const handleAddCart = async (item: Product) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:4000/cart/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: item.id,
          quantity: 1,
        }),
      });

      const data = await res.json();

      console.log("Status:", res.status);
      console.log("Response:", data.data.id);

      if (!res.ok) {
        throw new Error(data.message || "Couldn't add product to cart.");
      }

      dispatch(addToCart(data));

      return true;
    } catch (error) {
      console.log("Add to cart error:", error);
      return false;
    }
  };

  return (
    <>
      <main className="w-full h-[90vh] bg-[#07070A] text-zinc-100">
        {data && (
          <section className="w-full h-[80%] bg-[#111116] flex justify-center items-center">
            <section className="w-[40%] h-full bg-[#0D0D12] flex justify-center items-center">
              <img
                src={data.data?.image}
                alt=""
                className="size-[80%] object-cover"
              />
            </section>
            <section className="w-[60%] h-full bg-[#27272A] flex flex-col justify-around items-center">
              <div className="w-[50%] h-[30vh] flex flex-col justify-center items-start gap-10">
                <h3 className="text-4xl">{data.data?.name}</h3>
                <h3 className="text-left">{data.data?.description}</h3>
                <h3>{data.data?.price}</h3>
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
              <Button
                className="w-[50%] h-[4vh] bg-[#8B5CF6] rounded cursor-pointer"
                onClick={() => {
                  handleAddCart(data.data);
                  setAddedProductId(Number(data.data?.id));
                  setTimeout(() => {
                    setAddedProductId(null);
                  }, 2000);
                }}
              >
                Add to Cart
              </Button>
              {user &&
                addedProductId === data.data?.id &&
                toast.success("Product added to cart!")}
              {!user &&
                addedProductId === data.data?.id &&
                toast.error("Some things went wrong | Please sign in first.")}
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
