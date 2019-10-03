const mongoose = require("mongoose");
const dbUrl = require('./config/config').DB_URL;

mongoose.Promise = global.Promise;

exports.connect = () => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useFindAndModify: false })
        .then(() => {
            console.log("Connected to mongodb server.....");
        })
        .catch((err) => {
            console.log(`Failed to connected to mongodb server: ${err}`);
            process.exit();
        });
}

