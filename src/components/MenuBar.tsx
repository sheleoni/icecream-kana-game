import React from "react";
import SignInButton from "@/components/SignInButton";
import styles from './menubar.module.css';
import Link from "next/link";


const MenuBar = () => {
    return (
    <>
        <header className={styles.menubar}>
            <SignInButton />
        </header>
        <p>
            <Link href={'/user'}>
                User
        </Link>
        </p>
        <p>
        <Link href={'/user/collection'}>
                Collection
        </Link>
        </p>
    </>
    )
}

export default MenuBar;
