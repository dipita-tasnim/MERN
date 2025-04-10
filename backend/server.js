// import express from "express";
// import dotenv from "dotenv";
// import { connectDB } from "./config/db.js"; //.js dite hobe last e
// // import Product from "./models/product.model.js";
// // import mongoose from "mongoose";

// import productRoutes from "./routes/product.route.js";

// dotenv.config(); //from .env file


require("dotenv").config(); //from .env file
console.log("ENV CHECK:", process.env.PORT);

const express = require("express");
const mongoose = require("mongoose"); //from db.js file
const productRoutes = require("./routes/product.route");


//express.app
const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());//alllows us to accept json data in req.body (from postman app)

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use("/api/products", productRoutes); //product.route.js file e get,update, delete shob function e "/" use kora hoyeche ja ultimately "/api/products" kei indicate kore. oikhane "/" na diye jekono kichu deya

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

//listen for requests
    app.listen(process.env.PORT, () => {
        // connectDB();  //from db.js file
        console.log("connected to db and listening on port", process.env.PORT);

    })

})