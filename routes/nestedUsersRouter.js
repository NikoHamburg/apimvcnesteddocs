import express from "express";
import mongoose from "mongoose";
import * as NestedUsersController from "../controllers/nestedUsersController.js";

const nestedUsersRouter = express.Router();
mongoose.connect("mongodb://192.168.0.211:27017/test");

nestedUsersRouter.get("/nestedusers", async (_req, res) => {
  res.json({
    nestedUsers: await NestedUsersController.getAllNestedUsers(),
  });
});

nestedUsersRouter.get("/emails", async (_req, res) => {
  res.json({
    nestedUsersEmails: await NestedUsersController.getAllNestedUsersEmails(),
  });
});

nestedUsersRouter.get("/accounthistory/:id", async (req, res) => {
  const id = req.params.id;
  res.json({
    AccountHistory: await NestedUsersController.getUserAccountHistory(id),
  });
});

nestedUsersRouter.post("/createnesteduser", async (req, res) => {
  const nestedUserObj = req.body;
  await NestedUsersController.createNestedUser(nestedUserObj, (result) => {
    res.json({
      result,
    });
  });
});

nestedUsersRouter.patch("/updatenesteduser/:id", async (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;
  res.json({
    updatedUser: await NestedUsersController.updateNestedUser(id, updateFields),
  });
});

nestedUsersRouter.delete("/deletenesteduser/:id", async (req, res) => {
  const id = req.params.id;
  res.json({
    deletedUser: await NestedUsersController.deleteNestedUser(id),
  });
});

export { nestedUsersRouter };
