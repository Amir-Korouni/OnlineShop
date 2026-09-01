import useFetch from "../Hooks/useFetch";
import type { Product } from "../Types/Product";

const Orders = () => {
  const { data, error } = useFetch<Product[]>({
    url: "http://localhost:4000/orders",
  });
  return (
    <>
      <main className="w-full h-[90vh] bg-[#07070A] text-zinc-100">
        <section className="size-full m-auto flex justify-center items-center">
          <section className="w-[85%] h-full flex flex-col gap-2 bg-[#111116] border border-purple-800 rounded">
            <div className="w-full h-[20%] flex justify-between items-center px-10">
              <h2>Order: #ORD_10234</h2>
              <select
                name="status"
                id="status"
                className="w-[200px] h-[2rem] bg-[#8B5CF6] text-zinc-100 rounded px-5"
              >
                <option value="Delivered">Delivered</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div className="w-full h-50% flex flex-col justify-center items-center gap-4">
              {data?.map((item) => (
                <div className="w-[95%] h-[25vh] border border-[#8B5CF6] rounded flex justify-between items-center bg-[#111116] rounded px-2 overflow-y-scroll">
                  <div className="w-[50%] flex justify-center items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[20%] h-[20%] object-cover border rounded"
                    />
                    <h2>{item.name}</h2>
                  </div>
                  <h2>Quantity : {item.quantity}</h2>
                  <h2 className="w-[30%] h-auto">Price ${item.price}</h2>
                  <h2>Status: {"Delivaered or somethingelse"}</h2>
                </div>
              ))}
            </div>
            <div>{error?.message}</div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Orders;
