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
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

// if password has not changed then passwowrd will not hash.
userSchema.pre("save" , async function (next){

    if(!this.modified("password")) return next()

    this.password = bcrypt.hash(this.password, 10)
    next()
});

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password , this.password)
}


userSchema.methods.generateAccessToken = function(){
    // short lived accesstoken/jwt token expiry time depands upon you
    return jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username,
        fullname : this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET, 
    {expiresIn : process.env.ACCESS_TOKEN_EXPIRY}
)};

userSchema.methods.generateRefreshToken = function(){
    // short lived accesstoken/jwt token expiry time depands upon you
    return jwt.sign({
        _id : this._id,
    },
    process.env.REFRESH_TOKEN_SECRET, 
    {expiresIn : process.env.REFRESH_TOKEN_EXPIRY}
)};


export const User = mongoose.model("User" , userSchema)