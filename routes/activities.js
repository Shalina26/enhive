import express from "express";
import {
  renderAddNewActivityPage,
  renderAllActivitiesPage,
  createNewActivity,
  renderActivityPage,
  updateActivity,
  renderEditActivityPage,
  deleteActivity,
} from "../controllers/activities.js";

export const activitiesRouter = express.Router();

activitiesRouter.get("/", renderAllActivitiesPage);
activitiesRouter.get("/new", renderAddNewActivityPage);
activitiesRouter.post("/new", createNewActivity);
activitiesRouter.get("/:slug", renderActivityPage);
activitiesRouter.post("/:slug", updateActivity);
activitiesRouter.get("/:slug/edit", renderEditActivityPage);
activitiesRouter.get("/:slug/delete", deleteActivity);
