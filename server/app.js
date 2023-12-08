import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://guddu1777:guddu1777@cluster0.10xk0lk.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(process.env.PORT||5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO 34.204.40.137 5000")
  )
  .catch((err) => console.log(err));
