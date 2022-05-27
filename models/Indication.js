const db = require("./db");

const Indication = db.sequelize.define('Indications', {
    name:{
        type: db.Sequelize.STRING
    },
    number:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    }
})

module.exports = Indication;

// Indication.sync({force: true});