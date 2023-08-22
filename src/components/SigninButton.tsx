'use client';
import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";

function SigninButton() {
    const { data: session } = useSession(); // useSession is a client component


    // signed-in state
    if (session && session.user) {
        return (
        <>
            <p> Hello { session.user.name }</p>
            <button onClick={() => signOut()}>
                Sign Out~
            </button>
        </>
        )
    }

    return (
        <>
        {/*signed out state*/}
         <button onClick={() => signIn()}>
             Sign In!
         </button>
        </>
    )
}

export default SigninButton;
