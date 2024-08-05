const FormDataModel = require ('../models/user.model');
const bcrypt = require("bcrypt");
const {generateToken} = require('../utils/jwtUtils');

async function findUserByEmail(email) {
    return await FormDataModel.findOne({ email });
}

async function createUser(userData){
    const {name, email, password} = userData;
    const hashedPassword = await bcrypt.hash(password,10);
    
    const createdUser = new FormDataModel({
        name,
        email,
        password: hashedPassword,
        role: "customer"
    });

    
    const savedUser = await createdUser.save();
    return savedUser;    
}

//module.exports = {createUser, findUserByEmail};

async function loginUser(email, password){
    try{
        const existingUser = await FormDataModel.findOne({email})
        if(!existingUser){
            throw new Error("User not found");
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordValid){
            throw new Error("Incorrect password")
        }
        const token = generateToken(existingUser);
        return token;
    }catch(error){
        throw new Error("Invalid credentials");
    }
}


module.exports = {createUser, findUserByEmail, loginUser}