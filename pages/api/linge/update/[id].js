


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
     let date=new Date();
     let hour=date.getHours();
     /*
     if(hour==23){
       hour=0
     }
     else{
       hour++;// because it's utc by default 
     }
     */
     const newLinge= await Linge.findOne({ _id: id })
     
     let newStatus="";
   if(newLinge.status=="traité"){
    newStatus="remis";

    
    const linge= await Linge.findOneAndUpdate({ _id: id }, {commentaire2:req.body.commentaire2,patientNomRemis:req.body.patientNomRemis,status: newStatus,dateRemise:date,heureDeRemise:`${hour<=9 ?`0${hour}`: hour }:${date.getMinutes()<=9 ? `0${date.getMinutes()}`: date.getMinutes() }`})// order by date ' plus récent '
    console.log("remis")
   }
   else{
    newStatus="traité";
    const linge= await Linge.findOneAndUpdate({ _id: id }, {commentaire2:req.body.commentaire2,patientNomRemis:req.body.patientNomRemis,status: newStatus,dateTraitement:date,tempsTraitement:`${hour<=9 ?`0${hour}`: hour }:${date.getMinutes()<=9 ? `0${date.getMinutes()}`: date.getMinutes() }`})// order by date ' plus récent '
    console.log("traité")
   }
      

     
     
    
  return res.status(201).json({linge:newLinge});
  }}
    
  
   