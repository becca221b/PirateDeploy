const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String,
    role: {type: String, enum:["admin", "customer"], default: "customer"}
})

const UserDataModel = mongoose.model('log_reg_form', UserDataSchema);

module.exports = UserDataModel;