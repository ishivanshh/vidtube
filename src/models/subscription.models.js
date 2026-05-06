import mongoose  , {Schema} from "mongoose";
const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,   // one who is subscribing 
      ref: "Users",
      // required: true,
    },
    channel: {
      type: Schema.Types.ObjectId, // one to whom subscriber is subscribing
      ref: "Users",
      // required: true,
    },
  },
  {
    timestamps: true, // creates createdAt & updatedAt
  }
);

const Subscription = mongoose.model("Subscription",subscriptionSchema);

export default Subscription;