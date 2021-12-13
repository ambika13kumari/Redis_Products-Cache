const express = require("express")

const app = express()

app.use(express.json())


const ProductController = require("./controllers/product.controller")

app.use("/products", ProductController)

module.exports = app;


