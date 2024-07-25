import mongoose from "mongoose";
import dotenv from "dotenv";
import { Users } from "./schema.js";

dotenv.config();
const uri = "mongodb://localhost:27017/GEP";

await mongoose.connect(uri);

export async function fetchUserData() {
  try {
    const users = await Users.find({});
    return users;
  } catch(err) {
    console.log(err);
  }
}