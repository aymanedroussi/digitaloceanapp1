import dbConnect from "../../../util/dbConnect"
import mongoose from 'mongoose'

const Linge=require('../../../models/Linge')
export default async function handler(req, res) {
  await dbConnect();

 

 
if(!mongoose.connections[0].readyState){
        return res.status(400).json({status:"errorbd"});

   }

    else{
        const linge=new Linge(req.body);
        await linge.save().then(()=>console.log("saved!")).catch((error)=>console.log(`erreur lors du save ${error}`));
            
      
        return res.status(201).json({status:"created"});
    }
    
     
     
   
    
   

  // save
  
   
   
  }
  