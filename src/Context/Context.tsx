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

const Context = ({ children }: ContextProp) => {
  const [users, setUser] = useState<UserLogin | null>(null);
  return (
    <>
      <AuthContext.Provider value={{ users, setUser }}>
        <h2>{children}</h2>
      </AuthContext.Provider>
    </>
  );
};

export default Context;
