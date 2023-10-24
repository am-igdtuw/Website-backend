import mongoose from "mongoose";
import validator from "validator";


const collaborateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    contactNumber: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    twitter: {
        type: String, 
    },
    linkedin: {
        type: String, 
    },
    instagram: {
        type: String, 
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});


export default mongoose.model("Collaborate", collaborateSchema, "Collaborate");