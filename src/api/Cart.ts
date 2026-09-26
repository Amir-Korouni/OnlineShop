import { apiClient } from "./Client";

export async function getCart() {
  const response = await apiClient.get("/cart");
  return response.data;
}

export async function deleteCart(id: string) {
  const response = await apiClient.delete(`/cart/items/${id}`);
  return response.data;
}
