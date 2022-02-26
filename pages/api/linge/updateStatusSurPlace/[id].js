import dbConnect from "../../../../util/dbConnect"
import mongoose from 'mongoose'

const Linge=require('../../../../models/Linge')
export default async function handler(req, res) {
    const { id } = req.query

    await dbConnect();

    if(!mongoose.connections[0].readyState){
        return res.status(400).json({status:"errorbd"});

   }else{
     // check if user exists in db 
    
     const newLinge= await Linge.findOne({ _id: id })
     
     let newStatus="";

       
      newStatus="En cours de traitement sur place";
      const linge= await Linge.findOneAndUpdate({ _id: id }, { status: newStatus})// order by date ' plus récent '

     
     
    
  return res.status(201).json({linge:newLinge});
   }
    
  }