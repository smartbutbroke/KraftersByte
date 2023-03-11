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

//get a user
router.get('/:id',async(req,res)=>{
    try{
        const user = await User.find({username:req.params.username});
        const{password,updatedAt, ...other} = user._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json();
    }
});

//add a user to favourites or to remove
router.put('/:id/favourite',async(req,res)=>{
    if(req.body.username != req.params.id){
        try{
            const currentUser = await User.find({username:req.body.username});
            if(!user.followers.includes(req.body.username)){
                await currentUser.updateOne({$push:{favourites:req.params.id}});
                res.status(200).json("the user was added to favourites");
            }
            else{
                await currentUser.updateOne({$pull:{favourites:req.params.id}});
                res.status(200).json("the user was removed from favourites")
            }
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("you cannot follow yourself");
    }
})

module.exports = router;