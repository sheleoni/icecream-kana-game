'use client';
import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import styles from './signinbutton.module.css';

function SignInButton() {
    const { data: session } = useSession(); // useSession is a client component

    // signed-in state
    if (session && session.user) {
        const userFirstName = session.user.name?.split(" ")[0];
        return (
        <>
            <p className={styles.greetingContainer}>
            <p className={styles.greeting}> Hi { userFirstName }</p>
            <button className={styles.signInButton} onClick={() => signOut()}>
                Sign Out
            </button>
            </p>
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
