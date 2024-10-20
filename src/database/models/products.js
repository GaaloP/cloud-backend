module.exports = (sequelize, type) => {
    return sequelize.define('products', {
        id: {
            type: type.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING
        },
        quantity: {
            type: type.DOUBLE
        }
    }, { timestamps : false })
}