import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { fetchUserData } from "./fetch-data.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

async function usersData() {
  try {
    const users = await fetchUserData();
    if(users.length === 0) {
      console.log("Users array is empty");
    } else {
      console.log(users);
    }
  } catch(err) {
    console.log(err);
  }
}

usersData();


app.listen(() => console.log(`server running on port ${port}`));