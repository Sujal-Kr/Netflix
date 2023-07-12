import mongoose from "mongoose";

export default function connect(){
  try{
    mongoose.connect(process.env.M_URL).then(database=>{
      console.log("connection established")
    })
    
  }catch(err){
    console.error("from database",err.message)
  }
}