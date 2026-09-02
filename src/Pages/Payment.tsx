const Payment = () => {
  return (
    <>
      <h2>Payment</h2>
      <main className="w-full h-[100vh] bg-[#07070A] text-zinc-100 flex justify-center items-center">
        <section className="size-full flex justify-between items-start border rounded">
          <section className="w-[60%] h-[100%] flex flex-col justify-center items-center border rounded">
            <div className="w-[70%] h-[20%] flex flex-col">
              <h2>Payment method</h2>
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
              <h2>Card Number: </h2>
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
              <h2>Card Holder</h2>
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
              <h2>Order Summary</h2>
              <div className="size-full flex flex-col gap-2 ">
                {/* Cart in product details*/}
                <div className="w-full h-[4rem] bg-[#27272A] rounded flex justify-between items-center px-5 ">
                  <h2>Name product</h2>
                  <h2>quantity: 1</h2>
                  <h2>Price: $250.00</h2>
                </div>
              </div>
            </div>
            <div className="w-full h-[30%]  flex flex-col justify-center items-start p-5">
              <div className="w-full h-[4rem] flex justify-between items-center">
                <h2>Subtotal</h2>
                <h2>$800</h2>
              </div>
              <div className="w-full h-[4rem] flex justify-between items-center">
                <h2>Shipping</h2>
                <h2>$0</h2>
              </div>
              <div className="w-full h-[4rem] flex justify-between items-center border-t">
                <h2>Total</h2>
                <h2>$800</h2>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Payment;
