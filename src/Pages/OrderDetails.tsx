import { Link, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

type Order = {
  id: number;
  totalAmount: string;
  status: string;
};

type OrderResponse = {
  success: boolean;
  data: Order;
};

const OrderDetail = () => {
  const { id } = useParams();
  const { data, error } = useFetch<OrderResponse>({
    url: `http://localhost:4000/orders/${id}`,
  });
  console.log(data);
  {
    error && console.log(error);
  }

  return (
    <>
      <Link to="/orders">Back to order</Link>
      <main className="w-full h-[100vh] bg-[#07070A] text-zinc-100 flex justify-center items-center">
        <section className="w-[85%] h-full flex flex-col gap-2 bg-[#111116] border border-purple-800 rounded px-5">
          <div className="w-full h-[2rem] flex justify-between items-center">
            <h2>Order Id = #10293</h2>
            <h2>Date of shopping</h2>
          </div>
          <div className="w-full h-[20%] border rounded flex flex-col justify-center items-start p-5">
            <label htmlFor="">
              <input type="radio" name="productstate" value="Pending" />
              Pending
            </label>
            <label htmlFor="">
              <input type="radio" name="productstate" value="Processing" />
              Processing
            </label>
            <label htmlFor="">
              <input type="radio" name="productstate" value="Shipped" />
              Shipped
            </label>
            <label htmlFor="">
              <input type="radio" name="productstate" value="Cancelled" />
              Deliveray
            </label>
          </div>
          <div className="w-full h-[50%] border rounded flex flex-col justify-center items-start p-5">
            <h2>Products</h2>
            <div className="size-full flex flex-col gap-2 ">
              {/* Cart in product details */}

              <div className="w-full h-[4rem] bg-[#27272A] flex justify-between items-center px-5 border-t rounded">
                <h2>#ORD {data?.data?.id}</h2>
                <h2>Status: {data?.data.status}</h2>
                <h2>Price: ${data?.data.totalAmount}</h2>
              </div>
            </div>
          </div>
          <div className="w-full h-[30%] border rounded flex flex-col justify-center items-start p-5">
            <div className="w-full h-[4rem] flex justify-between items-center">
              <h2>Subtotal</h2>
              <h2>${data?.data.totalAmount}</h2>
            </div>
            <div className="w-full h-[4rem] flex justify-between items-center">
              <h2>Shipping</h2>
              <h2>$0</h2>
            </div>
            <div className="w-full h-[4rem] flex justify-between items-center border-t">
              <h2>Total</h2>
              <h2>${data?.data.totalAmount}</h2>
            </div>
          </div>
          <div className="w-full h-[4rem] flex justify-between items-center">
            <div className="w-[20%] flex justify-center">
              <h2>Payment</h2>
              <h2>Card</h2>
            </div>
            <h2 className="w-[20%]">Status: Paid</h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderDetail;
