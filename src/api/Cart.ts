import { apiCall } from "./Client";

export function getCartApi(token: string) {
  return apiCall({
    endPoint: "/cart",
    option: {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  });
}

export function deleteCartApi(id: number) {
  const token = localStorage.getItem("token");
  return apiCall({
    endPoint: `/cart/items/${id}`,
    option: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
}
