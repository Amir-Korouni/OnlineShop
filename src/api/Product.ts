import type { Product } from "@/Types/Product";
import { apiCall } from "./Client";

export function getProductApi() {
  return apiCall({ endPoint: "/products" });
}

export function postProductApi(item: Product) {
  const token = localStorage.getItem("token");

  return apiCall({
    endPoint: "/cart/items",
    option: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId: item.id,
        quantity: 1,
      }),
    },
  });
}
