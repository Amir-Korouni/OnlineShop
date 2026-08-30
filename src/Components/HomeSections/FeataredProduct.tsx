import ProductCard from "../ProductCard";

const Feataredproduct = () => {
  return (
    <>
      <section className="w-[100%] h-[60vh] bg-[#1F1F27] border-t border-t-[#8B5CF6] m-auto mt-20 px-5">
        <div
          className="w-[70%] h-[60vh] flex flex-col justify-start items-start gap-5 m-auto"
          data-aos="fade-right"
        >
          <h2 className="underline p-[10px]">Featared Product</h2>
          <div className="size-full flex justify-center items-center gap-10">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feataredproduct;
