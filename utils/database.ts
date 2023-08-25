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
        await addInitialFlavors();
    } catch (error) {
        console.log(error);
    }
};

const addInitialFlavors = async () => {
    const initialFlavors = [
        { id: '1', name: 'Vanilla', imageURL: 'vanilla.png'},
        { id: '2', name: 'Chocolate', imageURL: 'chocolate.png'},
        { id: '3', name: 'Strawberry', imageURL: 'strawberry.png'},
        { id: '4', name: 'OrangeSorbet', imageURL: 'orangeSorbet.png'},
    ];

    for (const flavor of initialFlavors) {
        const existingFlavor = await IceCream.findOne({ id: flavor.id });
        if (!existingFlavor) {
            const iceCream = new IceCream(flavor);
            await iceCream.save();
            console.log(`Added ${flavor.name} ice-cream to collection!`)
        }
    }

}
