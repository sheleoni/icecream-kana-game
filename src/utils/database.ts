import * as mongoose from "mongoose";
import User from "@/models/user";
import {addInitialTideLevelForUser, initialIceCreamStack} from "@/utils/injectSeedData";
import {getServerSession} from "next-auth";

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

export const getUserIdByEmail = async (currentUserEmail?: string) => {
    const session = await getServerSession(); // the headers must be passed in order to get the session in getServerSession
    const userEmail = session?.user?.email || currentUserEmail;
        const user = await User.findOne({
            email: userEmail
        });
    return user._id;
}
export const updateCurrentUser = async (currentUserId: string, gameTideLevel: any, totalScore: Number, kanaScores: any) => { // todo: refine 'any' type here
    try {
        const user = await User.findById(currentUserId);
        if (!user) {
            console.log('User not found');
            return;
        }
        const userId = user._id;  // get user ID
        console.log(userId, 'found - the userId');
        // await addInitialTideLevelForUser(userId);

        const clonedKanaScores = Object.entries(kanaScores).map(([ kana, score]) => {
            return { kana, score }
        });
        const clonedTideLevel = Object.entries(gameTideLevel).map(([ kana, level]) => {
            return { kana, level };
        });
        const clonedInitialIceCreamStack = [...initialIceCreamStack];
        await User.updateOne(
            { _id: userId },
            {
                $set: {
                    "totalScore": totalScore,
                    "kanaScores": clonedKanaScores,
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
        console.log('ok update for this user is supposedly done!')
    } catch (error) {
        console.log('An error occurred:', error);
    }
};
