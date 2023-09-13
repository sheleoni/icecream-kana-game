import {connectDB} from "@/utils/database";
import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import User from '@/models/user';
import IceCream from "@/models/iceCream";

// todo: GET all available ice-cream flavors
// todo: then, GET all ice-cream flavors unlocked by the user
export async function GET(request: NextRequest) {
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
            const iceCreamDetails = await IceCream.find({ '_id': { $in: iceCreamIds } });

            // Map the IDs back to their full details
            const userIceCreamCollection = user.unlockedIceCreams.map((item: any) => {
                const details = iceCreamDetails.find(detail => detail._id.toString() === item.iceCream.toString());
                return {
                    iceCream: details.name,  // Assuming 'name' is the field in IceCream model
                    imageURL: details.imageURL,  // Assuming 'imageURL' is the field in IceCream model
                    quantity: item.quantity,
                };
            });

            return NextResponse.json(userIceCreamCollection)


        }
    }



    // static test data:
    // const allIceCreamFlavors = [
    //     {
    //         id: "adjfoibm3q2904i0rjf",
    //         name: 'chocolate',
    //     },
    //     {
    //         id: "py6907tihjm3q2904i0rjf",
    //         name: 'strawberry',
    //     },
    //     {
    //         id: "058yhwueobdosfj",
    //         name: 'kiwi',
    //     }
    // ]
    // return NextResponse.json({allIceCreamFlavors});
    // return NextResponse.json(userIceCreamCollection)
}
