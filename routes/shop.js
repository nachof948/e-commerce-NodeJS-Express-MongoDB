const express=require('express')
const router=express.Router()

const{getAllProductStatics, 
    getAllProductCarnes, 
    getAllProductEnsaladas,
    getAllProductSushi,
    getAllProductPastas,
    getAllProductPizzas,
    getAllProductVeganos,
    getAllProductSopas,
    getAllProductHamburguesas,
    getAllProductDulces}=require('../controllers/shop')

router.route('/all').get(getAllProductStatics)
//localhost:4500/comidas/all
router.route('/carnes').get(getAllProductCarnes)
//localhost:4500/comidas/carnes
router.route('/ensaladas').get(getAllProductEnsaladas)
//localhost:4500/comidas/ensaladas
router.route('/sushi').get(getAllProductSushi)
//localhost:4500/comidas/sushi
router.route('/pastas').get(getAllProductPastas)
//localhost:4500/comidas/pastas
router.route('/pizzas').get(getAllProductPizzas)
//localhost:4500/comidas/pizzas
router.route('/veganas').get(getAllProductVeganos)
//localhost:4500/comidas/veganas
router.route('/sopas').get(getAllProductSopas)
//localhost:4500/comidas/sopas
router.route('/hamburguesas').get(getAllProductHamburguesas)
//localhost:4500/comidas/sopas
router.route('/dulces').get(getAllProductDulces)
//localhost:4500/comidas/dulces

module.exports=router