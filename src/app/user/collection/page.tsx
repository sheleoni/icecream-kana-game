// 'use client'
// todo: prop interface
// todo: use useSession()

import {getServerSession} from "next-auth";
import getUserIceCream from "@/app/controllers/getUserIceCream";

export const dynamic = "force-dynamic"
const CollectionOverview = async () => {
    const session = getServerSession();
    const userIceCreamCollection = await getUserIceCream();
    console.log(userIceCreamCollection[1])
    return (
        <>
            Your ice-cream collection
            {
                userIceCreamCollection?.map((flavour: any, index: any): any => {
                    return (
                        <p key={index}>
                            {flavour.name}
                        </p>
                    )
                })
            }

        </>
    )
}

export default CollectionOverview;
