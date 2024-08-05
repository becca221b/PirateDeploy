const userService = require ('../services/user.service');

//Registrar un nuevo usuario
async function createUser(req, res){
    const userData = req.body;
    const {name, email, password} = userData;
    try{
        
        const existingUser = await userService.findUserByEmail(email);

        if (existingUser) {
            return res.status(200).json({ message: 'Already registered' });
        }
        // To post / insert data into database
        const user = await userService.createUser(userData);
        res.status(201).json({user:user, message:"User created succesfully"})
    }catch(error){
        console.log(error);
        res.status(400).json({message:error.message})
    }
}


//Enviar datos para logueo

async function loginUser(req, res){
    try{
        const {email, password} = req.body;
        const token= await userService.loginUser(email, password);
        res.json({token: token});
    }catch(error){
        //console.log(error);
        res.status(401).json({message:"Invalid credentials"});
    }
}



module.exports= {
    createUser, loginUser
};

