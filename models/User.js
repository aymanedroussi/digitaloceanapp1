import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email:String,
  password:String,
  active:Boolean,
  role:String //ROLE_MENAGE format ( ROLE_MENAGE,ROLE_ADMIN,ROLE_BLANCHISSERIE)
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)