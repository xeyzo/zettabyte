import mongoose from "mongoose";
 
const Comment = mongoose.Schema({
    type:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('Comments', Comment);