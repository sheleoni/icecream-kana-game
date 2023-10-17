import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import {connectDB, updateCurrentUser} from "@/utils/database";
import User from "@/models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        })
    ],
    callbacks: {
        async session({ session }) {
            return session
        },
        async signIn({ profile }) {
             console.log(profile);
             try {
                await connectDB();
                const userExists = await User.findOne({ email: profile?.email});
                    if (!userExists) {
                    // create a new user if it does not already exist
                        console.log('creating new user!');
                        const user = await User.create({
                            email: profile!.email,
                            name: profile!.name,
                            // avatar: profile!.picture,
                        })
                    }
                const user = userExists;
                const userId = user._id;
                console.log(userExists, `userExists constant at next-auth route.ts`);
                console.log(user._id, `user _id`);
                // await updateCurrentUser(userId);
                return true;
             } catch (error) {
                console.log(error);
                return false;
             }
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST };
