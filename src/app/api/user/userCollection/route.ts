import {connectDB} from "@/utils/database";
import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";

// todo: GET all available ice-cream flavors
// todo: then, GET all ice-cream flavors unlocked by the user
export async function GET(request: NextRequest) {
    // await connectDB();
    const allIceCreamFlavors = [
        {
            id: "adjfoibm3q2904i0rjf",
            name: 'chocolate',
        },
        {
            id: "py6907tihjm3q2904i0rjf",
            name: 'strawberry',
        },
        {
            id: "058yhwueobdosfj",
            name: 'kiwi',
        }
    ]
    // return NextResponse.json({allIceCreamFlavors});
    return NextResponse.json(allIceCreamFlavors)
}
