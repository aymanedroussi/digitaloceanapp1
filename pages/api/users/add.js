import dbConnect from "../../../util/dbConnect"
const Joi = require('joi');
const bcrypt = require('bcryptjs'); 
import mongoose from 'mongoose'

const User=require('../../../models/User')
export default async function handler(req, res) {
  await dbConnect();

  

  
  //Validation
  const schema = Joi.object({
    nom: Joi.string()
    .required().messages({
      'string.empty':`Veuillez saisir votre nom `,
      'any.required': `Veuillez saisir votre nom `
    }),
    prenom: Joi.string()
    .required().messages({
      'string.empty':`Veuillez saisir votre prénom `,
      'any.required': `Veuillez saisir votre prénom `
    }),
    email: Joi.string()
    .required().messages({
      'string.empty': `Veuillez saisir votre email address `,
      'any.required': `Veuillez saisir votre email address `
    }),
    password: Joi.string()
    .required().messages({
      'string.empty':`Veuillez saisir votre mot de passe `,
      'any.required': `Veuillez saisir votre mot de passe `,
    })
  ,
    role:Joi.required().messages({
      'string.empty':`Veuillez cocher votre role`,
      'any.required': `Veuillez cocher votre role `,
    }),
    active:Joi.required()
});

   const value=schema.validate(req.body)
 
   if(value.error!=undefined){
    const error=value.error.details[0].message
    
    return res.status(400).json({error:error});
   
   }else if(!mongoose.connections[0].readyState){
        return res.status(400).json({status:"errorbd"});

   }else{
     // check if user exists in db 
     const user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.status(400).json({status:"exist"});
      ;
    }
    bcrypt.hash(req.body.password, 10,(err,hash)=>{
      req.body.password=hash;
      const newUser=new User(req.body);
  newUser.save().then(()=>console.log("saved!")).catch((error)=>console.log(`erreur lors du save ${error}`));
      
  });
  return res.status(201).json({status:"created"});
   }
    
   

  // save
  
   
   
  }
  