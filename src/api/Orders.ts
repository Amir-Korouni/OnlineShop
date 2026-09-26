import { apiClient } from "./Client";

export async function getOrder() {
  const response = await apiClient.get("/orders");
  return response.data;
}

export async function getOrderDetails(id: string) {
  const response = await apiClient(`/orders/${id}`);
  return response.data;
}
