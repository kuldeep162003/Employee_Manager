const mongoose = require('mongoose');

require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;

const dbConnect = () => {
    mongoose.connect(DATABASE_URL)
    .then(() => {
        return console.log(`Database Connection Established Successfully`);
    })
    .catch(e => {
        console.log("Error Occured: ",e.message);
        console.error(e);
        process.exit(1);
    })
}

module.exports = dbConnect;