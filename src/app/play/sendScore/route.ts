import {connectDB, updateCurrentUser} from "@/utils/database";
import {NextResponse} from "next/server";

export const dynamic = 'force-dynamic';
export async function POST() {
    console.log("hello you have posted")
    await connectDB();

    await updateCurrentUser('64e7a35bf3b19fa4448640e4');
    //
    // const res = await fetch('theURL', {
    //  method: 'POST',
    //  headers: {
    //      'Content-Type': 'application/json',
    //      'API-Key': process.env.DB_CONNECTION_STRING!,
    //  },
    //  // connect to the DB
    //  body: JSON.stringify(1234), // whatever the score is
    // }) // the mongoDB api URL

    // return Response.json(res)
    return NextResponse.json({ message: "This Worked", success: true });

}
