import express from "express";
import { simpleUsersRouter } from "./routes/simpleUsersRouter.js";
import { nestedUsersRouter } from "./routes/nestedUsersRouter.js";

const app = express();
const port = 3033;

app.use(express.json());
app.use("/simpleusers", simpleUsersRouter);
app.use("/nestedusers", nestedUsersRouter);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
