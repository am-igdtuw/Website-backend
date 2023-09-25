import mongoose from "mongoose";

const Database = () => {
    mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`MongoDB Connected Successfully`);
    }).catch((error) => {
        console.error(`MongoDB Connection Error: ${error}`);
    });
}

export default Database;
