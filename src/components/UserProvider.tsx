"use client"
import React, {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";

interface Props {
    children: ReactNode;
}

const UserProvider = (props: Props) => {
    return (
        <SessionProvider>
            {props.children}
        </SessionProvider>
    )
}

export default UserProvider;

