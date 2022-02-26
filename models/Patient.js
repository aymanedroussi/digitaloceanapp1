
import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema({
    IPP: {
        type: String
    },
    SojournNb: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthDate: {
        type: Date
    },
    maritalStatus: {
        type: String
    },
    nationality: {
        type: String
    },
    phonecode:{
        type:String
    },
    phoneNumber: {
        type: String
    },
    bloodType: {
        type: String
    },
    vaccinated: {
        type: Boolean
    },
    vaccinationDate: {
        type: Date
    },
    medicalAntecedents: {
        type: Array,
    },
    chirurgicalAntecedents: {
        type: Array,
    },
    allergyType: {
        type: String
    },
    allergies: {
        type: Array
    }

    
});

module.exports = mongoose.models.Patient || mongoose.model('Patient', PatientSchema)