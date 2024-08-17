import { Schema, model } from "mongoose";

const UsersSchema = new Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  age: Number,
  phone: String,
  gender: String,
  education: String,
  church: String,
  fellowShip: String,
  date: {
    type: Date,
    default: Date.now,
  },
}, { collection: "GEPHMYC" })

const AdminSchema = new Schema({
  name: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now
  }
}, { collection: "GEPHMYCADMIN" })

export const Users = model("User", UsersSchema);
export const Admin = model("Admin", AdminSchema);
