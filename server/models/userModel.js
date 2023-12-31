const mongoose = require("mongoose");

const userSchema =  mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        require: true,
        default: Date.now
    },
    address:{
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "address"}],
        default: [],
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    role:{
        type: String,
        required: true
    },
    sell: {
        type: [{type: mongoose.Types.ObjectId, ref: "products"}]
    },
    cart: {
        type: [{type: mongoose.Types.ObjectId, ref: "products"}]
    }
});

module.exports = {User: mongoose.model("user", userSchema), userSchema:userSchema};