const router = require('express').Router();
const User = require('../models/User');
const Log = require('../models/Log');

//create a log
router.post('/',async (req,res)=>{
    const newLog = new Log(req.body);
    try{
        const savedLog = await newLog.save();
        res.status(200).json(savedLog);
    }catch(err){
        res.status(500).json(err);
    }
})

//update a log
router.put('/:id',async(req,res)=>{
    try{
        const log = Log.findById(req.params.id);
        if(log.username===req.body.id){
            await log.updateOne({$set:req.body});
            res.status(200).json("the log has been updated");
        }else{
            res.status(403).json("you can only update your own posts");   
        }
    }catch(err){
        res.status(500).json(err);
    }
})

//delete a log
router.delete('/:id',async(req,res)=>{
    try{
        const log = Log.findById(req.params.id);
        if(log.username === req.body.username){
            await log.deleteOne();
            res.status(200).json("the log has been deleted");
        }
        else{
            res.status(403).json("you can only delete your own logs");
        }
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;