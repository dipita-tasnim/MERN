const Product = require("../models/product.model");
const mongoose = require("mongoose");


const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
};

const getProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such product" });
    }
    const product = await Product.findById(id);
    if (!product) {
        return res.status(404).json({ error: "No such product" });
    }
    res.status(200).json(product);
};

const createProduct = async (req, res) => {
    const { name, brand, price } = req.body;
    try {
        const product = await Product.create({ name, brand, price });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such product" });
    }
    const product = await Product.findOneAndDelete({ _id: id });
    if (!product) {
        return res.status(404).json({ error: "No such product" });
    }
    res.status(200).json(product);
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such product" });
    }
    const product = await Product.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!product) {
        return res.status(404).json({ error: "No such product" });
    }
    res.status(200).json(product);
};


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
};