import express from "express";
import { logger } from "./middlewares/logger.js";
import { authRouter } from "./routes/auth.js";
import { activitiesRouter } from "./routes/activities.js";
import { simplePagesRouter } from "./routes/simple-pages.js";
import { connectDb } from "./config/database.js";
import { PORT } from "./config/app.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("public"));

app.use(simplePagesRouter);
app.use("/activities", activitiesRouter);
app.use(authRouter);

const onSuccess = () => {
  console.log("💽 Database connected");

  app.listen(PORT, () => {
    console.log("The server has restarted");
  });
};

const onError = (error) => {
  console.error(error);
};

connectDb().then(onSuccess).catch(onError);
