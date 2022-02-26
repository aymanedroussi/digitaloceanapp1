import dbConnect from "../../../util/dbConnect"
import mongoose from 'mongoose'

const Linge=require('../../../models/Linge')
export default async function handler(req, res) {

    await dbConnect();

    if(!mongoose.connections[0].readyState){
        return res.status(400).json({status:"errorbd"});

   }else{
     // check if user exists in db 
     const linges= await Linge.find() // order by date ' plus récent '
     

   
  return res.status(201).json({linges: linges.length%6==0 ? linges.length/6 : Math.floor(linges.length/6)+1});
   }
    
  }