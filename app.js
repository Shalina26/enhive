import express from "express";
import { logger } from "./middlewares/logger.js";
import { activities } from "./data/activities.js";

const app = express();
const PORT = 3000;

app.use(logger);

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

app.listen(PORT, () => {
  console.log("The server has restarted");
});
