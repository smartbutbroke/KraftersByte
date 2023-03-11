const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:5,
        max:15,
        unique:true
    },
    name:{
        type:String,
        required: true,
        max:25
    },
    password:{
        type:String,
        min:6,
        required: true
    },
    email:{
        type:String,
        required:true,
        min:6
    },
    profilePicture:{
        type:String,
        default:""
    },
    //array of users
    favourites:{
        type:Array,
        default:[]
    },
    //user account description
    description:{
        type:String,
        default:"",
        max:100
    },
    //array of logs
    saved:{
        type:Array,
        default:[]
    }
},
{timestamps:true}
);

module.exports = mongoose.model("User",UserSchema);