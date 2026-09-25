import type { UserLogin } from "@/Types/User";
import { apiCall } from "./Client";

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
