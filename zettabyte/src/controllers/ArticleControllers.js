import Article from "../models/article.js";
import moment from "moment";

const limit_ = 5; 

export const index = async (req, res) => {
    let aggregate_options = [];

    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || limit_;

    const options = {
        page, limit,
        collation: {locale: 'en'},
        customLabels: {
            totalDocs: 'totalResults',
            docs: 'events'
        }
    };

     let match = {};

     if (req.query.q) match.type = {$regex: req.query.q, $options: 'i'};
 
     aggregate_options.push({$match: match});

    try {
        const myAggregate = Article.aggregate(aggregate_options);
        const article = await Article.aggregatePaginate(myAggregate, options);
        res.json(article);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}
 

export const find = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        res.json(article);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}
 

export const create = async (req, res) => {
    const article = new Article(req.body);
    try {
        const data = await article.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 

export const update = async (req, res) => {
    const cekId = await Article.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const article = await Article.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(article);
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