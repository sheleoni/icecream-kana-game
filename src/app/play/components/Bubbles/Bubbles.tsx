'use client'; // the parent component is already a client component, so we can technically omit this declaration here. But leaving it in for clarity sake.

import Image from "next/image";
import styles from "./Bubbles.module.css"
import rowKana from "@/app/play/data/rowKana";
import rowRomaji from "@/app/play/components/Bubbles/rowRomaji";
import kanaRomaji from "@/app/play/components/Bubbles/kanaRomaji";
import React from "react"; // 'あ行': ['a', 'i', 'u', 'e', 'o'],

type Props = {
    currentQuestionLetter: string,
    setKanaScore: React.Dispatch<React.SetStateAction<object>>,
    kanaScore: object,
    generateQuestion: () => void,
    tideLevel: object,
    setTideLevel: React.Dispatch<React.SetStateAction<object>>
}

type TideLevel = {
    [key: string]: number,
}

function Bubbles ({
    currentQuestionLetter = 'あ',
    setKanaScore,
    kanaScore,
    generateQuestion,
    tideLevel,
    setTideLevel
    }: Props) {
    // const tempChoiceArray = ['a', 'i', 'u', 'e', 'o'];

    const findRowByKana = (kana: string, rowKana: {[key: string]: string[]}): string | null => {
        // returns the row of the single inputted kana character (e.g. input 「こ」 → outputs 「か行」 since こ belongs to か行)
        for (const [row, kanaArray] of Object.entries(rowKana)) {
            // Object.entries(rowKana) looks like this:
            // [    ↓ row    ↓ kanaArray
            //     ['あ行', ['あ', 'い', 'う', 'え', 'お']],
            //     ['か行', ['か', 'き', 'く', 'け', 'こ']],
            //     and so on...
            // ]
            if (kanaArray.includes(kana)) {
                return row;
            }
        }
        return null;  // or throw an error, or return a default value, etc.
    }
    const currentQuestionRow = `${findRowByKana(currentQuestionLetter, rowKana)}`;
    const choiceArray = rowRomaji[currentQuestionRow as keyof typeof rowRomaji];
    const romajiAnswer = kanaRomaji[currentQuestionLetter as keyof typeof kanaRomaji];

    const bubbleChoicesKana = rowKana[currentQuestionRow as keyof typeof rowKana];

    const handleClickBubble = (choice: string, romajiAnswer: string, kanaAnswer: string, kanaScore: object, currentQuestionLetter: string, setKanaScore: React.Dispatch<React.SetStateAction<object>>) => {
        if (isCorrectAnswer(choice, romajiAnswer, kanaScore, kanaAnswer)) {
            // increase score
            const nextKanaScore = { ... kanaScore };
            (nextKanaScore as {[key: string]: number})[currentQuestionLetter] += 1;
            setKanaScore(nextKanaScore);
            // go to next question on correct answer
            generateQuestion()

            // add one to tide level (if tide level is not already at its max, 5)
            const currentTideLevel = tideLevel[kanaAnswer as keyof typeof tideLevel];
            if (currentTideLevel < 5) {
                const nextTideLevel: TideLevel = { ...tideLevel };
                nextTideLevel[kanaAnswer] += 1;
                setTideLevel(nextTideLevel);
            }
        }
    }
    const isCorrectAnswer = (choice: string, romajiAnswer: string, kanaScore: object, kanaAnswer: string) => {
        console.log(choice, 'CHOICEEE')
        console.log(kanaAnswer, 'KANA ANS') // user's choice bubble in kana (a → あ)
        return choice === romajiAnswer;
    }

    return (
        <>
            <aside className={styles.bubbleAreaContainer}>
                <ol>
                { choiceArray?.map((choice, index: number) => {
                    const kanaAnswer = rowKana[currentQuestionRow as keyof typeof rowKana][index];
                    return (
                        <li key={choice} className={styles.bubbleContainer} onClick={() => handleClickBubble(choice, romajiAnswer, kanaAnswer, kanaScore, currentQuestionLetter, setKanaScore)}
                        >
                        {/*    todo: use rowKana.js to pass Kana to handleClickBubble for checking answer (romaji is not enough) */}
                        {/*  todo: consider getting length of choice (e.g. 'i' = 1; 'tsu' = 3 and adjust size with different CSS classes  */}
                        <Image
                             src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1676767326/hiragana_game/Bubble_background_opudxy.gif"
                             alt=""
                             width={150}
                             height={150}
                             className={styles.bubbleImage}
                        />
                            <span className={styles.choiceLetter}>
                                {choice}
                                {/*{kanaAnswer}*/}
                            </span>
                        </li>
                    )
                    })
                }
                </ol>
            </aside>
        </>
    )
}

export default Bubbles;
