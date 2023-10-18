/* Importamos el modelo */
const Productos = require('../models/Producto')
const Carrito = require('../models/Carrito')
const getAllProductStatics= async (req,res)=>{
    const carrito = await Carrito.find({})
    const products = await Productos.find({}) /* Mostrar todos los productos  */
    res.render('../views/shop/shop.ejs',{productos:products, user:req.user, carrito:carrito})
}
const getAllProductCarnes= async (req,res)=>{
    const carrito = await Carrito.find({})
    const products = await Productos.find({categoria:'carnes'}) /* Mostrar todos los productos  */
    res.render('../views/shop/carnes.ejs',{productos:products, user:req.user, carrito:carrito})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductEnsaladas= async (req,res)=>{
    const carrito = await Carrito.find({})
    const products = await Productos.find({categoria:'ensaladas'}) /* Mostrar todos los productos  */
    res.render('../views/shop/ensaladas.ejs',{productos:products, user:req.user, carrito:carrito})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductSushi= async (req,res)=>{
    const carrito = await Carrito.find({})
    const products = await Productos.find({categoria:'sushi'}) /* Mostrar todos los productos  */
    res.render('../views/shop/sushi.ejs',{productos:products, user:req.user, carrito:carrito})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductPastas= async (req,res)=>{
    const carrito = await Carrito.find({})
    const products = await Productos.find({categoria:'pastas'}) /* Mostrar todos los productos  */
    res.render('../views/shop/pastas.ejs',{productos:products, user:req.user, carrito:carrito})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductPizzas= async (req,res)=>{
    const carrito = await Carrito.find({})
    const products = await Productos.find({categoria:'pizzas'}) /* Mostrar todos los productos  */
    res.render('../views/shop/pizzas.ejs',{productos:products, user:req.user, carrito:carrito})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductVeganos= async (req,res)=>{
    const carrito = await Carrito.find({})
    const products = await Productos.find({vegano:true}) /* Mostrar todos los productos  */
    res.render('../views/shop/veganos.ejs',{productos:products, user:req.user, carrito:carrito})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductSopas= async (req,res)=>{
    const carrito = await Carrito.find({})
    const products = await Productos.find({categoria:'sopas'}) /* Mostrar todos los productos  */
    res.render('../views/shop/sopas.ejs',{productos:products, user:req.user, carrito:carrito})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductDulces= async (req,res)=>{
    const carrito = await Carrito.find({})
    const products = await Productos.find({categoria:'dulces'}) /* Mostrar todos los productos  */
    res.render('../views/shop/dulces.ejs',{productos:products, user:req.user, carrito:carrito})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductHamburguesas= async (req,res)=>{
    const carrito = await Carrito.find({})
    const products = await Productos.find({categoria:'hamburguesas'}) /* Mostrar todos los productos  */
    res.render('../views/shop/hamburguesas.ejs',{productos:products, user:req.user, carrito:carrito})
    //res.status(200).json({products, numProducts:products.length})
}




module.exports={
    getAllProductStatics,
    getAllProductCarnes,
    getAllProductEnsaladas,
    getAllProductSushi,
    getAllProductPastas,
    getAllProductPizzas,
    getAllProductVeganos,
    getAllProductSopas,
    getAllProductHamburguesas,
    getAllProductDulces
}

