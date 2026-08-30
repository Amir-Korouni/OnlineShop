import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import type { Products } from "../Types/Product";

type filterType = {
  categories: string[];
  brands: string[];
  features: string[];
};

const Products = () => {
  const { data, error } = useFetch<Products[]>({
    url: "http://localhost:8000/Product",
  });

  const [filters, setFilters] = useState<filterType>({
    categories: [],
    brands: [],
    features: [],
  });

  const [search, setSearch] = useState<string>("");

  const [maxRange, setMaxRenge] = useState<number>(500);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterName: keyof filterType,
  ) => {
    const { value, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [filterName]: checked
        ? [...prev[filterName], value]
        : prev[filterName].filter((item) => item !== value),
    }));
  };

  const filteredProduct = data?.filter((product) => {
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);

    const brandMatch =
      filters.brands.length === 0 || filters.brands.includes(product.brand);

    const featureMatch =
      filters.features.length === 0 ||
      filters.features.includes(product.wireless);
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLocaleLowerCase());
    const priceMatch = Number(product.price) <= maxRange;
    return (
      searchMatch && categoryMatch && brandMatch && featureMatch && priceMatch
    );
  });
  return (
    <>
      <section className="w-full h-[250vh] bg-[#0A0A0F] p-[5px] rounded-lg ">
        {/* NavBar Products */}
        <section className="w-full h-[10rem]  bg-[#1F1F27] flex flex-col justify-center items-center">
          <h2>Products</h2>
          <h3>Find the perfect sound for your world.</h3>
          <div className="w-[80%] h-[4rem] flex justify-center items-center mt-5">
            <input
              type="search"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="w-[70%] h-[2rem] border border-[#A855F7] rounded p-[5px]"
            />
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
                  type="checkbox"
                  name="category"
                  value="Headphone"
                  onChange={(e) => handleFilterChange(e, "categories")}
                />
                Headphone
              </label>

              <label className="w-full flex justify-center gap-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Earpuds"
                  onChange={(e) => handleFilterChange(e, "categories")}
                />
                Eearpuds
              </label>

              <label className="w-full flex justify-center gap-2">
                <input
                  type="checkbox"
                  name="category"
                  value="Gaming"
                  onChange={(e) => handleFilterChange(e, "categories")}
                />
                Gaming
              </label>
            </fieldset>

            <fieldset className="w-full h-[10rem] flex flex-col justify-start items-center px-10">
              <legend>Brand</legend>
              <label className="w-full flex justify-center gap-2">
                <input
                  type="checkbox"
                  name="brand"
                  value="Sony"
                  onChange={(e) => handleFilterChange(e, "brands")}
                />
                Sony
              </label>

              <label className="w-full flex justify-center gap-2">
                <input
                  type="checkbox"
                  name="brand"
                  value="Haylou"
                  onChange={(e) => handleFilterChange(e, "brands")}
                />
                HayLou
              </label>

              <label className="w-full flex justify-center gap-2">
                <input
                  type="checkbox"
                  name="brand"
                  value="Redmi"
                  onChange={(e) => handleFilterChange(e, "brands")}
                />
                Redmi
              </label>
              <label className="w-full flex justify-center gap-2">
                <input
                  type="checkbox"
                  name="brand"
                  value="Razer"
                  onChange={(e) => handleFilterChange(e, "brands")}
                />
                Razer
              </label>
            </fieldset>

            <fieldset className="w-full h-[10rem] flex flex-col justify-start items-center px-10">
              <legend>Price</legend>
              <label className="w-full flex flex-col justify-center gap-2">
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="10"
                  value={maxRange}
                  onChange={(e) => setMaxRenge(Number(e.target.value))}
                />
                <p>{maxRange}</p>
              </label>
            </fieldset>

            <fieldset className="w-full h-[10rem] flex flex-col justify-start items-center px-10">
              <legend>Features</legend>

              <label className="w-full flex justify-center gap-2">
                <input
                  type="checkbox"
                  name="Wireless"
                  value="Wireless"
                  onChange={(e) => handleFilterChange(e, "features")}
                />
                Wireless
              </label>

              <label className="w-full flex justify-center gap-2">
                <input
                  type="checkbox"
                  name="NoneWireless"
                  value="NoneWireless"
                  onChange={(e) => handleFilterChange(e, "features")}
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
