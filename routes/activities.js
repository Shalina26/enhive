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
import { validateInput } from "../middlewares/validation.js";
import {
  descriptionValidationChain,
  nameValidationChain,
  priceValidationChain,
  venueValidationChain,
} from "../validations/index.js";

export const activitiesRouter = express.Router();

activitiesRouter.get("/", renderAllActivitiesPage);
activitiesRouter.get("/new", renderAddNewActivityPage);
activitiesRouter.post(
  "/new",
  validateInput([
    nameValidationChain,
    venueValidationChain,
    descriptionValidationChain,
    priceValidationChain,
  ]),
  createNewActivity
);
activitiesRouter.get("/:slug", renderActivityPage);
activitiesRouter.post(
  "/:slug",
  validateInput([
    nameValidationChain,
    venueValidationChain,
    descriptionValidationChain,
    priceValidationChain,
  ]),
  updateActivity
);
activitiesRouter.get("/:slug/edit", renderEditActivityPage);
activitiesRouter.get("/:slug/delete", deleteActivity);
