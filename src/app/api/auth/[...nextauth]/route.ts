import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import {connectDB} from "../../../../../utils/database";
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
                // create a new user if user does not already exist
                    console.log('creating new user!');
                    const user = await User.create({
                        email: profile!.email,
                        name: profile!.name,
                        avatar: profile!.picture,
                    })
                }
                return true;
             // store signIn data to mognodb here?
             // pass object properties here to UserSchema
             } catch (error) {
                console.log(error);
                return false;
             }
        }
    }
})

export { handler as GET, handler as POST };
