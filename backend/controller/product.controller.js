import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProduct = async(req, res) =>{
    try{
        const products = await Product.find({});
        return res.status(200).json({success: true, data: products});
    }
    catch(error){
        console.log("Error in fetching products: ", error.message);
        return res.status(500).json({success: false, message: "server error"});
    }
}

export const createProduct = async(req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message:"Need to provide all fields"});
    }
    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    }
    catch(error){
        console.error("Error in creating product: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const updateProduct = async(req, res) => {
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message: "invalid id (product not found)"});
    }
    try{
        const updated_product = await Product.findByIdAndUpdate(id,product,{new: true});
        res.status(200).json({success: true, data: updated_product});
    }
    catch(error){
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const deleteProduct = async(req, res) =>{
    const {id} = req.params;
    
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"});
    }
    catch(error){
        console.log("error in deleting product: ", error.message);
        res.status(404).json({success: false, message: "Product not found"});
    }
}