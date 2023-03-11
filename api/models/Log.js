const mongoose = require('mongoose')

const LogSchema = new mongoose.Schema({
    //log owner
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        default:"New Log",
        required:true,
        max:20
    },
    // access is private if value is true
    access:{
        type:Boolean,
        default: false
    },
    location:{
        type:String,
        required:true,
    },
    //array of users who liked
    likes:{
        type:Array,
        default:[]
    },
    desc:{
        type:String,
        max:500,
    }
})

module.exports = mongoose.model("Log",LogSchema)