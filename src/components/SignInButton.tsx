'use client';
import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import styles from './signinbutton.module.css';

function SignInButton() {
    const { data: session } = useSession(); // useSession is a client component


    // signed-in state
    if (session && session.user) {
        return (
        <>
            <p> Hello { session.user.name }</p>
            <button className={styles.signInButton} onClick={() => signOut()}>
                Sign Out~
            </button>
        </>
        )
    }

    return (
        <>
        {/*signed out state*/}
         <button className={`${styles.signInButton} ${styles.signIn}`} onClick={() => signIn()}>
             Sign In!
         </button>
        </>
    )
}

export default SignInButton;
