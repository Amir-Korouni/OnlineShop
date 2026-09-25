import { apiCall } from "./Client";

export function getOrder() {
  const token = localStorage.getItem("token");

  return apiCall({
    endPoint: "/orders",
    option: {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  });
}

export function getOrderDetails(id: string, token: string) {
  return apiCall({
    endPoint: `/orders/${id}`,
    option: {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  });
}
