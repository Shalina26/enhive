import express from "express";
import { logger } from "./middlewares/logger.js";

const app = express();
const PORT = 3000;

app.use(logger);

app.use("/", express.static("public"));

app.listen(PORT, () => {
  console.log("The server has restarted");
});
