import { UserProps } from "@/components/Edit";
import { AdminData } from "@/pages/Login";
// import { AdminData } from "@/pages/Login";
import axios from "axios";

export const apiClient =  axios.create({
  baseURL: "http://localhost:3000"
});

export async function fetchUsers() {
  try {
    const users = await apiClient.get("/users");
    return users.data.users;
  } catch(e) {
    console.log(e);
  }
}

export async function updateUser(id: number, userData: Partial<UserProps>): Promise<void> {
  try {
    const result = await apiClient.put(`/edit/${id}`, userData);
    return result.data.updatedUser;
  } catch(err) {
    console.log(err);
  }
}

export async function deleteUser(id: number) {
  try {
    await apiClient.delete(`/delete/${id}`);
  } catch(err) {
    console.log(err);
  }
}

export async function checkAdminInfo(adminInfo: AdminData) {
  try {
    const result = await apiClient.post("/login", adminInfo);
    return result.data.isAdmin;
    // returns true / false
  } catch(err) {
    console.log(err);
    return false;
  }
}