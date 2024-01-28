const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const mongoDBUri = process.env.MONGODB_URI || "localhost";

mongoose.connect(`mongodb://${mongoDBUri}:27017/BlogApp`).then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})