// id string pk 
//   name string 
//   description string 
//   createdAt string 
//   updatedAt string 
//   videos objectId videos
//   owner objectId users 

import mongoose , {Schema }from "mongoose";

const PlaylistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    videos: [{
      type: Schema.Types.ObjectId,
      ref: "Videos",
      required: true,
    }],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;