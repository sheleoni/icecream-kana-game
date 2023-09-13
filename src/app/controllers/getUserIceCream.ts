import {headers} from "next/headers";
import {connectDB} from "@/utils/database";
import {getServerSession} from "next-auth";
import User from "@/models/user";
import IceCream from "@/models/iceCream";
import {NextResponse} from "next/server";

export default async function getUserIceCream () {

    await connectDB();
    const session = await getServerSession(); // the headers must be passed in order to get the session in getServerSession
    const userEmail = session?.user?.email;

    let unlockedIceCream = [];

    if (userEmail) {
        const user = await User.findOne({
            email: userEmail
        });
        if (user) {
            unlockedIceCream = user.unlockedIceCreams
            console.log(`unlockedIceCream array for ${userEmail} is ${unlockedIceCream}`)

            // Fetch ice cream details for each unlocked ice cream
            const iceCreamIds = user.unlockedIceCreams.map((item: any) => item.iceCream);
            const iceCreamDetails = await IceCream.find({'_id': {$in: iceCreamIds}});

            // Map the IDs back to their full details
            const userIceCreamCollection = user.unlockedIceCreams.map((item: any) => {
                const details = iceCreamDetails.find(detail => detail._id.toString() === item.iceCream.toString());
                return {
                    iceCream: details.name,
                    imageURL: details.imageURL,
                    quantity: item.quantity,
                };
            });

            return userIceCreamCollection;
        }
    }
}
