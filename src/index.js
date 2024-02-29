import dotenv from "dotenv";
import connectDB from "./DB/connect.DB.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT;

connectDB().then(() => {
  app.listen(port || 8000, () => {
    console.log(`Server started on port==>${port}`);
  });
});
