import React from "react";
import SignInButton from "@/components/SignInButton";
import styles from './menubar.module.css';
import Link from "next/link";


const MenuBar = () => {
    return (
    <React.Fragment>
        <header className={styles.menubar}>
            <SignInButton />
        <p className={styles.linkIndicator}>🍔Links:</p>
        <ul className={styles.navMenu}>
            <li>
                <Link href={'/'} className={styles.menuLink}>
                    Home (public)
                </Link>
            </li>
            <li>
                <Link href={'/play'} className={styles.menuLink}>
                    /Play (public)
                </Link>
            </li>
            <li>
                <Link href={'/user'} className={styles.menuLink}>
                    /User (private)
                </Link>
            </li>
            <li>
                <Link href={'/user/collection'} className={styles.menuLink}>
                    /Collection (private)
                </Link>
            </li>
            <li>
                <Link href={'/worksheets'} className={styles.menuLink}>
                    /Worksheets
                </Link>
            </li>
        </ul>
        </header>
    </React.Fragment>
    )
}

export default MenuBar;
