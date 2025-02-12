import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; //.js dite hobe last e


dotenv.config();

const app = express();

app.get("/products", (req, res) => {
    // res.send("server is ready");
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");

});

// O3nctGiEkwr65LvW