const router = require('express').Router();
const User = require('../models/User');

//REGISTER
router.post('/register',async(req,res)=>{
    try{
        //encryption
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(req.body.password,salt);
        
        //creating user
        const newUser = new User({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            description : req.body.description,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
});

module.exports = router;