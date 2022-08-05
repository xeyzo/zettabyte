import express from "express";
import { destroy, index, find, update, create } from "../controllers/CommentControllers.js";
 
const router = express.Router();
 
router.get('/', index);
router.get('/:id', find );
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);
 

export { router as commentRouter };