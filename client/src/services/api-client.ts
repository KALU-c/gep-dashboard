import { UserProps } from "@/components/Edit";
import axios from "axios";

const apiClient =  axios.create({
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
  } catch(e) {
    console.log(e);
  }
}