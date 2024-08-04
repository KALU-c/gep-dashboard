import { UserInfoType } from "@/pages/SignupForm";
import { createContext, Dispatch, SetStateAction } from "react";

type RegisterContextType = {
  userInfo: UserInfoType
  setUserInfo: Dispatch<SetStateAction<UserInfoType>>
}

export const RegisterContext = createContext<RegisterContextType>({
  userInfo: {
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    phone: "",
    gender: "",
    education: "",
    church: "",
    fellowShip: ""
  },
  setUserInfo: () => {}
});