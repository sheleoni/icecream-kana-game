import * as mongoose from "mongoose";
import IceCream from "@/models/iceCream";
import User from "@/models/user";
import {addInitialFlavors, addInitialIceCreamStack, initialTideLevel, initialIceCreamStack, addInitialTideLevel} from "@/utils/injectSeedData";
import tideLevel from "@/app/play/data/tideLevel";
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
        await addInitialTideLevel();
        console.log("added initial tide level")
        await updateAllUsers(); // update all user data upon login (connectDB) when needed
    } catch (error) {
        console.log(error, '← error message');
    }
};


const updateAllUsers = async () => {
    try {
        const users = await User.find({}); // get all users
        await Promise.all(
            users.map(async (user) => {
                // Make shallow clone of tideLevel and initialIceCreamStack to avoid same object _id across different users in mongoDB
                const clonedTideLevel = { ...tideLevel };
                const clonedInitialIceCreamStack = [...initialIceCreamStack];

                await User.updateOne(
                    { _id: user._id },
                    {
                        $set: {
                            "unlockedIceCreams": [
                                {
                                    iceCream: '64e8f67fcdf0a19aba869ce5',
                                    quantity: 2,
                                },
                                {
                                    iceCream: '64e8f67fcdf0a19aba869ceb',
                                    quantity: 7,
                                },
                            ],
                            "iceCreamStack": clonedInitialIceCreamStack,
                            "tideLevel": clonedTideLevel,
                        },
                    }
                );
            })
        );
    } catch (error) {
        console.log('An error occurred:', error);
    }
};
