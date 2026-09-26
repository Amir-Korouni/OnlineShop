import type { Product } from "@/Types/Product";
import { apiClient } from "./Client";

export async function getProduct() {
  const response = await apiClient.get("/products");
  return response.data;
}

export async function postProduct(item: Product) {
  const response = await apiClient.post("/cart/items", {
    productId: item.id,
    quantity: 1,
  });
  return response.data;
}

export async function getProductDetail(id: string) {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
}
