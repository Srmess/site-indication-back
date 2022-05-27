const Sequelize = require('sequelize');

const sequelize = new Sequelize('site_form', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}