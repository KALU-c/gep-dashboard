import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { deleteUser, editUserData, fetchUserData } from "./controller/fetch-data.js";

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/users", async (req, res) => {
  const usersList = await fetchUserData();
  res.json({ users: usersList });
});

app.put("user/edit/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const userData = req.body;
  userData.age = parseInt(userData.age);

  try {
    const updatedUser = await editUserData(id, userData);
    res.json({updatedUser: updatedUser})
  } catch(err) {
    console.log(err);
  }
});

app.delete("user/delete/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await deleteUser(id);
  } catch(err) {
    console.log(err);
  }
})

app.listen(port, () => console.log(`server running on port ${port}`));