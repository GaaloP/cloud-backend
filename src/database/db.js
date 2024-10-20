const { Sequelize, DataTypes } = require('sequelize');

// DEFINIR LOS ESQUEMAS
const productModel = require('./models/products');

//ESQUEMAS EQ1
const addressModel = require('./models/addresses.js');
const orderModel = require('./models/orderes.js');
const paymentMethodtModel = require('./models/paymentMethods.js');
const saleFunnelModel = require('./models/salesFunnel.js');
const sellModel = require('./models/sells.js');


sslopt = {}
 
if (process.env.NODE_ENV !== 'development') {
    sslopt = {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    protocol: 'postgres',
    port: process.env.DB_PORT,
    dialectOptions: sslopt,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
})

sequelize.authenticate().then(() => {
    console.log('Database Connected');
}) .catch((error) => {
    console.log(error)
    console.log('Error while trying connecting to Database')
})

const Products = productModel(sequelize, DataTypes);

//Esquemas EQ1
const Addresses = addressModel(sequelize, DataTypes);
const Orderes = orderModel(sequelize, DataTypes);
const PaymentMethodts = paymentMethodtModel(sequelize, DataTypes);
const SalesFunnel = saleFunnelModel(sequelize, DataTypes);
const Sells = sellModel(sequelize, DataTypes);

///////////
sequelize.sync({alter: true}).then(() => {
    console.log('Database && tables was synchronized!')
}).catch((e) => {
    console.log(e)
    console.log('Error while trying connecting to Database')
});

module.exports = {
    Products,
    //entitys EQ1
    Addresses,
    Orderes,
    PaymentMethodts,
    SalesFunnel,
    Sells
}