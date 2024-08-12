import { UserProps } from "@/components/Edit";
import { AdminData } from "@/pages/Login";
import { UserInfoType } from "@/pages/SignupForm";
// import { AdminData } from "@/pages/Login";
import axios from "axios";

export const apiClient =  axios.create({
  baseURL: "https://gep-registration-api.vercel.app"
});

export async function fetchUsers() {
  try {
    const users = await apiClient.get("/users");
    return users.data.users;
  } catch(e) {
    console.log(e);
  }
}

export async function updateUser(id: string, userData: Partial<UserProps>): Promise<UserProps | undefined> {
  try {
    const result = await apiClient.put(`/edit/${id}`, userData);
    return result.data.updatedUser;
  } catch(err) {
    console.log(err);
  }
}

export async function deleteUser(id: string) {
  console.log(id);
  try {
    await apiClient.delete(`/delete/${id}`);
  } catch(err) {
    console.log(err);
  }
}

export async function checkAdminInfo(adminInfo: AdminData) {
  // const localAdminInfo = JSON.parse(localStorage.getItem("admin")!);
// 
  // if(localAdminInfo) {
    // return true;
  // }

  try {
    const result = await apiClient.post("/login", adminInfo);
    if(result.data.isAdmin) {
      localStorage.setItem("admin", JSON.stringify(result.data.isAdmin));
    }
    return result.data.isAdmin;
    // returns true / false
  } catch(err) {
    console.log(err);
    return false;
  }
}

export async function addUser(userInfo: UserInfoType) {
  try {
    const result = await apiClient.post("/add", userInfo);
    return result;
  } catch(err) {
    console.log(err);
  }
}