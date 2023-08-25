import * as mongoose from "mongoose";
import IceCream from "@/models/iceCream";
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING!, {
            // todo: Getting errors for useNewUrlParser and useUnifiedTopology. Research later.
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            dbName: process.env.DB_NAME,
        });
        console.log("connected to MongoDB!");
        const vanilla = new IceCream({ id: '1', name: 'Vanilla', imageURL: 'url_here' });
        vanilla.save();
        console.log("saved vailla ice cream to collection!")
    } catch (error) {
        console.log(error);
    }
}
