import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { articleRouter } from "./src/routes/article.route.js";
import { commentRouter } from "./src/routes/comment.route.js";

import 'dotenv/config'

const app = express();

mongoose.connect(process.env.MONGO_URI,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));
  
app.use(cors());
app.use(express.json());
app.use('/article',articleRouter);
app.use('/comment',commentRouter);


 
app.listen(process.env.PORT,()=> console.log('Server Running at port: 5000'));