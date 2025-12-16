const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require('../utils/generate_token.js');


// User resgistration
const register = async (request, response) => {
    const {name, email, password} = request.body;
    try {
        const userExists = await User.findOne({email});
        if (userExists) {
            return response.status(400).json({
                message: "User already exists!"
            });
        }
         const user = await User.create({name, email, password});
        return response.status(201).json({token: auth(user._id)});
    } catch(error) {
        response.status(500).json({ message: 'Server error' });
        console.log("Error while registering user!", error);
    }
}



module.exports = {
    register,
}