const { Products }  = require('../database/db')


const createProducts = async(req, res) => {

	try {
		// Codigo para acceder a la bd
		const { name, quantity } = req.body
		console.log(name, quantity)

        // Create a new user
        const product = await Products.create(
            { name, quantity });
	
		res.status(201).send({
			status: "correcto",
			message: "Creado correctamente"
		})
	} catch (error) {
		res.status(503).send({ 
			status: "hay un problema", 
			message: error
		})
	}

}

module.exports = {
	createProducts,
}