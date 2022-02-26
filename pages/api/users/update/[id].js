import dbConnect from "../../../../util/dbConnect"
import mongoose from 'mongoose'

const User=require('../../../../models/User')
export default async function handler(req, res) {
    const { id } = req.query

    await dbConnect();

    if(!mongoose.connections[0].readyState){
        return res.status(400).json({status:"errorbd"});

   }else{
     // check if user exists in db 
     const newUser= await User.findOne({ _id: id })
     const user= await User.findOneAndUpdate({ _id: id }, { active:!newUser.active})// order by date ' plus récent '
     
    
   
  return res.status(201).json({user:user});
   }
    
  }