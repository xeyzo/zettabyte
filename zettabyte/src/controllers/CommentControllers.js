import Comment from "../models/article.js";
 
export const index = async (req, res) => {
    try {
        const comment = await Comment.find();
        res.json(comment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}
 

export const find = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.json(comment);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}
 

export const create = async (req, res) => {
    const comment = new Comment(req.body);
    try {
        const data = await comment.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 

export const update = async (req, res) => {
    const cekId = await Comment.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const comment = await Comment.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 

export const destroy = async (req, res) => {
    const cekId = await Product.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedProduct = await Product.deleteOne({_id: req.params.id});
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}