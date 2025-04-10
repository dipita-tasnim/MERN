// // import mongoose from "mongoose";
// const mongoose = require("mongoose");


// const productSchema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         price: {
//             type: Number,
//             required: true,
//         },
//         brand: {
//             type: String,
//             required: true,
//         },
    
//     },
//     {
//         timestamps: true, // for createAt, updateAt
//     }
// );

// module.exports = mongoose.model("Product", productSchema);

// // "Product" will be converted to "products" in database by mongoose automatically
// //const Product je call deya hoise ei Product function ta server.js e create hoyeche.
// // export default Product;


const mongoose = require("mongoose");

const { Schema } = mongoose;  // Destructure Schema from mongoose

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        price: { type: Number, required: true }
    },
    { timestamps: true }  // Optional: adds createdAt and updatedAt fields
);

// Create the model based on the schema
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
