import Image from "../../assets/VyJXe6nk5WnA4UGA9P-P_ipk10MYEHqZXm_2GzhcIPuVt_9_RojZKcHJauBbToiZMjwUyI_0HKIjuMUl1dnMqW4koFYF-M_5eI8QgdLwAQ71H2kr7tQZ4hh936V95czJ7VTX3T8qlyr72MmgsSREOXpxOtf0QRKmYo837JsWVfHCxJCJjslYc1kLq1PCq381.jpeg";

const GamingProduct = () => {
  return (
    <>
      <section className="w-full h-[80vh] bg-[#111116] flex justify-center items-center relative z-[10] border-t">
        <div className="size-full">
          <img
            src={Image}
            alt="Hero image"
            className="w-full h-full object-cover opacity-50 blur-[8px]"
          />
        </div>
        <div
          className="w-[50%] absolute flex flex-col justify-start items-start gap-10"
          data-aos="fade-left"
        >
          <h1>Gaming Collection</h1>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nulla
            saepe soluta, modi recusandae qui nesciunt magni velit perspiciatis
            animi id esse amet ullam ex suscipit. Modi odio quas ea. Lorem ipsum
            dolor sit amet,
          </h2>
          <button className="w-[200px] h-[3rem] m-auto mt-[40px] bg-[#A855F7] duration-[0.4s] text-zinc-950 hover:bg-[#8B5CF6] hover:text-zinc-100 rounded-[50px] cursor-pointer">
            Explorer more
          </button>
        </div>
        <div
          className="
                absolute
                z-[-1]
                top-[40%]
                left-[20%]
                w-[500px]
                h-[300px]
                rounded-full
                bg-purple-600/15
                blur-[120px]
              "
        />
      </section>
    </>
  );
};

export default GamingProduct;
