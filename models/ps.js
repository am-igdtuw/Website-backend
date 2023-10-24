import mongoose from "mongoose";


const ProblemSatementSchema = new mongoose.Schema({
    locked:{
        type: Boolean,
        required: true,
        default: false,
    },
    domain: {
        type: String,
        required: true,
    },
    pstitle: {
        type: String,
        required: true,
    },
    psdesc: {
        type: String,
        required: true,
    },
});


export default mongoose.model("PS", ProblemSatementSchema, "PS");