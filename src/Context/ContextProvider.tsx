import React, { createContext, useState } from "react";
import type { UserLogin } from "../Types/User";

export type AuthContextType = {
  users: UserLogin | null;
  setUser: React.Dispatch<React.SetStateAction<UserLogin | null>>;
};

/**
 *
 *  @version 1.0.0
 *  @description This type specify type of that element which comes between context.
 *  @example component({}:ContextProp)
 */

type ContextProp = {
  children: React.ReactNode;
};

/**
 * @version 1.0.0
 * @description We create a context and as value we pass empty object of type `AuthContextType`.(we said,that value comes from this function should type of AuthContextType)
 * @example create : export const AuthContext = createContext({} as AuthContextType); and use it const users = useContext(AuthContext);
 */
export const AuthContext = createContext<AuthContextType | null>(null);

const ContextProvider = ({ children }: ContextProp) => {
  const [users, setUser] = useState<UserLogin | null>(null);
  return (
    <>
      <AuthContext.Provider value={{ users, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default ContextProvider;
