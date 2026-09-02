import { useContext } from "react";
import CartQuantity from "../Components/CartQuantity";
import { contextCartItem } from "../Context/CartContext";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import type { Product } from "../Types/Product";

type CartItem = {
  id: number;
  quantity: number;
  product: Product;
};

type Cart = {
  id: number;
  userId: number;
  items: CartItem[];
};

type CartResponse = {
  success: boolean;
  data: Cart;
};

const Cart = () => {
  const cart = useContext(contextCartItem);
  const totalPrice = cart?.cartItem.reduce((total, item) => {
    return total + Number(item.product.price) * item.quantity;
  }, 0);

  const token = localStorage.getItem("token");

  const { data, error } = useFetch<CartResponse>({
    url: "http://localhost:4000/cart",
  });

  const handleDeleteCart = (id: number) => {
    fetch(`http://localhost:4000/cart/items/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(id),
    })
      .then(async (res) => {
        return await res.json();
      })
      .then((resData) => {
        console.log(resData);
        console.log(token);
      });
  };

  Array.isArray(data?.data);
  console.log(data);

  const handleContinue = () => {
    if (data?.data?.items) {
      cart?.setCartItem(
        data.data.items.map((item) => ({
          product: item.product,
          quantity: item.quantity,
        })),
      );
    }
  };
  return (
    <>
      <main className="w-full h-[90vh] bg-[#07070A] text-zinc-100 m-auto">
        <section className="size-full flex flex-col justify-start items-center">
          <section className="w-full h-[70%] border bg-[#111116] flex flex-col items-center p-2 overflow-y-scroll">
            {data?.data?.items.map((item) => (
              <div className="w-[95%] h-[25vh] border border-[#8B5CF6] rounded flex justify-between items-center bg-[#111116] rounded px-2">
                <div className="w-[50%] flex justify-center items-center gap-5">
                  <img
                    src={item.product.image}
                    alt="productImage"
                    className="w-[20%] h-[20%] object-cover border rounded"
                  />
                  <h2>{item.product.name}</h2>
                </div>
                <h2 className="w-[30%] h-auto">Price ${item.product.price}</h2>
                <CartQuantity
                  quantityCart={item.quantity}
                  productId={Number(item.product.id)}
                />
                <button
                  className="w-[150px] h-[30px] cursor-pointer duration-400 bg-[#A855F7] hover:bg-[#8B5CF6] text-zinc-950 rounded flex justify-center items-center"
                  onClick={() => {
                    handleDeleteCart(item.product.id);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            <p>{error?.message}</p>
          </section>
          <section className="w-full h-[30%] border bg-[#111116] flex flex-col items-center gap-6 p-2 ">
            <div className="w-full h-[4rem] flex justify-around items-center">
              <h2>Subtotal</h2>
              <h2>{totalPrice}</h2>
            </div>
            <div className="w-full h-[8rem] flex flex-col items-center gap-4">
              <Link to="/checkout">
                <button
                  className="w-full h-[2rem] bg-[#8B5CF6] rounded cursor-pointer px-10"
                  onClick={() => {
                    handleContinue();
                  }}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Cart;
