import {connectDB, getUserIdByEmail, updateCurrentUser} from "@/utils/database";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";

export const dynamic = 'force-dynamic';
export async function POST(req: Request) { // todo: refine :any type
    await connectDB();
    const session = await getServerSession();
    console.log(session?.user, 'session.user!!!!');
    const userId = await getUserIdByEmail();
    console.log(userId, 'get User Id By Email results!');
    try {
    const requestObjectInJSON = await req.json(); // the JS object containing the request body
    await updateCurrentUser(userId, requestObjectInJSON.tideLevel, requestObjectInJSON.totalScore, requestObjectInJSON.kanaScores, requestObjectInJSON.iceCreamStack);
    } catch (error) {
        console.log(error);
    }
    return NextResponse.json({ message: "This Worked", success: true });
}
