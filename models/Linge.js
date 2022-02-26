import mongoose from 'mongoose'

const LingeSchema = new mongoose.Schema({
  serviceNom: String,
  responsableNom:String,
  quantity: Number,
  type:String,
  etat:String,
  dateEnvoi:Date,
  tempsEnvoi:String,
  dateRecuperation:Date,
  tempsRecuperation:String,
  status:String,
  dateTraitement:Date,
  tempsTraitement:String,
  patientNom:String,
  commentaire:String,
  patientNomRemis:String,
  dateRemise:Date,
  heureDeRemise:String,
  commentaire2:String

})

module.exports = mongoose.models.Linge || mongoose.model('Linge', LingeSchema)