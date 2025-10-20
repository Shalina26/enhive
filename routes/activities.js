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

activitiesRouter.get("/activities", renderAllActivitiesPage);
activitiesRouter.get("/activities/new", renderAddNewActivityPage);
activitiesRouter.post("/activities/new", createNewActivity);
activitiesRouter.get("/activities/:slug", renderActivityPage);
activitiesRouter.post("/activities/:slug", updateActivity);
activitiesRouter.get("/activities/:slug/edit", renderEditActivityPage);
activitiesRouter.get("/activities/:slug/delete", deleteActivity);
