import mongoose from "mongoose";
import dotenv from 'dotenv';
import "./models/Video";
import "./models/Comment";
dotenv.config(); 

mongoose.connect("mongodb://localhost:27017/sangilTube",{

    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology: true
});//data베이스의 주소

const db = mongoose.connection;

const handleOpen= () =>{
    console.log("connected to db");
}
db.once("open", handleOpen);


