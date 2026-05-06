import {ApiResponse} from "../utils/Apiresponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async(req , res)=>{
    res.status(200)
    .json(new ApiResponse(
        200,
        "OK",
        {
            message : "Server is Healthy!"
        }
    ))
});


export default healthCheck;