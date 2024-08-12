import mongoose from "mongoose";
import dotenv from "dotenv";
import { Users, Admin } from "../schema.js";

dotenv.config();
const uri = process.env.MONGODB_URI;

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
    const updatedUser = await Users.findOneAndUpdate({_id: id}, userData, { new: true });

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
    const deletedUser = await Users.findByIdAndDelete(id);
    return deletedUser;
  } catch(err) {
    console.log(err);
  }
}

export async function checkAdmin(email, password) {
  // returns true if the user exist and the password is correct.
  // returns false if the user does'nt exist or the password is incorrect.
  
  try {
    const admin = await Admin.find({ email: email });
    if(admin.length === 0) {
      return false
    } else {
      if(admin) {
        if(admin[0].password === password) {
          return true
        } else {
          return false
        }
      }
    }
  } catch(err) {
    console.log(err);
    return "Something went wrong";
  }
}

export async function addUser(userData) {
  // returns true if the user added successfully
  
  try {
    const response = await Users.insertMany([userData]);
    if(response.acknowledged) {
      return true;
    } else {
      return false;
    }
  } catch(err) {
    console.log(err);
    return false;
  }
}