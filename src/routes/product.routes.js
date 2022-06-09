import express from "express"
import { findProducts,findProduct } from "../controller/product.controller.js"

export const productsRouter = express.Router()

productsRouter.get("/",(req,res)=>{
    const products = findProducts()
    res.send(products)
})

productsRouter.get("/:id",(req,res)=>{
    const productId = Number(req.params.id)
    const product = findProduct(productId)
    if (!product) res.send('<h1>No Existe Producto</h1>')
    res.send(product)
})

productsRouter.post("/",(req,res)=>{

})

productsRouter.delete("/:id",(req,res)=>{

})

productsRouter.put("/:id",(req,res)=>{

})