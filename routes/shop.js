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
    getAllProductDulces}=require('../controllers/shop')

router.route('/all').get(getAllProductStatics)
//localhost:3600/comidas/all
router.route('/carnes').get(getAllProductCarnes)
//localhost:3600/comidas/carnes
router.route('/ensaladas').get(getAllProductEnsaladas)
//localhost:3600/comidas/ensaladas
router.route('/sushi').get(getAllProductSushi)
//localhost:3600/comidas/sushi
router.route('/pastas').get(getAllProductPastas)
//localhost:3600/comidas/pastas
router.route('/pizzas').get(getAllProductPizzas)
//localhost:3600/comidas/pizzas
router.route('/veganas').get(getAllProductVeganos)
//localhost:3600/comidas/veganas
router.route('/sopas').get(getAllProductSopas)
//localhost:3600/comidas/sopas
router.route('/dulces').get(getAllProductDulces)
//localhost:3600/comidas/dulces

module.exports=router