const express =require('express');
const ProductsController = require('../controllers/ProductsController')

const router = express.Router();

//Create
router.post("/InsertProduct", ProductsController.InsertProduct)

//Read Product
router.get("/ReadProduct", ProductsController.ReadProduct)

//Update Product
router.post("/UpdateProduc/:id", ProductsController.UpdateProduct)

//Delete Product
router.get("/DeleteProduct/:id", ProductsController.DeleteProduct)

module.exports= router;