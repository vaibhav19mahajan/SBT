const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    employeeId: String
});
module.exports = mongoose.model('User', UserSchema);