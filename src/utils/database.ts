import * as mongoose from "mongoose";
import IceCream from "@/models/iceCream";
import User from "@/models/user";
import {addInitialFlavors, addInitialIceCreamStack, initialIceCreamStack} from "@/utils/injectSeedData";
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING!, {
            // todo: Getting errors for useNewUrlParser and useUnifiedTopology. Research later.
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            dbName: process.env.DB_NAME,
        });
        console.log("connected to MongoDB!");
        // await addInitialFlavors();
        await addInitialIceCreamStack(); // todo: comment this line out and see if it works fine without this function
        // todo: addInitialTideLevel too, and use updateAllUsers to update the user schema to inject that seed data
        // todo: fix bug where ice cream stack seed data has not been added
        await updateAllUsers(); // update all user data upon login (connectDB) when needed
    } catch (error) {
        console.log(error);
    }
};

const updateAllUsers = async () => { // a test function for adding items to the unlockedIceCream array in the database
    try {
        const result = await User.updateMany(
            {}, // Empty filter, so it should update all documents
            { $set: {
                "unlockedIceCreams": [
                    {
                    iceCream: '64e8f67fcdf0a19aba869ce5',
                    // iceCream: 'vanilla',
                    quantity: 2,
                    },
                    {
                    iceCream: '64e8f67fcdf0a19aba869ceb',
                    // iceCream: 'strawberry',
                    quantity: 7,
                    },
                ],
                "iceCreamStack": initialIceCreamStack,
                // 🎃 add more fields for seeding data here
                // todo: addInitialTideLevel too, and use updateAllUsers to update the user schema to inject that seed data
                }
            } // Setting the "newFieldTest" to an empty array
        ).exec();
        console.log('Update all users result:', result);
    } catch (error) {
        console.log('An error occurred:', error);
    }
};
