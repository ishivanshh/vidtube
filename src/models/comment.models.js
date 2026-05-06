import mongoose , {Schema} from "mongoose";

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },

    video: {
      type: Schema.Types.ObjectId,
      ref: "Videos",
      // required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      // required: true,
    },
  },
  {
    timestamps: true, // automatically creates createdAt & updatedAt
  }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;