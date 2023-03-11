const User = require('../models/User');
const router = require('express').Router();

//update user
router.put('/:id',async(req,res)=>{
    if(req.body.username === req.params.id){
        try{
            const user = await User.findOneAndUpdate({username:req.params.id},{
                $set : req.body,
            });
            res.status(200).json("account has been updated");
        }catch(err){
            return res.status(500).json(err);
        }
    }
    else{
        return res.status(403).json("you can update only your account");
    }
});

//delete user
router.delete('/:id',async(req,res)=>{
    if(req.body.username === req.params.id){
        try{
            const user = await User.findOneAndDelete({username:req.params.id});
            res.status(200).json("account has been deleted successfully");
        }catch(err){
            return res.status(500).json(err)
        }
    }
    else{
        return res.status(403).json("you can delete only your account");
    }
})

module.exports = router;