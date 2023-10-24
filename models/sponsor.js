import mongoose from "mongoose";
import validator from "validator";
import moment from "moment-timezone";


const sponsorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    altEmail:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    company: {
        type: String,
        required: true,
    },
    contactNumber: {
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
        default: moment.tz('Asia/Kolkata').format(),
    },
});



export default mongoose.model("Sponsor", sponsorSchema, "Sponsor");