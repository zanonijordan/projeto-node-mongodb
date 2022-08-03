const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true,
        minLength: '7',

    }
});

//Model sempre em maiuscula
const UserModel = mongoose.model("User", userSchema);
// Veja que se exporta como module
module.exports = UserModel;