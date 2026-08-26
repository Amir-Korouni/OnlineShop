import React, { createContext, useState } from "react";
import type { UserLogin } from "../Types/User";

export type AuthContextType = {
  users: UserLogin | null;
  setUser: React.Dispatch<React.SetStateAction<UserLogin | null>>;
};

type ContextProp = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

const ContextProvider = ({ children }: ContextProp) => {
  const [users, setUser] = useState<UserLogin | null>(null);
  console.log("Context users:", users);
  return (
    <>
      <AuthContext.Provider value={{ users, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default ContextProvider;
