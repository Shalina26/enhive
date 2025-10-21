import express from "express";
import mongoose from "mongoose";
import { logger } from "./middlewares/logger.js";
import { authRouter } from "./routes/auth.js";
import { activitiesRouter } from "./routes/activities.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("public"));

app.get("/", (request, response) => {
  response.render("index");
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.use(authRouter);
app.use("/activities", activitiesRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/enhive")
  .then(() => {
    console.log("💽 Database connected");

    app.listen(PORT, () => {
      console.log("The server has restarted");
    });
  })
  .catch((error) => console.error(error));
