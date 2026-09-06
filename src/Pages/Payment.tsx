import { useContext } from "react";
import { contextCartItem } from "../Context/CartContext";

const Payment = () => {
  const cart = useContext(contextCartItem);
  return (
    <>
      <main className="w-full h-[100vh] bg-[#07070A] text-zinc-100 flex justify-center items-center">
        <section className="size-full flex justify-between items-start border rounded">
          <section className="w-[60%] h-[100%] flex flex-col justify-center items-center border rounded">
            <div className="w-[70%] h-[20%] flex flex-col">
              <h3 className="text-2xl text-zinc-100">Payment method</h3>
              <label htmlFor="">
                <input type="radio" name="payment" value="CreditCard" />
                Credit Card
              </label>
              <label htmlFor="">
                <input type="radio" name="payment" value="PayPal" />
                PayPal
              </label>
            </div>
            <div className="w-[70%] h-[20%] flex flex-col">
              <h3 className="text-2xl text-zinc-100">Card Number: </h3>
              <input
                type="text"
                name="cardnumber"
                maxLength={12}
                className="w-full h-[2rem] bg-[#0D0D12] text-[#F5F5F5] border border-[#8B5CF6] rounded focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] p-[5px]"
              />
            </div>
            <div className="w-[80%] h-[20%] flex justify-around">
              <div className="w-[150px] h-[2rem] flex flex-col gap-4">
                <h3>Expiry</h3>
                <input
                  type="date"
                  name="cardDate"
                  className="border border-[#8B5CF6]"
                />
              </div>
              <div className="w-[150px] h-[2rem] flex flex-col gap-4">
                <h3>CVV</h3>
                <input
                  type="text"
                  name="cardDate"
                  maxLength={3}
                  className="border border-[#8B5CF6]"
                />
              </div>
            </div>
            <div className="w-[250px] h-[4rem]">
              <h3 className="text-2xl text-zinc-100">Card Holder</h3>
              <input
                type="text"
                className="w-full border border-[#8B5CF6] rounded"
              />
            </div>
            <div className="w-[70%] h-[4rem] mt-10">
              <button className="w-full h-[1.8rem] rounded duration-600 bg-[#7b55f7] hover:bg-[#A855F7] hover:text-zinc-950 text-zinc-100 mx-[15px] px-[10px] cursor-pointer">
                Pay ${`Total Price`}
              </button>
            </div>
          </section>
          <section className="w-[40%] border rounded">
            <div className="w-full h-[50%] flex flex-col justify-center items-start p-5">
              <h3 className="text-2xl text-zinc-100">Order Summary</h3>
              <div className="size-full flex flex-col gap-2 ">
                {cart?.cartItem.map((item) => (
                  <div className="w-full h-[4rem] bg-[#27272A] rounded flex justify-between items-center px-5 ">
                    <h3 className="text-2xl text-zinc-100">
                      {item.product.name}
                    </h3>
                    <h3 className="text-2xl text-zinc-100">
                      quantity: {item.quantity}
                    </h3>
                    <h3 className="text-2xl text-zinc-100">
                      Price: ${item.product.price}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[30%]  flex flex-col justify-center items-start p-5">
              <div className="w-full h-[4rem] flex justify-between items-center">
                <h3>Subtotal</h3>
                <h3>$800</h3>
              </div>
              <div className="w-full h-[4rem] flex justify-between items-center">
                <h3>Shipping</h3>
                <h3>$0</h3>
              </div>
              <div className="w-full h-[4rem] flex justify-between items-center border-t">
                <h3>Total</h3>
                <h3>$800</h3>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Payment;
