import Hexagon from "@/app/play/components/Hexagons/Hexagon/Hexagon";
import styles from './Hexagons.module.css';
import rowKana from "@/app/play/data/rowKana";
import React from "react";

type Props = {
    currentQuestionLetter: string,
    tideLevel: object,
    setTideLevel: React.Dispatch<React.SetStateAction<object>>
}

type TideLevel = {
    [key: string]: number,
}
const Hexagons = ({ currentQuestionLetter, tideLevel, setTideLevel }: Props) => {
    const findRowByKana = (kana: string, rowKana: {[key: string]: string[]}): string | null => { // todo: refactor duplicate function here (also in <Bubbles /> component
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
    const currentQuestionRow: string = `${findRowByKana(currentQuestionLetter, rowKana)}`; // todo: refactor duplicate variable here (also in <Bubbles /> component
    const hexagonCharacters: string[] = rowKana[currentQuestionRow as keyof typeof rowKana];

    const handleClickHexagon = (characterTideLevel: number, character: string): void => {
        if (characterTideLevel < 5) { return }
        // if hexagon tide level = 5, reset hexagon level
        const nextTideLevel: TideLevel = { ...tideLevel };
        nextTideLevel[character] = 0;
        setTideLevel(nextTideLevel);
        // todo: handle click hexagon

        // todo: add new ice cream scoop
        // todo: maybe POST added icecream scoop on click
        console.log("clicked hex")
    }

    return (
        <>
            <ol className={styles.hexagonsContainer}>
            {
                hexagonCharacters?.map((character: string) => {
                    return (
                            <li key={character}
                                className={styles.hexagon}
                                onClick={() => handleClickHexagon(tideLevel[character as keyof typeof tideLevel], character)}
                            >
                                <Hexagon
                                    character={character}
                                    tideLevel={tideLevel[character as keyof typeof tideLevel]}
                                />
                                tideLevel: {tideLevel[character as keyof typeof tideLevel]}
                            </li>)
                })
            }
            </ol>
        </>
    )
}

export default Hexagons;
