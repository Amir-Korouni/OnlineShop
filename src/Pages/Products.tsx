import { useMemo, useState } from "react";
import ProductCard from "../Components/ProductCard";
import type { ProductResponse } from "../Components/HomeSections/FeataredProduct";
import { useQuery } from "@tanstack/react-query";

type filterType = {
  categories: string[];
  brands: string[];
  features: string[];
};

const Products = () => {
  const { data, error, isLoading } = useQuery<ProductResponse>({
    queryKey: ["productsPage"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/products");
      if (!res.ok) {
        throw new Error("Faild to fetch any data. maybe api is bolshit.");
      }
      return res.json();
    },
  });

  console.log(data);

  const [filters, setFilters] = useState<filterType>({
    categories: [],
    brands: [],
    features: [],
  });

  const [search, setSearch] = useState<string>("");

  const [maxRange, setMaxRenge] = useState<number>(500);

  /**
   *
   * @version 1.0.0
   * @param e
   * @param filterName
   * @description This function take an event of html change element and one element of type filterType. This function said if previouse valuestate of filterstate is e.targert.checked(it is checked) and true, set that element which user chose and pass the e.target.value.
   */
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

  /**
   * @version 1.0.0
   * @param product
   * @description This function is applying a multi filter of product. This function said (for categories)value of variable is ==> categories length of filters state is zero or categories of filters state includes that category comes from data(fetching api).
   * @returns return all varialbes if all of them are true together.
   */
  const filteredProduct = useMemo(() => {
    return data?.data?.filter((product) => {
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);

      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const priceMatch = Number(product.price) <= maxRange;

      return searchMatch && categoryMatch && priceMatch;
    });
  }, [data?.data, filters.categories, search, maxRange]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

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
            <h3>Filters</h3>
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
                  value="Handsfree"
                  onChange={(e) => handleFilterChange(e, "categories")}
                />
                Handsfree
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

            <button
              type="reset"
              className="w-[150px] h-[2rem] bg-[#8B5CF6] rounded text-zinc-100 cursor-pointer duration-500 hover:bg-[#A855F7]"
            >
              Clear Filters
            </button>
          </aside>
          <section className="w-[85%] border">
            <h3 className="w-full h-[4rem] mt-5 text-zinc-100">
              The number of products: {filteredProduct?.length}
            </h3>
            <div className="w-full h-auto flex justify-center items-center flex-wrap gap-5 ">
              <ProductCard
                items={filteredProduct}
                error={error}
                cartBtn={false}
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Products;
