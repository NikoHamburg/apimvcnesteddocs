import { SimpleUsersModel } from "../models/simpleUsersModel.js";

export const getAllSimpleUsers = async () => {
  return await SimpleUsersModel.find({});
};

export const createSimpleUser = async (simpleUserObj) => {
  return SimpleUsersModel.create(simpleUserObj);
};

export const deleteSimpleUser = async (id) => {
  return await SimpleUsersModel.findByIdAndRemove(id);
};

export const updateSimpleUser = async (id, updateFields) => {
  return await SimpleUsersModel.findByIdAndUpdate(id, updateFields, {
    new: true,
  });
};
