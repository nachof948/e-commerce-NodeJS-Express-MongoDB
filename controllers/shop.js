/* Importamos el modelo */
const Productos = require('../models/Producto')

const getAllProductStatics= async (req,res)=>{
    const products = await Productos.find({}) /* Mostrar todos los productos  */
    res.render('shop',{productos:products})
}
const getAllProductCarnes= async (req,res)=>{
    const products = await Productos.find({categoria:'carnes'}) /* Mostrar todos los productos  */
    res.render('carnes',{productos:products})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductEnsaladas= async (req,res)=>{
    const products = await Productos.find({categoria:'ensaladas'}) /* Mostrar todos los productos  */
    res.render('ensaladas',{productos:products})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductSushi= async (req,res)=>{
    const products = await Productos.find({categoria:'sushi'}) /* Mostrar todos los productos  */
    res.render('sushi',{productos:products})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductPastas= async (req,res)=>{
    const products = await Productos.find({categoria:'pastas'}) /* Mostrar todos los productos  */
    res.render('pastas',{productos:products})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductPizzas= async (req,res)=>{
    const products = await Productos.find({categoria:'pizzas'}) /* Mostrar todos los productos  */
    res.render('pizzas',{productos:products})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductVeganos= async (req,res)=>{
    const products = await Productos.find({vegano:true}) /* Mostrar todos los productos  */
    res.render('veganos',{productos:products})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductSopas= async (req,res)=>{
    const products = await Productos.find({categoria:'sopas'}) /* Mostrar todos los productos  */
    res.render('sopas',{productos:products})
    //res.status(200).json({products, numProducts:products.length})
}
const getAllProductDulces= async (req,res)=>{
    const products = await Productos.find({categoria:'dulces'}) /* Mostrar todos los productos  */
    res.render('dulces',{productos:products})
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
    getAllProductDulces
}

