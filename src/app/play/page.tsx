import PlayArea from "@/app/play/components/PlayArea/PlayArea";
import getUserTideLevel from "@/app/controllers/getUserTideLevel";
import {getServerSession} from "next-auth";
import Link from "next/link";
import React from "react";

const GamePage = async () => {
    const session = await getServerSession();
    if (!session) { return (
        <>
            <p>
                You are not logged in yet.
            </p>
            <Link
                href={"https://hiragana-icecream.sheleoni.com/"}
                style={{ color: "coral", fontSize: "4rem"}}
                target={"_blank"}
            >
                👉 Click me! 👈
            </Link>
            <p>
                Try out the game (in guest mode).
            </p>
        </>
    ) }

    let userTideLevelData = await getUserTideLevel();
    const stringifiedUserTideLevel = JSON.stringify(userTideLevelData);
    const userTideLevelArray = JSON.parse(stringifiedUserTideLevel);
    console.log(userTideLevelData, 'user tide level data')

    if (userTideLevelData.length === 0) {
        userTideLevelData = null;
    }
    const tideLevel = userTideLevelArray.reduce((accumulator: any, { kana, level }: any) => { // todo: replace :any type
        accumulator[kana] = level;
        return accumulator;
    }, {});

    return (
        <>
            <h1>Hello game page, this is server-rendered</h1>
            <PlayArea userTideLevel={tideLevel} />
        {/*    todo: cater to new users - if use does not have tideLevel stored, use the default tideLevel.js on the client */}
        </>
    );
};

export default GamePage;
