import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    
    },
    {
        timestamps: true, // for createAt, updateAt
    }
);

const Product = mongoose.model("Product", productSchema);
// "Product" will be converted to "products" in database by mongoose automatically

export default Product;