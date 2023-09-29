'use client'; // the parent component is already a client component, so we can technically omit this declaration here. But leaving it in for clarity sake.

import Image from "next/image";
import styles from "./Bubbles.module.css"
import rowKana from "@/app/play/components/Bubbles/rowKana"; // 'あ行': ['あ', 'い', 'う', 'え', 'お'],
import rowRomaji from "@/app/play/components/Bubbles/rowRomaji"; // 'あ行': ['a', 'i', 'u', 'e', 'o'],

type Props = {
    currentQuestionLetter: string,
}
const Bubbles = ({ currentQuestionLetter }: Props) => {
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

    return (
        <>
            <aside className={styles.bubbleAreaContainer}>
                {/* todo: ↑ bubbles container */}
                <ol>
                { tempChoiceArray?.map((choice) => {
                    return (
                        <li key={choice} className={styles.bubbleContainer}>
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
