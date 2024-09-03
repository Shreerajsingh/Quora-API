const mongoose = require('mongoose');
const {DB_URL, NODE_ENV} = require('./server.config');

async function connectToDB() {
    try {
        if(NODE_ENV == "development") {
            await mongoose.connect(DB_URL);
            console.log("Successfully connected to DB :)");
        }
    } catch (error) {
        console.log("Unable to Connect to the DB!");
        console.log(error);
    }
}

module.exports = connectToDB;