import express from "express";
import { logger } from "./middlewares/logger.js";
import { activities } from "./data/activities.js";
import { users } from "./data/users.js";

const app = express();
const PORT = 3000;

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("public"));

app.get("/activities/:id", (request, response) => {
  const activityId = request.params.id;
  const activity = activities.find((activity) => activity.id === activityId);

  if (!activity)
    return response.send(
      "Activity not found. Please check your spelling and try again."
    );

  return response.send(
    `${activity.name} at ${activity.venue}. ${activity.description}. Price: ${activity.price} per person.`
  );
});

app.post("/login", (request, response) => {
  const logindata = request.body;
  const username = logindata.username;
  const password = logindata.password;

  if (!username || !password)
    return response.send("Please fill out all required fields.");

  const user = users.find((user) => user.username === username);

  if (!user) return response.send("Username or password wrong.");

  return response.redirect("/activities.html");
});

app.listen(PORT, () => {
  console.log("The server has restarted");
});
