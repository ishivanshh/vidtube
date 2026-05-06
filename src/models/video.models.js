// id string pk 
//   videoFile  string 
//   thumbnail  string 
//   owner  objectId users 
//   title  string 
//   description  string 
//   duration  number 
//   views  number 
//   isPublished  boolean
//   createdAt Date
//   updatedAt Date


import mongoose ,  {Schema, trusted} from "mongoose";

const videoSchema = new Schema  (
    {
        videoFile : {
            type : String, // cloudinary URL
            required : true
        },
        thumbnail : {
            type : String,  // cloudinary URL
            required : true
        },
        title : {
            type : String,
            required : true
        },
        description : {
            type : String
        },
        views : {
            type : Number,
            default :  0
        },
        duration : { 
            type : String,
            required : true
        },
        isPublished : {
            type : Boolean,
            default : true
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {
        timestamps : true
    }
);

export const Video = mongoose.model("Video", videoSchema);