import express from "express";
import { logger } from "./middlewares/logger.js";
import { activities } from "./data/activities.js";
import { users } from "./data/users.js";

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

app.get("/activities", (request, response) => {
  response.render("activities/index", { activities });
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.get("/login", (request, response) => {
  response.render("auth/login");
});

app.get("/activities/:id", (request, response) => {
  const activityId = request.params.id;
  const activity = activities.find((activity) => activity.id === activityId);

  if (!activity)
    return response
      .status(404)
      .send("Activity not found. Please check your spelling and try again.");

  return response.status(200).render("activities/show", { activity: activity });
});

app.post("/login", (request, response) => {
  const logindata = request.body;
  const username = logindata.username;
  const password = logindata.password;

  if (!username || !password)
    return response.send("Please fill out all required fields.");

  const user = users.find((user) => user.username === username);

  if (!user) return response.send("Username or password wrong.");

  return response.redirect("activities");
});

app.listen(PORT, () => {
  console.log("The server has restarted");
});
