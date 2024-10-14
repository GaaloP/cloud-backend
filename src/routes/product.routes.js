const express = require("express");
const router = express.Router()

const {
    createProducts
} = require("../controllers/products.controller")

router.use(express.json())


// Método POST
router.post('/', createProducts)

module.exports = router;