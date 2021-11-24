import express from "express";
import mongoose from "mongoose";
import * as SimpleUsersController from "../controllers/simpleUsersController.js";

const simpleUsersRouter = express.Router();
mongoose.connect("mongodb://192.168.0.211:27017/test");

simpleUsersRouter.get("/simpleusers", async (_req, res) => {
  res.json({
    simpleUsers: await SimpleUsersController.getAllSimpleUsers(),
  });
});

simpleUsersRouter.post("/createuser", async (req, res) => {
  const simpleUserObj = req.body;
  const result = await SimpleUsersController.createSimpleUser(simpleUserObj);
  res.json({ result });
});

simpleUsersRouter.patch("/updateuser/:id", async (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;
  const result = await SimpleUsersController.updateSimpleUser(id, updateFields);
  res.json({
    result,
  });
});

simpleUsersRouter.delete("/deleteuser/:id", async (req, res) => {
  const id = req.params.id;
  const result = await SimpleUsersController.deleteSimpleUser(id);
  res.json({
    result,
  });
});

export { simpleUsersRouter };
