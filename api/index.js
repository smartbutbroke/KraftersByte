//packages
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');

//routes
// const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const logRoute = require('./routes/logs')

//invoking express
const app = express();

//dotenv configuration (gets data specified in .env to achieve abstraction)
dotenv.config();

//connecting to the mongoose database
mongoose.connect(process.env.mongo_link);
mongoose.connection.once('open', () => {
    console.log("Connected");
})

//middleware
app.use(express.json());
// app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/logs',logRoute);

app.get('/',(req,res)=>{
    res.send("welcome to homepage");
})

const port = process.env.Port;
app.listen(port,()=>{
    console.log(`backend server is running at http://localhost:${port}`)
});