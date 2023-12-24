'use client'

import styles from './PlayArea.module.css'
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
const PlayArea = (props: any) => { // todo: replace :any type

    const getInitialTideLevel = () => {
        if (Object.keys(props.userTideLevel).length > 0) {
            return props.userTideLevel;
        } else {
            return initialTideLevel
        }
    }
    const getInitialKanaScores = () => {
        if (Object.keys(props.userKanaScores).length > 0) {
            return props.userKanaScores;
        } else {
            return scoreByKana;
        }
    }

    const getInitialIceCreamStack = () => {
        if (Object.keys(props.useIceCreamStackData).length > 0) {
            return props.useIceCreamStackData;
        } else {
            return [];
        }
    }

    const { data: session } = useSession(); // useSession is a client component
    const [ currentQuestionLetter, setCurrentQuestionLetter] = React.useState<string>('あ');
    const [ questionPool, setQuestionPool] = useState<string[]>([]);
    const [ kanaScore, setKanaScore ] = useState<object>(getInitialKanaScores());
    const [ iceCreamStack, setIceCreamStack ] = useState<IceCreamScoop[]>(getInitialIceCreamStack());
    const [ tideLevel, setTideLevel ] = useState<object>(getInitialTideLevel());

    /* Picking a random character from the question pool START */
    const getTotalScore = (kanaScore: object) => {
        let totalScore = 0;
        Object.values(kanaScore).forEach((characterScore) => {
        totalScore += characterScore});
        return totalScore;
    }
    const totalScore = getTotalScore(kanaScore);
    const newQuestion = (): string => {
        const randomIndex = Math.floor(Math.random() * questionPool.length);
        return questionPool[randomIndex]
    }
    React.useEffect(() => {
        if (questionPool.length > 0) {
            // We need useEffect here because if we don't,
            // a random character will be generated whenever the user clicks to another tab and comes back
            // (this happens in both dev mode and production mode)
            const currentQuestionLetter = newQuestion();
            setCurrentQuestionLetter(currentQuestionLetter);
        }
    }, [questionPool])

    const saveScore = async (tideLevel: any, totalScore: Number, kanaScores: any, iceCreamStack: any): Promise<void> => { // todo: refine :any type
        console.log("saving score...")
        //  POST data to DB via route handlers here
        const res = await fetch('/play/sendScore/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // todo: pass current game tideLevel state as request body
            body: JSON.stringify({ tideLevel, totalScore, kanaScores, iceCreamStack})
        });
        console.log(res);
    }
    if (session && session.user) {
        // Logged in state
        return (
            <>
                <button onClick={() => {
                    saveScore(tideLevel, totalScore, kanaScore, iceCreamStack)
                }}>
                    SAVE PROGRESS
                </button>
            <p>
                Question Filter
                <p style={{fontSize: "40px", color: "coral"}}>
                    YOU SCORE FETCHED FROM DB: {props.userTotalScoreData}
                </p>
                <br />
                <QuestionFilter
                    questionPool={questionPool}
                    setQuestionPool={setQuestionPool}

                />
            </p>
            <main className={styles.gameGrid}>
                <p className={styles.QuestionWord}>
                    <QuestionWord
                        generateQuestion={():void => setCurrentQuestionLetter(newQuestion)}
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
                        generateQuestion={():void => setCurrentQuestionLetter(newQuestion)}
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
                        setIceCreamStack={setIceCreamStack}
                        iceCreamStack={iceCreamStack}
                        score={totalScore} />
                </p>
            </main>
            </>
        )
    }
    return (
        // Logged-out state todo: delete this after refactoring "logged out" state to render server-side component (assuming no client state is needed)
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

export default PlayArea;
