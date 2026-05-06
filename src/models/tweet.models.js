import mongoose , { Schema } from "mongoose";
const tweetSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // automatically adds createdAt & updatedAt
  }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;