import type { orderBodyType } from "@/Pages/Checkout";
import { apiClient } from "./Client";

export async function postCheckout(item: orderBodyType) {
  const response = await apiClient.post("/orders", { ...item });
  return response.data;
}
