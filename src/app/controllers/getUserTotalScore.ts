import {connectDB} from "@/utils/database";
import {getServerSession} from "next-auth";
import User from "@/models/user";

export default async function getUserTotalScore () {

    await connectDB();
    const session = await getServerSession(); // the headers must be passed in order to get the session in getServerSession
    const userEmail = session?.user?.email;

    console.log("ACCESSED getUserTotalScore")

    if (userEmail) {
        const user = await User.findOne({
            email: userEmail
        });
        // todo: understand why .stringify and .parse is needed to access .totalScore in this object
        if (user) {
            const userStringified = JSON.stringify(user)
            const userParsed = JSON.parse(userStringified);
            console.log(userParsed.totalScore, 'total score in gUTotalScore!')
            return userParsed.totalScore;
        }
    }
}
