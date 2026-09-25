import { useEffect } from "react";
import CartQuantity from "../Components/CartQuantity";
import { Link } from "react-router-dom";
import type { Product } from "../Types/Product";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Reduxs/store";
import { setCart } from "../Reduxs/cartSlice";
import { useQuery } from "@tanstack/react-query";
import { getCartApi } from "@/api/Cart";
import { useDelCart } from "@/Hooks/useDelCart";

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
  const cart = useSelector((state: RootState) => {
    return state.cart.cartItem;
  });

  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery<CartResponse>({
    queryKey: ["Cartkey"],
    queryFn: getCartApi,
  });

  console.log(data?.data.items);

  useEffect(() => {
    if (data?.data) {
      dispatch(
        setCart(
          data.data.items.map((item) => ({
            product: item.product,
            quantity: item.quantity,
          })),
        ),
      );
    }
  }, [data, dispatch]);

  const totalPrice = cart.reduce((total, item) => {
    return total + Number(item.product.price) * item.quantity;
  }, 0);

  const { mutate, isPending } = useDelCart();

  /**
   * @version 1.0.0
   * @param id
   * @description This function take an id from product and delete that product. I use react-query for sending a Post request to database and add user to database.
   */
  const handleRemove = (id: number) => {
    mutate(id);
  };

  if (isLoading || isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <main className="w-full h-[90vh] bg-[#07070A] text-zinc-100 m-auto">
        <section className="size-full flex flex-col justify-start items-center">
          <section className="w-full h-[70%] border bg-[#111116] flex flex-col items-center p-2 overflow-y-scroll">
            {cart.map((item) => (
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
                  onClick={() => handleRemove(item.product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <p>{error}</p>
          </section>
          <section className="w-full h-[30%] border bg-[#111116] flex flex-col items-center gap-6 p-2 ">
            <div className="w-full h-[4rem] flex justify-around items-center">
              <h2>Subtotal</h2>
              <h2>{totalPrice}</h2>
            </div>
            <div className="w-full h-[8rem] flex flex-col items-center gap-4">
              <Link to="/checkout">
                <button className="w-full h-[2rem] bg-[#8B5CF6] rounded cursor-pointer px-10">
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
