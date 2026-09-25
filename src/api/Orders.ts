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
