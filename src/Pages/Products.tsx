import heroImage from "../assets/Hero_headphone-removebg-preview.png";
import useFetch from "../Hooks/useFetch";
import type { Products } from "../Types/Product";

const Products = () => {
  const { data, error } = useFetch<Products[]>({
    url: "http://localhost:8000/Product",
  });

  const handleCheck = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    console.log(e.target.value);
  };
  return (
    <>
      <section className="w-full h-[250vh] bg-[#0A0A0F] p-[5px] rounded-lg ">
        {/* NavBar Products */}
        <section className="w-full h-[10rem]  bg-[#1F1F27] flex flex-col justify-center items-center">
          <h2>Products</h2>
          <h3>Find the perfect sound for your world.</h3>
          <div className="w-[80%] h-[4rem] flex justify-between items-center mt-5">
            <input
              type="search"
              placeholder="Search Products..."
              className="w-[70%] h-[2rem] border border-[#A855F7] rounded p-[5px]"
            />
            <select
              name="Sort"
              id="Sort"
              className="w-[200px] h-[2rem] bg-[#A855F7] text-zinc-900 rounded"
            >
              <option value="Sony">Sony</option>
              <option value="JBL">HayLou</option>
              <option value="Redmi">Redmi</option>
              <option value="Razer">Razer</option>
            </select>
          </div>
        </section>

        {/* Main product page and filter product */}
        <aside className="w-full h-[100%] flex justify-between">
          <section className="w-[20%] h-full border ">
            <h2>Filters</h2>
            <fieldset className="w-full h-[10rem] flex flex-col justify-start ">
              <legend>Category</legend>
              <label>
                <input type="checkbox" onChange={(e) => handleCheck(e)} />
                Headphones
              </label>

              <label>
                <input type="checkbox" />
                Eearpuds
              </label>

              <label>
                <input type="checkbox" />
                Gaming
              </label>
            </fieldset>

            <fieldset className="w-full h-[8rem] flex flex-col justify-start">
              <legend>Brand</legend>
              <label>
                <input type="checkbox" />
                Sony
              </label>

              <label>
                <input type="checkbox" />
                HayLou
              </label>

              <label>
                <input type="checkbox" />
                Redmi
              </label>
              <label>
                <input type="checkbox" />
                Razer
              </label>
            </fieldset>

            <fieldset className="w-full h-[8rem] flex flex-col justify-start">
              <legend>Price</legend>

              <label>
                <input type="range" />
              </label>
            </fieldset>

            <fieldset className="w-full h-[8rem] flex flex-col justify-start">
              <legend>Features</legend>

              <label>
                <input type="checkbox" />
                Wireless
              </label>

              <label>
                <input type="checkbox" />
                Noise Cancelling
              </label>

              <label>
                <input type="checkbox" />
                Microphone
              </label>
            </fieldset>
            <button
              type="reset"
              className="w-[150px] h-[2rem] bg-[#8B5CF6] rounded text-zinc-100 cursor-pointer duration-500 hover:bg-[#A855F7]"
            >
              Clear Filters
            </button>
          </section>
          <section className="w-[80%]  border">
            <h2 className="w-full h-[4rem] mt-5">{data?.length}</h2>
            <div className="w-full h-auto flex justify-center items-center flex-wrap gap-5 basis-[200px]">
              {data?.map((item) => (
                <article
                  className="w-[250px] h-[300px] flex flex-col justify-center items-center gap-2 bg-[#1F1F27] border border-[#8B5CF6] rounded duration-300 duration-500 hover:scale-103"
                  key={item.id}
                >
                  <img
                    src={heroImage}
                    alt="item Name image"
                    className="w-[150px] h-[150px] object-cover"
                  />
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </>
  );
};

export default Products;
