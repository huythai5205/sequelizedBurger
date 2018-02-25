const Sequelize = require('sequelize');
const evn = process.env.NODE_ENV || 'development';
const config = require('/../config/config.json')[env];
let connection;

if (config.use_env_variable) {
    connection = new Sequelize(process.env[config.use_env_variable]);
} else {
    connection = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = connection;