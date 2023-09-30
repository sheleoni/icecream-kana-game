'use client'; // the parent component is already a client component, so we can technically omit this declaration here. But leaving it in for clarity sake.

import Image from "next/image";
import styles from "./Bubbles.module.css"
import rowKana from "@/app/play/components/Bubbles/rowKana"; // 'あ行': ['あ', 'い', 'う', 'え', 'お'],
import rowRomaji from "@/app/play/components/Bubbles/rowRomaji";
import kanaRomaji from "@/app/play/components/Bubbles/kanaRomaji";
import React from "react"; // 'あ行': ['a', 'i', 'u', 'e', 'o'],

type Props = {
    currentQuestionLetter: string,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    score: number,
    generateQuestion: () => void,
}
function Bubbles ({ currentQuestionLetter = 'あ', setScore, score, generateQuestion }: Props) {
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
    const tempChoiceArray = rowRomaji[currentQuestionRow as keyof typeof rowRomaji];
    const romajiAnswer = kanaRomaji[currentQuestionLetter as keyof typeof kanaRomaji];

    const handleClickBubble = (choice: string, romajiAnswer: string, score: number) => {
        if (isCorrectAnswer(choice, romajiAnswer, score)) {
            generateQuestion()
        };

    }
    const isCorrectAnswer = (choice: string, romajiAnswer: string, score: number) => {
            console.log('correct!')
            console.log(romajiAnswer)
        if (choice === romajiAnswer) {
            setScore(() => (score + 1));
            return true;
        }
        return false;
    }

    return (
        <>
            <aside className={styles.bubbleAreaContainer}>
                <ol>
                { tempChoiceArray?.map((choice) => {
                    return (
                        <li key={choice} className={styles.bubbleContainer} onClick={() => handleClickBubble(choice, romajiAnswer, score)}
                        >
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
