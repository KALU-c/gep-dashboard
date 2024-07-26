import mongoose from "mongoose";
import dotenv from "dotenv";
import { Users } from "../schema.js";

dotenv.config();
const uri = process.env.MONGODB_LOCAL_URI;

await mongoose.connect(uri);

export async function fetchUserData() {
  try {
    const users = await Users.find({});
    return users;
  } catch(err) {
    console.log(err);
  }
}

export async function editUserData(id, userData) {
  try {
    const updatedUser = await Users.findOneAndUpdate({id: id}, userData, { new: true });

    if(!updatedUser) {
      console.log("User not found");
    } else {
      return updatedUser;
    }
  } catch(err) {
    console.log(err);
  }
}

export async function deleteUser(id) {
  try {
    const deletedUser = await Users.findOneAndDelete({id: id});
    return deletedUser;
  } catch(err) {
    console.log(err);
  }
}