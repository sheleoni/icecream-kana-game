import * as mongoose from "mongoose";
import User from "@/models/user";
import {addInitialTideLevelForUser, initialIceCreamStack} from "@/utils/injectSeedData";
import tideLevel from "@/app/play/data/tideLevel";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING!, {
            dbName: process.env.DB_NAME,
        });
        console.log("connected to MongoDB!");
    } catch (error) {
        console.log(error, '← error message');
    }
};

export const updateCurrentUser = async (currentUserId: string) => {
    try {
        const user = await User.findById(currentUserId);
        if (!user) {
            console.log('User not found');
            return;
        }
        const userId = user._id;  // get user ID
        console.log(userId, 'the userId');
        await addInitialTideLevelForUser(userId);
        const clonedTideLevel = { ...tideLevel };
        const clonedInitialIceCreamStack = [...initialIceCreamStack];
        await User.updateOne(
            { _id: userId },
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
        console.log(clonedTideLevel, 'clonedTideLevel')
        console.log('ok update for this user is supposedly done!')

    } catch (error) {
        console.log('An error occurred:', error);
    }
};
