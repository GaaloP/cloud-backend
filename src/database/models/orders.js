const { DataTypes } = require("sequelize")
const sells = require("./sells.js");
const paymentMethods = require("./paymentMethods.js");
const salesFunnel = require("./salesFunnel.js");
const addresses = require("./addresses.js");

module.exports = (sequelize, type) => {
    return sequelize.define("orders", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        cost: {
          type: DataTypes.DECIMAL(6, 2),
          isNumeric: true,
          allowNull: false,
        },
    
        payment_method_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
    
        sales_funnel_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
    
        client_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
    
        address_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
}

// Define the relationship between Order and Sell
orders.hasMany(sells, {
    foreignKey: "order_id",
    sourceKey: "id",
});

sells.belongsTo(orders, {
    foreignKey: "order_id",
    sourceKey: "id",
});
    
// Define the relationship between Order and PaymentMethod
orders.belongsTo(paymentMethods, {
    foreignKey: "payment_method_id",
    targetKey: "id",
});

paymentMethods.hasMany(orders, {
    foreignKey: "payment_method_id",
    sourceKey: "id",
});

// Define the relationship between Order and SaleFunnel
orders.belongsTo(salesFunnel, {
    foreignKey: "sales_funnel_id",
    targetKey: "id",
});

salesFunnel.hasMany(orders, {
    foreignKey: "sales_funnel_id",
    sourceKey: "id",
});

// Define the relationship between Order and Address
orders.belongsTo(addresses, {
    foreignKey: "address_id",
    targetKey: "id",
});

addresses.hasMany(orders, {
    foreignKey: "address_id",
    sourceKey: "id",
});