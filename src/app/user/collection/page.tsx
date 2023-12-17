// 'use client'
// todo: prop interface

import {getServerSession} from "next-auth";
import getUserIceCream from "@/app/controllers/getUserIceCream";
import styles from './page.module.css';
import getUserTideLevel from "@/app/controllers/getUserTideLevel";

export const dynamic = "force-dynamic"
const CollectionOverview = async () => {
    const session = await getServerSession();
    const userTideLevel = getUserTideLevel();
    console.log(userTideLevel, 'USERRR TIDE LEVELLLLL')
    const userIceCreamCollection = await getUserIceCream();
    console.log(userIceCreamCollection, 'wowza!')
    return (
        <>
            Your ice-cream collection:
            {
                userIceCreamCollection?.map((flavour: any, index: any): any => {
                    return (
                        <p key={index} className={styles.iceCreamItem}>
                            {flavour.iceCream} you have {flavour.quantity}
                        </p>
                    )
                })
            }

        </>
    )
}

export default CollectionOverview;
