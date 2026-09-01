import { useContext } from "react";
import { contextCartItem } from "../Context/CartContext";
import { Link } from "react-router-dom";
import InputsForm from "../Components/Forms/InputsForm";

const Checkout = () => {
  const cart = useContext(contextCartItem);

  /**
   * @version 1.0.0
   * @description This function calculate total price of carts product.
   * @description in reduce function total is a sum value(it is 0,becuase we don't pass initialize value) and item is our cart which have a name,product and etc.
   */
  const totalPrice = cart?.cartItem.reduce((total, item) => {
    return total + Number(item.product.price) * item.quantity;
  }, 0);

  const orderBody = {
    userId: 1,
    items: cart?.cartItem,
    totalPrice: totalPrice,
  };

  const handleAddToOrder = () => {
    fetch("http://localhost:8000/Order", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(orderBody),
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(
            "Some things went wrong. we have a problem in connecting to api.",
          );
        }
        return await res.json();
      })
      .then((dataRes) => {
        console.log(dataRes);
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <main className="w-full h-[90vh] bg-[#07070A] text-zinc-100">
        <section className="size-full m-auto flex justify-between items-center">
          <section className="w-[50%] h-full bg-[#111116] border flex flex-col justify-center items-center gap-5">
            <h2>Shopping information</h2>
            <div className="w-full h-[70%] flex flex-col items-center gap-8">
              <div className="w-[50%] flex flex-col justify-center items-start">
                <label htmlFor="">Name</label>
                <InputsForm name="name" type="text" />
              </div>
              <div className="w-[50%] flex flex-col justify-center items-start">
                <label htmlFor="">last name</label>
                <InputsForm name="lastname" type="text" />
              </div>
              <div className="w-[50%] flex flex-col justify-center items-start">
                <label htmlFor="">address</label>
                <textarea className="w-full border border-[#8B5CF6] rounded p-1 px-2 " />
              </div>
              <div className="w-[50%] flex flex-col justify-center items-start">
                <label htmlFor="">City</label>
                <InputsForm name="city" type="text" />
              </div>
              <div className="w-[50%] flex flex-col justify-center items-start">
                <label htmlFor="">Phone</label>
                <InputsForm name="phone" type="text" />
              </div>
            </div>
          </section>
          <section className="w-[50%] h-full bg-[#0D0D12] border flex flex-col justify-center items-center gap-5">
            <h2>Order Summary</h2>
            <div className="w-full h-[50%] flex flex-col items-center gap-8 overflow-y-scroll">
              {cart?.cartItem.map((item) => (
                <div
                  className="w-[80%] flex justify-around items-center border"
                  key={item.product.id}
                >
                  <h2 className="flex gap-2">
                    {item.product.name}
                    <span>({item.quantity})</span>
                  </h2>
                  <h3>{item.product.price}</h3>
                </div>
              ))}
            </div>
            <div className="w-full h-[40%] flex justify-center items-center border-t">
              <div className="flex flex-col gap-4">
                <div className="w-[400px] h-[2rem] flex justify-between items-center">
                  <h2>Subtotal </h2>
                  <h3>{totalPrice}</h3>
                </div>
                <div className="w-[400px] h-[2rem] flex justify-between items-center">
                  <h2>Shipping</h2>
                  <h3>0</h3>
                </div>
                <div className="w-[400px] h-[2rem] flex justify-between items-center">
                  <h2>Tax</h2>
                  <h3>0 </h3>
                </div>
                <div className="w-[400px] h-[2rem] flex justify-between items-center border-t">
                  <h2>Total</h2>
                  <h3>{totalPrice} </h3>
                </div>
                <div className="flex justify-between gap-2">
                  <button
                    className="w-[150px] h-[2rem] duration-700 bg-purple-800 hover:bg-purple-300 text-zinc-100  hover:text-zinc-900 rounded cursor-pointer"
                    onClick={() => {
                      handleAddToOrder;
                    }}
                  >
                    Place Order
                  </button>
                  <Link to="/cart">
                    <button className="w-[150px] h-[2rem] duration-700 bg-purple-300 hover:bg-purple-800 rounded text-zinc-900 hover:text-zinc-100 cursor-pointer">
                      Back
                    </button>
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
