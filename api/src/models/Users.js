const {DataTypes, Sequelize} = require ('sequelize')


module.exports = ( sequelize ) => {
    sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            auroIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true  
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}