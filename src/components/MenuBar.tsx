import React from "react";
import SignInButton from "@/components/SignInButton";
import styles from './menubar.module.css'

const MenuBar = () => {
    return (
    <header className={styles.menubar}>
        <SignInButton />
    </header>
    )
}

export default MenuBar;
