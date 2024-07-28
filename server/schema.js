import { Schema, model } from "mongoose";

const UsersSchema = new Schema({
  name: String,
  age: Number,
  phone: String,
  email: String,
  education: String,
  prevAttendance: String,
  registrationDate: Date
});

const AdminSchema = new Schema({
  email: String,
  password: String
});

export const Users = model("User", UsersSchema);
export const Admin = model("Admin", AdminSchema);