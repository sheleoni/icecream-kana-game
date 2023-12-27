// todo: prop interface

import {getServerSession} from "next-auth";
import getUserIceCream from "@/app/controllers/getUserIceCream";
import styles from './page.module.css';
import getUserTideLevel from "@/app/controllers/getUserTideLevel";
import getUserIceCreamCollection from "@/app/controllers/getUserIceCreamCollection";
import Image from "next/image";
import DropArea from "@/app/user/collection/components/DropArea";

export const dynamic = "force-dynamic"

// todo: get collection data here
const CollectionOverview = async () => {
    const session = await getServerSession();
    const userIceCreamCollectionNEW = await getUserIceCreamCollection();
    console.log(userIceCreamCollectionNEW, 'USER ICE CREAM NEWWWWW');
    console.log(userIceCreamCollectionNEW.length, 'LENGTH OF COLLECTION')
    const userTideLevel = await getUserTideLevel();
    console.log(userTideLevel, 'USERRR TIDE LEVELLLLL')
    const userIceCreamCollection = await getUserIceCream();
    console.log(userIceCreamCollection, 'wowza!')
    return (
        <>
            Your ice-cream collection:
            {
                userIceCreamCollection?.map((flavour: any, index: any): any => { // todo: refine any type
                    return (
                        <p key={index} className={styles.iceCreamItem}>
                            {flavour.iceCream} you have {flavour.quantity}
                        </p>
                    )
                })
            }
            <DropArea userIceCreamCollection={userIceCreamCollectionNEW} />
        </>
    )
}

export default CollectionOverview;
