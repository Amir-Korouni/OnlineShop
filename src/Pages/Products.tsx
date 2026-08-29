import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import type { Products } from "../Types/Product";

type filterType = {
  categories: string[];
  brands: string[];
  features: string[];
  price: number;
};

const Products = () => {
  const { data, error } = useFetch<Products[]>({
    url: "http://localhost:8000/Product",
  });

  const [category, setCategory] = useState<string>("all");

  const [filters, setFilters] = useState<filterType>({
    categories: [],
    brands: [],
    features: [],
    price: Infinity,
  });

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setCategory(e.target.value);
    } else {
      setCategory("all");
    }
  };

  const filteredProduct =
    category === "all"
      ? data
      : data?.filter((product) => {
          return product.category === category;
        });
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
        <section className="w-full h-[100%] flex justify-between">
          <aside className="w-[300px] h-full border ">
            <h2>Filters</h2>
            <fieldset className="w-full h-[10rem] flex flex-col justify-start items-center px-10">
              <legend>Category</legend>
              <label className="w-full flex justify-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Headphone"
                  onChange={handleCheck}
                />
                Headphone
              </label>

              <label className="w-full flex justify-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Earpuds"
                  onChange={handleCheck}
                />
                Eearpuds
              </label>

              <label className="w-full flex justify-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Gaming"
                  onChange={handleCheck}
                />
                Gaming
              </label>
            </fieldset>

            <fieldset className="w-full h-[10rem] flex flex-col justify-start items-center px-10">
              <legend>Brand</legend>
              <label className="w-full flex justify-center gap-2">
                <input type="radio" name="brand" value="Sony" />
                Sony
              </label>

              <label className="w-full flex justify-center gap-2">
                <input type="radio" name="brand" value="Haylou" />
                HayLou
              </label>

              <label className="w-full flex justify-center gap-2">
                <input type="radio" name="brand" value="Redmi" />
                Redmi
              </label>
              <label className="w-full flex justify-center gap-2">
                <input type="radio" name="brand" value="Razer" />
                Razer
              </label>
            </fieldset>

            <fieldset className="w-full h-[10rem] flex flex-col justify-start items-center px-10">
              <legend>Price</legend>
              <label className="w-full flex justify-center gap-2">
                <input type="range" />
              </label>
            </fieldset>

            <fieldset className="w-full h-[10rem] flex flex-col justify-start items-center px-10">
              <legend>Features</legend>

              <label className="w-full flex justify-center gap-2">
                <input type="checkbox" name="Wireless" value="Wireless" />
                Wireless
              </label>

              <label className="w-full flex justify-center gap-2">
                <input
                  type="checkbox"
                  name="NoneWireless"
                  value="NoneWireless"
                />
                None Wireless
              </label>
            </fieldset>
            <button
              type="reset"
              className="w-[150px] h-[2rem] bg-[#8B5CF6] rounded text-zinc-100 cursor-pointer duration-500 hover:bg-[#A855F7]"
            >
              Clear Filters
            </button>
          </aside>
          <section className="w-[85%] border">
            <h2 className="w-full h-[4rem] mt-5">
              The number of products: {filteredProduct?.length}
            </h2>
            <div className="w-full h-auto flex justify-center items-center flex-wrap gap-5 ">
              {filteredProduct?.map((item) => (
                <article
                  className="w-[250px] h-[300px] flex flex-col basis-xs md:basis-[30%] lg:basis-[20%] justify-center items-center gap-2 bg-[#1F1F27] border border-[#8B5CF6] rounded duration-300 duration-500 hover:scale-103"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt="item image"
                    className="w-[150px] h-[150px] object-cover"
                  />
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                </article>
              ))}
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Products;
