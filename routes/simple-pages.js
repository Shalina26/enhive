import express from "express";
import {
  renderAboutPage,
  renderHomePage,
} from "../controllers/simple-pages.js";

export const simplePagesRouter = express.Router();

simplePagesRouter.get("/", renderHomePage);
simplePagesRouter.get("/about", renderAboutPage);
