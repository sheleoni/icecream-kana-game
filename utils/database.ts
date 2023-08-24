import * as mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING!, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            dbName: process.env.DB_NAME
        });
        console.log("connected to MongoDB!");
    } catch (error) {
        console.log(error);
    }
}
