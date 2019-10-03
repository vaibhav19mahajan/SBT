// const mongoose = require("mongoose");
// const dbUrl = require('../config/config').DB_URL;
const User = require("./user.model");

// mongoose.Promise = global.Promise;

// mongoose.connect(dbUrl, { useNewUrlParser: true })
//     .then(() => {
//         console.log("Connected to mongodb server.....");
//     })
//     .catch((err) => {
//         console.log(`Failed to connected to mongodb server: ${err}`);
//         process.exit();
//     });

exports.create = (data, onCompleteCB, onErrorCB) => {
    let user = new User(data);
    user.save().then(onCompleteCB).catch(onErrorCB);
};

exports.findAll = (onCompleteCB, onErrorCB) => {
    User.find().then(onCompleteCB).catch(onErrorCB);
};

exports.findById = (id, onCompleteCB, onErrorCB) => {
    User.findById(id).then(onCompleteCB).catch(onErrorCB);
};

exports.update = (data, onCompleteCB, onErrorCB) => {
    console.log(data);
    User.findByIdAndUpdate(data._id, data, { new: true }).then(onCompleteCB).catch(onErrorCB);
};

exports.delete = (id, onCompleteCB, onErrorCB) => {
    User.findById(id).then((user) => {
        user.remove();
        onCompleteCB(user);
    }).catch(onErrorCB);
};