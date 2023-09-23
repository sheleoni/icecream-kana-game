'use client'

import QuestionWord from "@/app/play/components/QuestionWord/QuestionWord";
import QuestionFilter from "@/app/play/components/QuestionFilter/QuestionFilter";
import Bubbles from "@/app/play/components/Bubbles";
import Hexagons from "@/app/play/components/Hexagons";
import IceCreamStack from "@/app/play/components/IceCreamStack";
import characterList from "@/letterData/characterList";
import {useSession} from "next-auth/react";
import Link from 'next/link';
import React, {useState} from "react";
const Play = () => {
    const { data: session } = useSession(); // useSession is a client component
    const [currentQuestionLetter, setCurrentQuestionLetter] = React.useState< string | null>(null);
    const [ questionPool, setQuestionPool] = useState<string[]>([]);

    /* Picking a random character from the question pool START */
    const generateQuestion = (): string => {
        const randomIndex = Math.floor(Math.random() * questionPool.length);
        return questionPool[randomIndex]
    }
    React.useEffect(() => {
        if (questionPool.length > 0) {
            // We need useEffect here because if we don't,
            // a random character will be generated whenever the user clicks to another tab and comes back
            // (this happens in both dev mode and production mode)
            const currentQuestionLetter = generateQuestion();
            setCurrentQuestionLetter(currentQuestionLetter);
        }
    }, [questionPool])
    /* Picking a random character from the question pool END */

    if (session && session.user) {
        // Logged in state
        return (
            <>
                <p>
                    Question Filter
                    <br />
                    <QuestionFilter
                        questionPool={questionPool}
                        setQuestionPool={setQuestionPool}
                    />
                </p>
                <p>
                    <QuestionWord
                        generateQuestion={():void => setCurrentQuestionLetter(generateQuestion)}
                        currentQuestionLetter={currentQuestionLetter}
                    />
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
        // Logged-out state
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
