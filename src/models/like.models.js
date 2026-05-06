import mongoose , {Schema} from "mongoose";

const likeSchema = new Schema(
  {
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Videos",
    },
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    tweet: {
      type: Schema.Types.ObjectId,
      ref: "Tweets",
    },
  },
  {
    timestamps: true,
  }
);

const Like = mongoose.model("Like", likeSchema);

export default Like;