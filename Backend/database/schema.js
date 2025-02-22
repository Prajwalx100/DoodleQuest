const mongoose = require("mongoose");

require('dotenv').config()
mongoose.connect(process.env.MONGO_URL);


const userSchema = new mongoose.Schema({
    userName: String,
    userId: String,
    points: Number,
    room : String 
}); 


const User = mongoose.model("User", userSchema);

module.exports = { User };  