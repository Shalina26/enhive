import express from "express";
import { renderLoginPage, renderRegisterPage } from "../controllers/auth.js";

export const authRouter = express.Router();

authRouter.get("/login", renderLoginPage);
authRouter.get("/register", renderRegisterPage);
