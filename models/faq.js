import mongoose from "mongoose";
import validator from "validator";
import moment from "moment-timezone";


const faqQuerySchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: moment.tz('Asia/Kolkata').format(),
    },
});


export default mongoose.model("Faq", faqQuerySchema, "Faq");
