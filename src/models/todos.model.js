const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING(10),
        allowNull: false
    }
})

module.exports = Todos;