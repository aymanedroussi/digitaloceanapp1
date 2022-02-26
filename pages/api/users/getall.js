import dbConnect from "../../../util/dbConnect"
import mongoose from 'mongoose'

const User=require('../../../models/User')
export default async function handler(req, res) {

    await dbConnect();

    if(!mongoose.connections[0].readyState){
        return res.status(400).json({status:"errorbd"});

   }else{
     // check if user exists in db 
     const users= await User.find() // order by date ' plus récent '
     

   
  return res.status(201).json({users: users.length%6==0 ? users.length/6 : Math.floor(users.length/6)+1});
   }
    
  }