import type { UserLogin } from "@/Types/User";
import { apiCall, apiClient } from "./Client";

export function getSigninApi(UserData: UserLogin) {
  return apiCall({
    endPoint: "/auth/login",
    option: {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(UserData),
    },
  });
}

export async function postSignin(UserData: UserLogin) {
  const response = await apiClient.post("/auth/login", { ...UserData });
  return response.data;
}
