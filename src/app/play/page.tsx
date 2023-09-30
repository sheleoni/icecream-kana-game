'use client'

import styles from './Play.module.css'
import QuestionWord from "@/app/play/components/QuestionWord/QuestionWord";
import QuestionFilter from "@/app/play/components/QuestionFilter/QuestionFilter";
import Bubbles from "@/app/play/components/Bubbles/Bubbles";
import IceCreamStack from "@/app/play/components/IceCreamStack/IceCreamStack";
import characterList from "@/letterData/characterList";
import {useSession} from "next-auth/react";
import Link from 'next/link';
import React, {useState} from "react";
import Hexagons from "@/app/play/components/Hexagons/page";
const Play = () => {
    const { data: session } = useSession(); // useSession is a client component
    const [ currentQuestionLetter, setCurrentQuestionLetter] = React.useState<string>('あ');
    const [ questionPool, setQuestionPool] = useState<string[]>([]);
    const [ score, setScore ] = useState<number>(0); // todo: not sure if initial score = 0 while GETting data from DB is a good idea. Reconsider this at a later stage.
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
            <main className={styles.gameGrid}>
                <p className={styles.QuestionWord}>
                    <QuestionWord
                        generateQuestion={():void => setCurrentQuestionLetter(generateQuestion)}
                        currentQuestionLetter={currentQuestionLetter}
                    />
                </p>
                <p className={styles.Bubbles}>
                    <Bubbles
                        currentQuestionLetter={currentQuestionLetter}
                        score={score}
                        setScore={setScore}
                        generateQuestion={():void => setCurrentQuestionLetter(generateQuestion)}
                    />
                </p>
                <p className={styles.Hexagons}>
                    <Hexagons />
                </p>
                <p className={styles.IceCreamStack}>
                    <IceCreamStack score={score} />
                </p>
            </main>
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
