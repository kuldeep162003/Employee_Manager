const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxLength: 130
    },
    email:{
        type: String,
        required: true,
        maxLength: 150,
        unique: true
    },
    title: {
		type: String,
		required: true,
	},
	department: {
		type: String,
		required: true,
		maxLength: 20,
	},
	role: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	}
})

module.exports = mongoose.model("User", userSchema);