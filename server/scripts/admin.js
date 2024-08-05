const FormDataModel = require ('../models/user.model');
const bcrypt = require('bcrypt');

async function createAdminAccount(){
    try{
        const existingAdmin = await FormDataModel.findOne({email: "admin@admin.com"});
        
        if(!existingAdmin){
            const newAdmin = new FormDataModel({
                email: "admin@admin.com",
                name: "Admin",
                password: await bcrypt.hash("admin",10),
                role: "admin"
            })
            await newAdmin.save();
            console.log("Admin account created succesfully");
        }else{
            console.log("Admin already exists");
        }
    }catch(error){
        console.error(error.message);
    }
}

module.exports = createAdminAccount;