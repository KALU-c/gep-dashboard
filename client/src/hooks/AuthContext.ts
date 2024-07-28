import { createContext, Dispatch, SetStateAction } from "react";

type ContextType = {
  admin: boolean
  setAdmin: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<ContextType>({ admin: false , setAdmin: () => {} });