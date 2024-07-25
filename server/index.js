import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { fetchUserData } from "./fetch-data.js";

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));

async function usersData() {
  try {
    const users = await fetchUserData();
    if(users.length === 0) {
      console.log("Users array is empty");
    } else {
      return users;
    }
  } catch(err) {
    console.log(err);
  }
}

app.get("/users", async (req, res) => {
  const usersList = await usersData();
  res.json({ users: usersList });
})

app.listen(port, () => console.log(`server running on port ${port}`));