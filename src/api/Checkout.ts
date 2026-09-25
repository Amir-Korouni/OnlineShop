import type { orderBodyType } from "@/Pages/Checkout";
import { apiCall } from "./Client";

export function postCheckoutApi(item: orderBodyType) {
  const token = localStorage.getItem("token");

  return apiCall({
    endPoint: "/orders",
    option: {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ item }),
    },
  });
}
