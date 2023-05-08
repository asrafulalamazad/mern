const express =require('express');
const ProductsController = require('../controllers/ProductsController')

const router = express.Router();

//Create
router.post("/InsertProduct", ProductsController.InsertProduct)

//Read Product
router.get("/ReadProduct", ProductsController.ReadProduct)

//Read Product by id
router.get("/ReadProductByID/:id", ProductsController.ReadProductByID)

//Update Product
router.post("/UpdateProduct/:id", ProductsController.UpdateProduct)

//Delete Product
router.get("/DeleteProduct/:id", ProductsController.DeleteProduct)

module.exports= router;