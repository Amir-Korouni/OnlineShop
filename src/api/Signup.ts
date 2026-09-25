import type { UserRegister } from "@/Types/User";
import { apiCall } from "./Client";

export function getSignupApi(SignupBody: UserRegister) {
  return apiCall({
    endPoint: "/auth/register",
    option: {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(SignupBody),
    },
  });
}
