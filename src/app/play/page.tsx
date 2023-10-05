'use client'

import styles from './Play.module.css'
import QuestionWord from "@/app/play/components/QuestionWord/QuestionWord";
import QuestionFilter from "@/app/play/components/QuestionFilter/QuestionFilter";
import Bubbles from "@/app/play/components/Bubbles/Bubbles";
import IceCreamStack from "@/app/play/components/IceCreamStack/IceCreamStack";
import initialTideLevel from "@/app/play/data/tideLevel";
import {useSession} from "next-auth/react";
import Link from 'next/link';
import React, {useState} from "react";
import Hexagons from "@/app/play/components/Hexagons/Hexagons";
import scoreByKana from "@/app/play/data/scoreByKana";

type IceCreamScoop = {
    name: string;
    imgURL: string;
}
const Play = () => {
    const { data: session } = useSession(); // useSession is a client component
    const [ currentQuestionLetter, setCurrentQuestionLetter] = React.useState<string>('あ');
    const [ questionPool, setQuestionPool] = useState<string[]>([]);
    const [ kanaScore, setKanaScore ] = useState<object>(scoreByKana);
    const [ tideLevel, setTideLevel ] = useState<object>(initialTideLevel);
    const [ iceCreamStack, setIceCreamStack ] = useState<IceCreamScoop[]>([]);
    /* Picking a random character from the question pool START */
    const getTotalScore = (kanaScore: object) => {
        let totalScore = 0;
        Object.values(kanaScore).forEach((characterScore) => {
        totalScore += characterScore});
        return totalScore;
    }
    const totalScore = getTotalScore(kanaScore);

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
                        tideLevel={tideLevel}
                        setTideLevel={setTideLevel}
                        currentQuestionLetter={currentQuestionLetter}
                        kanaScore={kanaScore}
                        setKanaScore={setKanaScore}
                        generateQuestion={():void => setCurrentQuestionLetter(generateQuestion)}
                    />
                </p>
                <p className={styles.Hexagons}>
                    <Hexagons
                        iceCreamStack={iceCreamStack}
                        setIceCreamStack={setIceCreamStack}
                        tideLevel={tideLevel}
                        setTideLevel={setTideLevel}
                        currentQuestionLetter={currentQuestionLetter} />
                </p>
                <p className={styles.IceCreamStack}>
                    <IceCreamStack
                        iceCreamStack={iceCreamStack}
                        score={totalScore} />
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
