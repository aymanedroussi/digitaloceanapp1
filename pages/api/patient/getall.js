import dbConnect from "../../../util/dbConnect"
import mongoose from 'mongoose'
const Patient=require('../../../models/Patient')


export default async function handler(req, res) {

  await mongoose.disconnect().then(()=>console.log("disconnected from dossier patient"));
    const db = await mongoose.connect(process.env.MONGODB_PATIENT_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
      }).then((db)=>{console.log("db is connected");
      
    }).catch((error)=>{
      console.log("connection db error");
      
    })
    
   
    const patients= await Patient.find() // order by date ' plus récent '
    await mongoose.disconnect().then(()=>console.log("disconnected from dossier patient"));
   
  return res.status(201).json({patients: patients});
   
    
  }