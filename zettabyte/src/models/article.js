import mongoose from "mongoose";
import  aggregatePaginate  from 'mongoose-aggregate-paginate-v2';


const Article = mongoose.Schema({
    type:{
        type: String,
        required: true
    },
    article:{
        type: String,
        required: true
    }
});
 
Article.plugin(aggregatePaginate);

export default mongoose.model('Articles', Article);