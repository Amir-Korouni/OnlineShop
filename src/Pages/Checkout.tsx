const Checkout = () => {
  return (
    <>
      <main className="w-full h-[90vh] bg-[#07070A] text-zinc-100">
        <section className="size-full m-auto flex justify-between items-center">
          <section className="w-[50%] h-full bg-[#111116] border flex flex-col justify-center items-center gap-5">
            <h2>Shopping information</h2>
            <div className="w-full h-[70%] flex flex-col items-center gap-8">
              <div className="w-[50%] flex flex-col justify-center items-start">
                <label htmlFor="">Name</label>
                <input type="text" className="w-full border border-[#8B5CF6] rounded p-1 px-2 " />
              </div>
              <div className="w-[50%] flex flex-col justify-center items-start">
                <label htmlFor="">last name</label>
                <input type="text" className="w-full border border-[#8B5CF6] rounded p-1 px-2 " />
              </div>
              <div className="w-[50%] flex flex-col justify-center items-start">
                <label htmlFor="">address</label>
                <input type="text" className="w-full border border-[#8B5CF6] rounded p-1 px-2 " />
              </div>
              <div className="w-[50%] flex flex-col justify-center items-start">
                <label htmlFor="">City</label>
                <input type="text" className="w-full border border-[#8B5CF6] rounded p-1 px-2 " />
              </div>
              <div className="w-[50%] flex flex-col justify-center items-start">
                <label htmlFor="">Phone</label>
                <input type="text" className="w-full border border-[#8B5CF6] rounded p-1 px-2 "/>
              </div>
            </div>
          </section>
          <section className="w-[50%] h-full bg-[#0D0D12] border"></section>
        </section>
      </main>
    </>
  );
};

export default Checkout;
