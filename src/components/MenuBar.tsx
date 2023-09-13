import React from "react";
import SignInButton from "@/components/SignInButton";
import styles from './menubar.module.css';
import Link from "next/link";


const MenuBar = () => {
    return (
    <>
        <header className={styles.menubar}>
            <SignInButton />
        <p>🍔Links:</p>
        <ul>
            <li>
                <Link href={'/'} className={styles.menuLink}>
                    Home (/)
                </Link>
            </li>
            <li>
                <Link href={'/user'} className={styles.menuLink}>
                    /User
                </Link>
            </li>
            <li>
                <Link href={'/user/collection'} className={styles.menuLink}>
                    /Collection
                </Link>
            </li>
        </ul>
        </header>
    </>
    )
}

export default MenuBar;
