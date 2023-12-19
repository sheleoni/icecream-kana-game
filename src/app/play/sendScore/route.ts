import {connectDB, getUserIdByEmail, updateCurrentUser} from "@/utils/database";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";

export const dynamic = 'force-dynamic';
export async function POST() {
    await connectDB();
    const session = await getServerSession();
    console.log(session?.user, 'session.user!!!!');
    const userId = await getUserIdByEmail();
    console.log(userId, 'get User Id By Email results!');
    try {
    await updateCurrentUser(userId);
    } catch (error) {
        console.log(error);
    }
    return NextResponse.json({ message: "This Worked", success: true });
}
