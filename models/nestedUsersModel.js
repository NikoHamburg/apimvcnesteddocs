import mongoose from "mongoose";

const nestedUsersSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String },
    email: { type: String },
    address: {
      street: { type: String },
      suite: { type: String },
      city: { type: String },
      zipcode: { type: String },
    },
    phone: { type: String },
    website: { type: String },
    company: { type: String },
    accountHistory: [
      {
        amount: { type: Number },
        date: { type: Date },
        purchase: { type: String },
      },
    ],
  },
  { collection: "nestedUsers", versionKey: false }
);

const NestedUsersModel = mongoose.model("nestedUser", nestedUsersSchema);

export { NestedUsersModel };
