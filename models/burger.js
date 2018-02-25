const Sequelize = require('sequelize');
const connection = require('../config/connection.js');

const Burger = connection.define('burgers', {
    burger_name: {
        type: Sequelize.STRING
    },
    devoured: {
        type: Sequelize.BOOLEAN
    }
});

Burger.sync();

module.exports = Burger;