const mongoose = require("mongoose");
const Joi = require("joi");

const productsSchema = new mongoose.Schema({
    image:String,
    title:String,
    description: String,
    availableProducts:Array,
    price:Number,
    qty: Number,
})

let Products = mongoose.model("Products" , productsSchema , "products");

function productValidate(product){
    const schema = Joi.object({
        image: Joi.string(),
        title: Joi.string(),
        description: Joi.string(),
        availableProducts:Joi.array(),
        price:Joi.number(),
        qty:Joi.number(),
      });
    
      return schema.productValidate(product);   
}

module.exports = {
    productValidate,
    Products,
}

