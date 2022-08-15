const express = require("express");
const router = express.Router();
const {Products} = require("../models/Products");

router.get("/", async (req,res) => {
    const products = await Products.find({});
    res.send(products);
})

router.post("/", async (req,res) => {
    const newProduct = new Products(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
})

router.delete("/:id" , async(req,res) => {
    try{
    const deleteProduct = await Products.findByIdAndDelete(req.params.id);
    if(!deleteProduct) return res.status(400).send("No product to delete");
     res.status(200).send(deleteProduct);
    }catch{
        res.status(404).send("Product don't exist")
    }
})
module.exports = router;