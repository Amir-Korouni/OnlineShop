import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../Reduxs/store";
import { type CartItem } from "../Reduxs/cartSlice";
import { useCheckout } from "@/Hooks/useCheckout";

export type orderBodyType = {
  userId: number | undefined;
  items: CartItem[];
  totalPrice: number;
};

const Checkout = () => {
  const cart = useSelector((state: RootState) => {
    return state.cart.cartItem;
  });

  const users = useSelector((state: RootState) => {
    return state.auth.user;
  });

  /**
   * @version 1.0.0
   * @description This function calculate total price of carts product.
   * @description in reduce function total is a sum value(it is 0,becuase we don't pass initialize value) and item is our cart which have a name,product and etc.
   */
  const totalPrice = cart.reduce((total, item) => {
    return total + Number(item.product.price) * item.quantity;
  }, 0);

  const orderBody: orderBodyType = {
    userId: users?.id,
    items: cart,
    totalPrice: totalPrice,
  };

  const token = localStorage.getItem("token");
  const { mutate } = useCheckout(orderBody, String(token));

  /**
   *
   * @version 1.0.0
   * @description This function is a logic of sending data to backend. we use fetch, but we should use react-query(useMutation) for control this function.
   * @description This function take a order data and add order to database.
   */

  const handleAddToOrder = () => {
    mutate();
  };
  return (
    <>
      <main className="w-full h-[90vh] bg-[#07070A] text-zinc-100">
        <section className="size-full m-auto flex justify-center items-center">
          <section className="w-[85%] h-full bg-[#0D0D12] border flex flex-col justify-center items-center gap-5">
            <h2>Order Summary</h2>
            <div className="w-full h-[50%] flex flex-col items-center gap-8 overflow-y-scroll">
              {cart.map((item) => (
                <div
                  className="w-[80%] flex justify-around items-center border"
                  key={item.product.id}
                >
                  <h3 className="flex gap-2 text-zinc-100 text-2xl">
                    {item.product.name}
                    <span>({item.quantity})</span>
                  </h3>
                  <h3>{item.product.price}</h3>
                </div>
              ))}
            </div>
            <div className="w-full h-[40%] flex justify-center items-center border-t">
              <div className="flex flex-col gap-4">
                <div className="w-[70vw] h-[2rem] flex justify-between items-center">
                  <h3 className="text-2xl text-zinc-100">Subtotal </h3>
                  <h3>{totalPrice}</h3>
                </div>
                <div className="w-[70vw] h-[2rem] flex justify-between items-center">
                  <h3 className="text-2xl text-zinc-100">Shipping</h3>
                  <h3>0</h3>
                </div>
                <div className="w-[70vw] h-[2rem] flex justify-between items-center">
                  <h3 className="text-2xl text-zinc-100">Tax</h3>
                  <h3>0 </h3>
                </div>
                <div className="w-[70vw] h-[2rem] flex justify-between items-center border-t">
                  <h3 className="text-2xl text-zinc-100">Total</h3>
                  <h3>{totalPrice} </h3>
                </div>
                <div className="flex justify-between gap-2">
                  <button
                    className="w-[150px] h-[2rem] duration-700 bg-purple-800 hover:bg-purple-300 text-zinc-100  hover:text-zinc-900 rounded cursor-pointer"
                    onClick={() => {
                      handleAddToOrder();
                    }}
                  >
                    Place Order
                  </button>
                  <Link to="/cart">
                    <button className="w-[150px] h-[2rem] duration-700 bg-purple-300 hover:bg-purple-800 rounded text-zinc-900 hover:text-zinc-100 cursor-pointer">
                      Back
                    </button>
                  </Link>
                  <Link to="/orders">
                    <button>orders</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Checkout;
