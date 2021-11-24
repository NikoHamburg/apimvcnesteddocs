import mongoose from "mongoose";

const simpleUsersSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
  },
  { collection: "simpleUsers", versionKey: false }
);

const SimpleUsersModel = mongoose.model("simpleUser", simpleUsersSchema);

export { SimpleUsersModel };