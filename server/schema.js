import { Schema, model } from "mongoose";

// const UsersSchema = new Schema({
//   name: String,
//   age: Number,
//   phone: String,
//   email: String,
//   education: String,
//   prevAttendance: String,
//   registrationDate: Date
// });

// const UsersSchema = new Schema({
//   name: String,
//   age: Number,
//   phone: String,
//   email: String,
//   education: String,
//   prevAttendance: String,
//   registrationDate: Date
// });

const UsersSchema = new Schema({
  // id: Number,
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
    default:
  }
})

const AdminSchema = new Schema({
  email: String,
  password: String
});

export const Users = model("User", UsersSchema);
export const Admin = model("Admin", AdminSchema);