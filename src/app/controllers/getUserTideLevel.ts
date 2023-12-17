import {connectDB} from "@/utils/database";
import {getServerSession} from "next-auth";
import User from "@/models/user";
export default async function getUserTideLevel () {

    await connectDB();
    const session = await getServerSession(); // the headers must be passed in order to get the session in getServerSession
    const userEmail = session?.user?.email;

    let tideLevel = {};

    if (userEmail) {
        const user = await User.findOne({
            email: userEmail
        });
        if (user) {
            tideLevel = user.tideLevel
            console.log(tideLevel, 'user tide level')
            return tideLevel;
        }
    }
}
