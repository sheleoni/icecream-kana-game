'use client'

import QuestionWord from "@/components/QuestionWord";
import Bubbles from "@/components/Bubbles";
import Hexagons from "@/components/Hexagons";
import IceCreamStack from "@/components/IceCreamStack";
import characterList from "@/letterData/characterList";
import {useSession} from "next-auth/react";
import Link from 'next/link';
const Play = () => {
    const { data: session } = useSession(); // useSession is a client component

    const generateQuestion = () => {
        const randomIndex = Math.floor(Math.random() * characterList.length);
        return characterList[randomIndex]
    }

    const currentQuestionLetter = generateQuestion();
    console.log(currentQuestionLetter, `current question`)
    if (session && session.user) {
        return (
            <>
                <p>
                    <QuestionWord currentQuestionLetter={currentQuestionLetter} />
                </p>
                    <p>
                    <Bubbles />
                </p>
                <p>
                    <Hexagons />
                </p>
                <p>
                    <IceCreamStack />
                </p>
            </>
        )
    }
    return (
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
    )
}

export default Play;
