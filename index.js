const express = require('express')
const cors = require('cors')

const app = express()
require('dotenv').config()
const port = process.env.PORT

const ContactsRoutes = require('./src/routes/contact.routes');
const ProductsRoutes = require('./src/routes/product.routes')


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json())
app.use(cors(corsOptions))

// RUTA DE CONTACTOS
app.use('/contactos', ContactsRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


