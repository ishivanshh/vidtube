// id string pk 
//   watchHistory objectId[] videos 
//   username string 
//   email string 
//   avatar string 
//   fullName string 
//   coverimage string 
//   password string 
//   refreshtoken string 
//   createdAt Date
//   updatedAt Date

 //
import mongoose , {Schema} from "mongoose";

// mongoDB itself adds _id to every schema it is created so we dont have to create primary id.
const userSchema = new Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
            index : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true
        },
        fullname : {
            type : String,
            required : true,
            trim : true,
            index : true
        },
        avatar : {
            type : String , // cloudinary URL
            required : true
        },
        coverImage : {
            type : String
        },
        watchHistory : [
            {
                type : Schema.Types.ObjectId,
                ref : "Video"
            }
        ],
        password : {
            type : String,
            required : [true, "Password is Required!"]
        },
        refreshToken : {
            type : String
        }

    },
    {
        timestamps : true
    }
)
// timstamps => createdAT and updatedAT

export const User = mongoose.model("User" , userSchema)