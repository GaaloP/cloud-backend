import { DataTypes } from "sequelize";

module.exports = (sequelize, type) => {
    return sequelize.define("addresses", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      
        country: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      
        state: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      
        city: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      
        postal_code: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      
        address_line_1: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      
        address_line_2: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
      
        address_line_3: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
      
        comments: {
          type: DataTypes.STRING(30),
          allowNull: true,
        },
      
        channel_id: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        couriers: {
            type: DataTypes.INTEGER,
            references: {
                model: 'clients',
                key: 'id'
            },
        }
    })
}